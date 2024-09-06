'use client';

import React, { useEffect } from 'react';
import withAuth from '../../../componant/withAuth/WithAuth';
import PreviewBanner from '@/componant/banner/PreviewBanner';
import useUserStore from '@/store/useUsersStore';
import Loading from '@/componant/loading/Loading';
import Error from '@/componant/error/Error';

const Preview = () => {
  const { loading, error, fetchData } = useUserStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <main className="h-screen w-full ">
      <PreviewBanner />
      <section className="bg-background-white w-full h-screen"></section>;
    </main>
  );
};

export default withAuth(Preview);
