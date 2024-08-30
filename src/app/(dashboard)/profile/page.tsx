'use client';

import React, { useEffect } from 'react';
import withAuth from '../../../componant/withAuth/WithAuth';
import MainLayout from '@/componant/layout/MainLayout';
import MobileContainer from '@/componant/containers/MobileContainer';
import SettingContainer from '@/componant/containers/SettingContainer';
import Loading from '@/componant/loading/Loading';
import Error from '@/componant/error/Error';
import useUserStore from '@/store/useUsersStore';

const Profil = () => {
  const { loading, error, fetchData } = useUserStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <MainLayout>
      <div className="flex gap-5 mx-auto sm:w-[95%] h-[90%]">
        <div className=" lg:flex lg:justify-center bg-white w-[45%] h-full hidden rounded-lg">
          <MobileContainer />
        </div>
        <div className="bg-white w-full lg:w-[60%] h-full rounded-lg">
          <SettingContainer type={'profil'} />
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(Profil);
