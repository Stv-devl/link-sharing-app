import { create } from 'zustand';
import {
  useRouterDataState,
  LinkDetail,
  Link,
  Users,
  UpdateLinkResponse,
  LinkDetailArray,
} from '../types/types';
import useAuthStore from './useAuthStore';
import apiGetUsers from '../service/apiData';
import apiUpdateLink from '@/service/apiUpdateLink';
import apiDelete from '@/service/apiDelete';

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

  updateLinkLocal: (
    oldKey: string | null,
    updatedLink: LinkDetail | LinkDetail[]
  ) =>
    set((state) => {
      if (!state.link || !Array.isArray(state.link)) return state;

      const updatedLinks = oldKey
        ? state.link.map((link) =>
            link.key === oldKey ? { ...link, ...updatedLink } : link
          )
        : Array.isArray(updatedLink)
        ? updatedLink
        : [updatedLink];

      return {
        ...state,
        link: updatedLinks,
      };
    }),

  removeLink: (linkKey: string) =>
    set((state) => ({
      link: state.link ? state.link.filter((link) => link.key !== linkKey) : [],
    })),

  removeLinkBack: async (linkKey: string): Promise<void> => {
    const { user } = get();
    if (!user) return;
    try {
      await apiDelete(user._id, linkKey);

      set((state) => ({
        link: state.link
          ? state.link.filter((link) => link.key !== linkKey)
          : [],
      }));
    } catch (error) {
      console.error('Error removing link:', error);
    }
  },

  updateLinkBack: async (validateLinks: LinkDetailArray): Promise<void> => {
    const { user } = get();
    if (!user) return;

    const updatedLinks = validateLinks.map((link) => ({
      ...link,
      isLocal: false,
    }));

    console.log('updated linkback', updatedLinks);

    try {
      const response: UpdateLinkResponse = await apiUpdateLink(
        user._id,
        updatedLinks
      );
      const linkResponse = response.links ?? [];
      console.log(linkResponse);
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  },
}));

export default useUserStore;
