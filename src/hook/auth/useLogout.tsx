'use client';

import { useRouter } from 'next/navigation';
import useAuthStore from '../../store/useAuthStore';

/**
 * Custom hook to handle user logout functionality.
 * It logs out the user, updates the authentication status, and redirects to the login page.
 * @returns {function} A function `handleLogout` that logs out the user and updates the authentication state.
 */

export const useLogout = () => {
  const { logout } = useAuthStore((state) => ({
    logout: state.logout,
  }));

  const router = useRouter();

  /**
   * Logs out the user, updates the authentication state, and redirects to the login page.
   * @param {React.Dispatch<React.SetStateAction<boolean | null>>} setIsAuthenticated - Function to update the authentication state.
   */

  const handleLogout = async (
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>
  ) => {
    logout();
    const res = await fetch('/api/logout', {
      method: 'POST',
    });
    if (res.ok) {
      setIsAuthenticated(false);
      console.log('Logged out successfully');
    } else {
      console.error('Failed to log out');
    }
    router.push('/login');
  };

  return handleLogout;
};
