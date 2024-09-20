'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import IconLinkLarge from '../../../assets/logo-devlinks-large.svg';
import IconLinkSmall from '../../../assets/logo-devlinks-small.svg';

/**
 * LogoutWrapper renders a logout button with dynamic styling and an icon.
 * The button includes hover effects and triggers the provided `onClick` handler when clicked.
 * @param {Object} props - Component properties.
 * @param {() => void} props.onClick - Function to handle click events.
 * @returns {JSX.Element} The LogoutWrapper component.
 */

const LogoWrapper: React.FC = (): JSX.Element => {
  const isMobile = useMediaQuery({ query: '(min-width: 640px)' });

  return isMobile! ? (
    <div className="w-[120px] h-10 lg:w-[183px] lg:h-10">
      <IconLinkLarge className="w-full h-full max-w-full max-h-full" />
    </div>
  ) : (
    <IconLinkSmall />
  );
};

export default LogoWrapper;
