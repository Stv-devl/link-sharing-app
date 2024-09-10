import Image from 'next/image';
import React from 'react';

const ProfilePictureWrapper = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-16 gap-4 bg-background-white p-5 rounded-lg">
      <p className="w-[150px]">Profile picture</p>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center content-center gap-6">
        <div className="flex flex-col justify-center items-center gap-2 w-[193px] min-w-[193px] min-h-[193px] bg-lightest-purple overflow-hidden cursor-pointer">
          <Image
            width={40}
            height={40}
            src={'/images/icon-upload-image.svg'}
            alt="profile picture"
          />
          <p className="font-semibold text-dark-purple">+ Upload a picture</p>
        </div>
        <p className="text-xs">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
};

export default ProfilePictureWrapper;
