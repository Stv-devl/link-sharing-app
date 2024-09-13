'use client';

import React, { useEffect } from 'react';
import withAuth from '../../../componant/withAuth/WithAuth';
import PreviewBanner from '@/componant/banner/PreviewBanner';
import useUserStore from '@/store/useUsersStore';
import Loading from '@/componant/loading/Loading';
import Error from '@/componant/error/Error';
import LinkCard from '@/componant/links/display/LinkCard';
import DisplayPreviewProfile from '@/componant/profil/DisplayPreviewProfile';
import Modal from '@/componant/modal/Modal';

const Preview = () => {
  const { link, profile, loading, error, fetchData } = useUserStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const containerClass =
    link && link.length > 5
      ? 'sm:no-scrollbar sm:h-[360px] sm:overflow-y-auto '
      : 'h-auto';

  return (
    <main className="relative h-screen w-full ">
      <PreviewBanner />
      <section className="bg-background-white w-full h-screen relative">
        <div className="hidden sm:block absolute top-[-120px] left-0 z-10 bg-dark-purple w-full h-[357px] rounded-b-3xl"></div>
        <div className="relative z-0 bg-background-white w-screen h-screen"></div>
        <div className="absolute z-20 w-full sm:w-[390px] top-[450px] sm:top-[400px] h-full sm:h-[710px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white sm:rounded-3xl sm:shadow-custom-gray">
          <div className=" flex flex-col items-center w-full h-full p-12 gap-10">
            <div className="w-[200px] h-[200px]">
              <DisplayPreviewProfile profile={profile} />
            </div>
            <div className={`${containerClass} w-full`}>
              <LinkCard />
            </div>
          </div>
          {link && link.length > 5 && (
            <span className="absolute z-99 bottom-[2%] left-1/2 text-sm transform -translate-x-1/2 hidden sm:block">
              Scroll up and down
            </span>
          )}
        </div>
      </section>
      <Modal />
    </main>
  );
};

export default withAuth(Preview);
