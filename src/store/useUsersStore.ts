import { create } from 'zustand';
import {
  useRouterDataState,
  LinkDetail,
  Users,
  UpdateLinkResponse,
  LinkDetailArray,
  ProfilDetail,
  UpdateProfileResponse,
} from '../types/types';
import useAuthStore from './useAuthStore';
import apiGetUsers from '../service/apiData';
import apiUpdateLink from '@/service/apiUpdateLink';
import apiDelete from '@/service/apiDelete';
import apiUpdateProfile from '@/service/apiUpdateProfile';
import useModalStore from './useModalStore';

const useUserStore = create<useRouterDataState>((set, get) => ({
  user: null,
  profile: null,
  link: null,
  loading: false,
  error: null,

  /**
   * Sets the current user.
   * @param {Users} user - The user data to set.
   */
  setUser: (user: Users) => set({ user }),

  /**
   * Sets the user's links.
   * @param {LinkDetail[]} link - An array of link details to set.
   */
  setLink: (link: LinkDetail[]) => set({ link }),

  /**
   * Sets the user's profile.
   * @param {ProfilDetail} profile - The profile details to set.
   */
  setProfil: (profile: ProfilDetail) => set({ profile }),

  /**
   * Fetches user data from the API and updates the store.
   * @returns {Promise<void>} A promise that resolves when data fetching is complete.
   */
  fetchData: async (): Promise<void> => {
    const { userId } = useAuthStore.getState();
    set({ loading: true, error: null });
    try {
      const response = await apiGetUsers();
      const user = response.users.find((u) => u._id === userId) || null;
      if (user && user.links) {
        set({
          user: user,
          link: user.links,
          profile: user.profile,
          loading: false,
        });
      } else {
        set({ user, loading: false });
      }
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : 'An unknown error occurred';
      set({ error: errorMsg, loading: false });
    }
  },

  /**
   * Updates the user's profile locally without making an API call.
   * @param {ProfilDetail} value - The profile details to update.
   */
  updateProfileLocal: (value: ProfilDetail) => {
    set((state) => {
      if (typeof state.profile !== 'object' || state.profile === null)
        return state;

      return {
        profile: {
          ...state.profile,
          ...value,
        },
      };
    });
  },

  /**
   * Updates the user's profile in the backend and shows a success modal.
   * @param {ProfilDetail} updatedProfile - The updated profile details.
   * @returns {Promise<void>} A promise that resolves when the profile is updated.
   */
  updateProfileBack: async (updatedProfile: ProfilDetail): Promise<void> => {
    const { user } = get();
    if (!user) return;

    try {
      const response: UpdateProfileResponse = await apiUpdateProfile(
        user._id,
        updatedProfile
      );

      const profileResponse = response.profile ?? {};
      console.log(profileResponse);
      useModalStore.getState().openModal('upload');
    } catch (error) {
      console.error('Error updating the profile:', error);
      useModalStore.getState().openModal('error');
    }
  },

  /**
   * Adds a new link to the user's link list.
   * @param {LinkDetail} newLink - The new link to add.
   */
  addLink: (newLink: LinkDetail) =>
    set((state) => ({
      link: state.link ? [...state.link, newLink] : [newLink],
    })),

  /**
   * Updates a link locally without making an API call.
   * @param {string | null} oldKey - The key of the link to update. If null, replaces all links.
   * @param {LinkDetail | LinkDetail[]} updatedLink - The updated link or array of links.
   */
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

  /**
   * Updates the user's links in the backend after validation and shows a success modal.
   * @param {LinkDetailArray} validateLinks - The array of validated links to update.
   * @returns {Promise<void>} A promise that resolves when the links are updated.
   */
  updateLinkBack: async (validateLinks: LinkDetailArray): Promise<void> => {
    const { user } = get();
    if (!user) return;

    const updatedLinks = validateLinks.map((link) => ({
      ...link,
      isLocal: false,
    }));
    console.log('updated link backend', updatedLinks);
    try {
      const response: UpdateLinkResponse = await apiUpdateLink(
        user._id,
        updatedLinks
      );
      const linkResponse = response.links ?? [];
      console.log(linkResponse);
      useModalStore.getState().openModal('upload');
    } catch (error) {
      console.error('Error updating the links:', error);
      useModalStore.getState().openModal('error');
    }
  },

  /**
   * Removes a link locally without making an API call.
   * @param {string} linkKey - The key of the link to remove.
   */
  removeLink: (linkKey: string) =>
    set((state) => ({
      link: state.link ? state.link.filter((link) => link.key !== linkKey) : [],
    })),

  /**
   * Removes a link from the backend and updates the local state.
   * @param {string} linkKey - The key of the link to remove.
   * @returns {Promise<void>} A promise that resolves when the link is removed.
   */
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
}));

export default useUserStore;
