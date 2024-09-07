import { create } from 'zustand';
import {
  useRouterDataState,
  LinkDetail,
  Users,
  UpdateLinkResponse,
  LinkDetailArray,
} from '../types/types';
import useAuthStore from './useAuthStore';
import apiGetUsers from '../service/apiData';
import apiUpdateLink from '@/service/apiUpdateLink';

interface Link {
  key: string;
  label: string;
  url: string;
  color: string;
}

const useUserStore = create<useRouterDataState>((set, get) => ({
  user: null,
  link: null,
  loading: false,
  error: null,

  setUser: (user: Users) => set({ user }),

  setLink: (link: LinkDetail[]) => set({ link }),

  fetchData: async (): Promise<void> => {
    const { userId } = useAuthStore.getState();
    set({ loading: true, error: null });
    try {
      const response = await apiGetUsers();
      const user = response.users.find((u) => u._id === userId) || null;
      if (user && user.links) {
        set({ user: user, link: user.links, loading: false });
      } else {
        set({ user, loading: false });
      }
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : 'An unknown error occurred';
      set({ error: errorMsg, loading: false });
    }
  },

  addLink: (newLink: Link) =>
    set((state) => ({
      link: state.link ? [...state.link, newLink] : [newLink],
    })),

  updateLink: (
    oldKey: string,
    newKey: string,
    label: string,
    url: string,
    color: string
  ) =>
    set((state) => {
      if (!state.link) return state;
      const updatedLinks = state.link.map((link) => {
        if (link.key === oldKey) {
          return { key: newKey, label, url, color };
        }
        return link;
      });
      console.log('Updated links array:', updatedLinks);
      return {
        ...state,
        link: updatedLinks,
      };
    }),

  removeLink: (linkKey: string) =>
    set((state) => ({
      link: state.link ? state.link.filter((link) => link.key !== linkKey) : [],
    })),

  updateLinkBack: async (validateLinks: LinkDetailArray): Promise<void> => {
    const { user } = get();
    if (!user) return;

    try {
      const response: UpdateLinkResponse = await apiUpdateLink(
        user._id,
        validateLinks
      );
      const linkResponse = response.links ?? [];
      console.log(linkResponse);
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  },
}));

export default useUserStore;
