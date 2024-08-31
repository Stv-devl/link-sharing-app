import React from 'react';
import Image from 'next/image';
import LinkCard from '../links/LinkCard';
import useUserStore from '@/store/useUsersStore';
import LinkPagination from '../links/LinkPagination';
import useManageLinks from '@/hook/data/useManageLinks';
import { usePathname } from 'next/navigation';

const MobileContainer = () => {
  const { user } = useUserStore();
  const pathname = usePathname();

  const { pages, pageNumbers, currentPage, setCurrentPage } = useManageLinks(
    user,
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
            className="z-1"
            priority
          />
          <div
            className={`${
              pathname === '/profile' ? 'bg-white z-2' : ''
            } absolute left-8 top-[278px] w-60 h-1/2`}
          >
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
