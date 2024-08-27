'use client';
import React, { useEffect } from 'react';
import useUserStore from '../../../store/useUsersStore';
import Loading from '../../../componant/loading/Loading';
import withAuth from '../../../componant/withAuth/WithAuth';
import Error from '../../../componant/error/Error';

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
