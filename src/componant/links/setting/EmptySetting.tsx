import Image from 'next/image';
import React from 'react';

/**
 *  EmptySetting component renders a placeholder image when there are no links.
 *  It displays a message indicating that there are no links.
 * @returns {JSX.Element} The EmptySetting component.
 */

const EmptySetting = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full h-full bg-background-white rounded-lg p-7 sm:p-0">
      <Image
        src={'/images/illustration-empty.svg'}
        alt={`empty setting icon`}
        width={260}
        height={161}
        className="w-[250px] h-[160px]"
        priority
      />
      <h2 className="text-titleSmall sm:text-title text-black text-center">
        Let’s get you started
      </h2>
      <p className="text-center w-full sm:max-w-[490px]">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default EmptySetting;
