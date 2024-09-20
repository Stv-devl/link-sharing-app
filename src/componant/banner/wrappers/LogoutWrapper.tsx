'use client';

import React from 'react';
import LogoutIcon from '../../../assets/icon-logout.svg';

/**
 * LogoutWrapper renders a logout button with dynamic styling and an icon.
 * The button includes hover effects and triggers the provided `onClick` handler when clicked.
 * @component
 * @param {Object} props - Component properties.
 * @param {() => void} props.onClick - Function to handle click events.
 * @returns {JSX.Element} The LogoutWrapper component.
 */

const LogoutWrapper: React.FC<{ onClick: () => void }> = ({
  onClick,
}: {
  onClick: () => void;
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={
        'flex items-center justify-center border border-dark-purple text-dark-purple hover:bg-lightest-purple rounded-lg w-[52px] h-11 sm:w-12 sm:h-12 cursor-pointer'
      }
    >
      <LogoutIcon className={'w-5 h-5'} />
    </button>
  );
};

export default LogoutWrapper;
