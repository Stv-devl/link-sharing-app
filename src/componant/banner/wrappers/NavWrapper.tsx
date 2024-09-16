import React from 'react';
import Link from 'next/link';
import IconLinkSvg from '../../../assets/icon-link.svg';
import IconProfilSvg from '../../../assets/icon-profile-details-header.svg';
import { IconWrapperType } from '@/types/types';

/**
 * NavWrapper renders a navigation link with an icon and label.
 * It adjusts styling based on the link type and selection state.
 * @param {IconWrapperType} props - Component properties.
 * @param {'link' | 'profile'} props.type - The type of navigation link.
 * @param {boolean} props.isSelected - Indicates if the link is currently selected.
 * @param {string} props.link - The URL to navigate to.
 * @returns {JSX.Element} The NavWrapper component.
 */

const NavWrapper: React.FC<IconWrapperType> = ({
  type,
  isSelected,
  link,
}: IconWrapperType): JSX.Element => {
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
