'use client';

import { useState, useEffect } from 'react';
import apiVerify from '../../service/apiVerify';

/**
 * Custom hook to check if the user is authenticated.
 * It uses an API call to verify the authentication status and stores the result in a state.
 * @returns {{ isAuthenticated: boolean | null, setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>> }}
 * An object containing the authentication status and a setter function to update it.
 */

const useIsAuthenticated = (): {
  isAuthenticated: boolean | null;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>;
} => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyAuth = async () => {
      const authenticated = await apiVerify();
      setIsAuthenticated(authenticated);
    };

    verifyAuth();
  }, []);

  return { isAuthenticated, setIsAuthenticated };
};

export default useIsAuthenticated;
