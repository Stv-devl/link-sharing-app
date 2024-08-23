import React, { useEffect, ComponentType } from 'react';
import { useRouter } from 'next/navigation';
import useIsAuthenticated from '../../../hook/auth/useIsAuthenticated';
import Loading from '../../loading/Loading';

/**
 * A higher-order component (HOC) that wraps a component to enforce authentication.
 * If the user is not authenticated, they are redirected to the login page.
 * While the authentication status is being determined, a loading spinner is shown.
 * @param {ComponentType<P>} Component - The component to wrap with authentication.
 * @returns {React.FC<P>} The wrapped component that requires authentication.
 */

const withAuth = <P extends object>(
  Component: ComponentType<P>
): React.FC<P> => {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();
    const { isAuthenticated } = useIsAuthenticated();

    useEffect(() => {
      if (isAuthenticated === false) {
        router.push('/login');
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated === null) {
      return <Loading />;
    }

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
