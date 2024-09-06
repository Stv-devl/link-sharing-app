import React from 'react';
import Image from 'next/image';
import LinkCard from '../links/display/LinkCard';
import LinkPagination from '../links/display/LinkPagination';
import { usePathname } from 'next/navigation';
import useManagePagination from '@/hook/manage/useManagePagination';
import useUserStore from '@/store/useUsersStore';

const MobileContainer = () => {
  const { link } = useUserStore();

  const links = link || [];

  const { pages, pageNumbers, currentPage, setCurrentPage } =
    useManagePagination(links, 5);

  const pathname = usePathname();
  const isProfilPage = pathname === '/profile';

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
              isProfilPage ? 'bg-white z-2' : ''
            } absolute left-8 top-[278px] w-60 h-1/2`}
          >
            <LinkCard formatedLinks={pages[currentPage]} />
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
