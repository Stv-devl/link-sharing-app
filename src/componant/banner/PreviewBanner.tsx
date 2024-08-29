import React from 'react';
import Button from '../button/Button';
import PreviewBtn from '../button/PreviewBtn';

const PreviewBanner = () => {
  const handleClick = () => {
    //modal with link copied
  };

  return (
    <header className="mx-auto my-5 bg-white sm:w-[95%] sm:rounded-lg">
      <nav className="flex justify-between items-center px-2 sm:px-4 lg:px-6 py-4 h-[78px] ">
        <div className="w-[160px] h-[46px]">
          <PreviewBtn href={'/home'} label={'Back to Editor'} />
        </div>
        <div className="w-[160px] h-[46px]">
          <Button label={'Share link'} onClick={handleClick} />
        </div>
      </nav>
    </header>
  );
};

export default PreviewBanner;
