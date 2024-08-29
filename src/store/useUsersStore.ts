import { create } from 'zustand';
import { useRouterDataState, Users } from '../types/types';
import useAuthStore from './useAuthStore';
import apiGetUsers from '../service/apiData';

/**
 * Zustand store for managing media data and user interactions.
 * @returns {MediaDataState} The current media data state and actions to modify it.
 */
const useUserStore = create<useRouterDataState>((set) => ({
  user: null,
  media: [],
  bookmarked: [],
  loading: false,
  error: null,
  /**
   * Sets the current user in the store.
   * @param {Users} user - The user object to be set in the store.
   */
  setUser: (user: Users) => set({ user }),

  /**
   * Fetches media and user data from the API, and updates the store.
   * It filters the media items based on the user's bookmarked items.
   * @returns {Promise<void>}
   */
  fetchData: async (): Promise<void> => {
    const { userId } = useAuthStore.getState();

    set({ loading: true, error: null });
    try {
      const { users } = await apiGetUsers();
      const user = users.find((u) => u._id === userId) || null;
      set({ user, loading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: 'An unknown error occurred', loading: false });
      }
    }
  },
}));

export default useUserStore;
