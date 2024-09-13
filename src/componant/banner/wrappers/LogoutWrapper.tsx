import React from 'react';
import LogoutIcon from '../../../assets/icon-logout.svg';

/**
 * Renders a serie icon with dynamic color based on selection state.
 * The icon changes color when selected and includes a hover effect when not selected.
 * @returns {JSX.Element} The home icon component.
 */

const LogoutWrapper: React.FC<{ onClick: () => void }> = ({
  onClick,
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
