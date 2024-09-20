'use client';

import React, { useEffect } from 'react';
import withAuth from '../../../componant/withAuth/WithAuth';
import PreviewBanner from '@/componant/banner/PreviewBanner';
import useUserStore from '@/store/useUsersStore';
import Loading from '@/componant/loading/Loading';
import Error from '@/componant/error/Error';
import LinkCard from '@/componant/links/display/LinkCard';
import DisplayPreviewProfile from '@/componant/profile/DisplayPreviewProfile';
import Modal from '@/componant/modal/Modal';

/**
 * Renders the Preview page component, which fetches user data upon mounting.
 * Displays a loading indicator during data fetching, an error message if fetching fails,
 * and the main content when data is successfully retrieved.
 * The component is wrapped with authentication to ensure access for authenticated users only.
 * @component
 * @returns {JSX.Element} The rendered Preview component, which may include a loading indicator or error message
 */

const Preview = (): JSX.Element => {
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
    <main className="relative">
      <PreviewBanner />
      <section className="relative">
        <div className="hidden sm:block absolute top-[-120px] left-0 z-10 bg-dark-purple w-full h-[357px] rounded-b-3xl"></div>
        <div className="relative z-0 bg-white sm:bg-background-white w-screen h-screen"></div>
        <div className="absolute z-20 top-0 left-0 w-full h-full">
          <div className="flex justify-center">
            <div className="w-full sm:w-[390px] h-full sm:h-[710px] bg-white sm:rounded-3xl sm:shadow-custom-gray sm:mt-10">
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
          </div>
        </div>
      </section>
      <Modal />
    </main>
  );
};

export default withAuth(Preview);
