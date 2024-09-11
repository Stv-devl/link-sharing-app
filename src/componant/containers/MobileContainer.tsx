import React from 'react';
import Image from 'next/image';
import LinkCard from '../links/display/LinkCard';
import { usePathname } from 'next/navigation';
import useUserStore from '@/store/useUsersStore';
import DisplayProfile from '../profil/DisplayProfile';

const MobileContainer = () => {
  const { link, profile } = useUserStore();

  const containerClass =
    link && link.length > 5
      ? 'no-scrollbar h-[300px] overflow-y-auto '
      : 'h-auto';

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
          <DisplayProfile profile={profile} />
          <div
            className={` ${containerClass} absolute left-8 top-[278px] w-60 h-1/2 ${
              isProfilPage ? 'bg-white h-[305px] z-2' : ''
            } `}
          >
            <LinkCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileContainer;
