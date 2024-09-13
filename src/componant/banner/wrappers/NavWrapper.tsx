import React from 'react';
import Link from 'next/link';
import IconLinkSvg from '../../../assets/icon-link.svg';
import IconProfilSvg from '../../../assets/icon-profile-details-header.svg';
import { IconWrapperType } from '@/types/types';

const NavWrapper: React.FC<IconWrapperType> = ({ type, isSelected, link }) => {
  const Icon = type === 'link' ? IconLinkSvg : IconProfilSvg;

  return (
    <Link
      href={link}
      className={`group flex items-center justify-center gap-2 rounded-lg transition duration-500 font-semibold w-[52px] h-11 sm:h-12  ${
        type === 'link' ? 'sm:w-[90px]' : 'sm:w-[150px]'
      }  ${
        isSelected
          ? 'bg-lightest-purple text-dark-purple'
          : 'hover:bg-lightest-purple'
      }`}
    >
      <Icon
        className={`transition duration-500 fill-current w-5 h-5
          ${isSelected ? 'text-dark-purple' : 'group-hover:text-dark-purple'}`}
        aria-hidden="true"
      />
      <p className="sm:block hidden transition duration-500 group-hover:text-dark-purple">
        {type === 'link' ? 'Links' : 'Profile Details'}
      </p>
    </Link>
  );
};

export default NavWrapper;
