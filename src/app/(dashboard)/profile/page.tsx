'use client';

import React, { useEffect } from 'react';
import withAuth from '../../../componant/withAuth/WithAuth';
import MainLayout from '../../../layout/MainLayout';
import MobileContainer from '@/componant/containers/MobileContainer';
import ProfilContainer from '@/componant/containers/ProfilContainer';
import Loading from '@/componant/loading/Loading';
import Error from '@/componant/error/Error';
import useUserStore from '@/store/useUsersStore';

/**
 * Renders the Profile page component, which fetches user data upon mounting.
 * Displays a loading indicator during data fetching, an error message if fetching fails,
 * and the main content when data is successfully retrieved.
 * The component is wrapped with authentication to ensure access for authenticated users only.
 * @component
 * @returns {JSX.Element} The rendered Profile component, which may include a loading indicator or error message.
 */

const Profil = (): JSX.Element => {
  const { loading, error, fetchData } = useUserStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <MainLayout>
      <div className="flex gap-5 mx-auto sm:w-[95%] ">
        <div className=" lg:flex lg:justify-center bg-white w-[45%] hidden rounded-lg mb-6">
          <MobileContainer />
        </div>
        <div className="bg-white w-full lg:w-[60%] rounded-lg mb-6">
          <ProfilContainer />
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(Profil);
