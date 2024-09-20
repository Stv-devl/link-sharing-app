'use client';

import React from 'react';
import Button from '../button/Button';
import PreviewBtn from '../button/PreviewBtn';

/**
 * PreviewBanner component renders a banner with a back button and share button.
 * It is used in the preview mode of the application.
 * @returns {JSX.Element} The PreviewBanner component containing the back button and share button.
 */

const PreviewBanner = (): JSX.Element => {
  return (
    <header className="relative z-20 mx-auto p-0 sm:py-0 sm:my-5 bg-white sm:w-[95%] sm:rounded-lg">
      <nav className="flex justify-between items-center px-2 sm:px-4 lg:px-6 py-4 h-[78px] ">
        <div className="w-[160px] h-[46px]">
          <PreviewBtn href={'/home'} label={'Back to Editor'} />
        </div>
        <div className="w-[160px] h-[46px]">
          <Button label={'Share link'} />
        </div>
      </nav>
    </header>
  );
};

export default PreviewBanner;
