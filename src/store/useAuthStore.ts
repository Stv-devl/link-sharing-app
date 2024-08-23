import { create } from 'zustand';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  userId: string | null;
  login: (token: string, userId: string) => void;
  logout: () => void;
}

/**
 * Zustand store for managing user authentication state.
 * @returns {AuthState} The current authentication state and actions to modify it.
 */

const useAuthStore = create<AuthState>((set) => ({
  token: Cookies.get('token') || null,
  userId: Cookies.get('userId') || null,

  /**
   * Logs in the user by saving the token and userId in cookies and updating the state.
   * @param {string} token - The authentication token.
   * @param {string} userId - The ID of the authenticated user.
   */
  login: (token: string, userId: string) => {
    const oneHour = 1 / 24;
    Cookies.set('token', token, { expires: oneHour });
    Cookies.set('userId', userId, { expires: oneHour });
    set({ token, userId });
  },

  /**
   * Logs out the user by removing the token and userId from cookies and updating the state.
   */
  logout: () => {
    Cookies.remove('token');
    Cookies.remove('userId');
    set({ token: null, userId: null });
  },
}));

export default useAuthStore;
