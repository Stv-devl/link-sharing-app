'use client';
import React, { useEffect } from 'react';
import useUserStore from '../../../store/useUsersStore';
import Loading from '../../../componant/loading/Loading';
import withAuth from '../../../componant/withAuth/WithAuth';
import Error from '../../../componant/error/Error';
import MainLayout from '@/componant/layout/MainLayout';

const Home: React.FC = () => {
  const { user, loading, error, fetchData } = useUserStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <MainLayout>
      <div></div>
    </MainLayout>
  );
};

export default withAuth(Home);
