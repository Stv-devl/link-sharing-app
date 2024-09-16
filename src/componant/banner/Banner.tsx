'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import useIsAuthenticated from '@/hook/auth/useIsAuthenticated';
import LogoWrapper from './wrappers/LogoWrapper';
import NavWrapper from './wrappers/NavWrapper';
import LogoutWrapper from './wrappers/LogoutWrapper';
import PreviewBtn from '../button/PreviewBtn';
import { navItems } from '@/constantes/constantes';

/**
 * Banner component renders the navigation bar and logout button at the top of the application.
 * It includes a LogoWrapper component for the logo and NavWrapper components for the navigation links.
 * @returns {JSX.Element} The Banner component containing the navigation bar and logout button.
 */

const Banner = (): JSX.Element => {
  const { handleLogout } = useIsAuthenticated();
  const pathname = usePathname();

  return (
    <header className="mx-auto my-5 bg-white sm:w-[95%] sm:rounded-lg">
      <nav className="flex justify-between items-center px-4 lg:px-6 py-4 h-[78px]">
        <LogoWrapper />
        <div className="flex gap-2 lg:gap-4 ">
          {navItems.map((item) => (
            <NavWrapper
              key={item.path}
              type={item.type}
              isSelected={pathname === item.path}
              link={item.path}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <div className=" w-[52px] h-[42px] sm:w-[100px] sm:h-[46px]">
            <PreviewBtn href={'/preview'} label={'Preview'} />
          </div>
          <LogoutWrapper onClick={handleLogout} />
        </div>
      </nav>
    </header>
  );
};

export default Banner;
