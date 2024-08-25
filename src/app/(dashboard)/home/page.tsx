'use client';
import React, { useEffect } from 'react';
import useUserStore from '@/src/store/useUsersStore';
import Loading from '@/src/componant/loading/Loading';
import withAuth from '@/src/componant/form/withAuth/WithAuth';
import Error from '@/src/componant/error/Error';

const Home = () => {
  const { user, loading, error, fetchData } = useUserStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  console.log(user);

  return <div></div>;
};

export default withAuth(Home);
