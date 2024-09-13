'use client';
import React, { useEffect } from 'react';
import useUserStore from '../../../store/useUsersStore';
import Loading from '../../../componant/loading/Loading';
import withAuth from '../../../componant/withAuth/WithAuth';
import Error from '../../../componant/error/Error';
import MainLayout from '../../../layout/MainLayout';
import MobileContainer from '@/componant/containers/MobileContainer';
import SettingContainer from '@/componant/containers/SettingContainer';

const Home: React.FC = () => {
  const { loading, error, fetchData } = useUserStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <MainLayout>
      <div className="flex gap-5 mx-auto sm:w-[95%]">
        <div className=" lg:flex lg:justify-center bg-white w-[45%] hidden rounded-lg mb-6">
          <MobileContainer />
        </div>
        <div className="bg-white w-full lg:w-[60%] rounded-lg mb-6">
          <SettingContainer />
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(Home);
