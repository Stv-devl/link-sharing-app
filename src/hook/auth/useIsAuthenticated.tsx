'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import apiVerify from '../../service/apiVerify';
import useAuthStore from '../../store/useAuthStore';

/**
 * Custom hook to handle authentication and logout functionality.
 * It checks the authentication status and provides a logout function.
 * An object containing the authentication status and a logout function.
 */
const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const { logout } = useAuthStore((state) => ({ logout: state.logout }));
  const router = useRouter();

  useEffect(() => {
    const verifyAuth = async () => {
      const authenticated = await apiVerify();
      setIsAuthenticated(authenticated);
    };

    verifyAuth();
  }, []);

  const handleLogout = useCallback(async () => {
    logout();
    const res = await fetch('/api/logout', {
      method: 'POST',
    });
    if (res.ok) {
      setIsAuthenticated(false);
      console.log('Logged out successfully');
      router.push('/login');
    } else {
      console.error('Failed to log out');
    }
  }, [logout, router]);

  return { isAuthenticated, handleLogout };
};

export default useIsAuthenticated;
