import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import LinkCard from '../links/LinkCard';
import useUserStore from '@/store/useUsersStore';
import LinkPagination from '../links/LinkPagination';
import usePagination from '@/hook/data/usePagination';

const MobileContainer = () => {
  const { user } = useUserStore();

  const selectedLinks = useMemo(() => {
    return user && user.links
      ? Object.entries(user.links).filter(([, item]) => item.isSelected)
      : [];
  }, [user]);

  const { pages, pageNumbers, currentPage, setCurrentPage } = usePagination(
    selectedLinks,
    5
  );

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="relative">
          <Image
            src={'/images/illustration-phone-mockup.svg'}
            alt=""
            width={308}
            height={632}
            priority
          />
          <div className="absolute left-9 top-[278px] w-60">
            <LinkCard displayLinks={pages[currentPage]} />
          </div>
          <LinkPagination
            pages={pages}
            pageNumbers={pageNumbers}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default MobileContainer;
