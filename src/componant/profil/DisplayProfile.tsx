import { DisplayProfileProps } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const DisplayProfile: React.FC<DisplayProfileProps> = ({ profile }) => {
  if (!profile) return null;

  const nameIsEmpty = profile.firstname === '' && profile.lastname === '';

  return (
    <div className={`absolute top-10 left-[55px] w-[200px] h-[200px] `}>
      <div className="relative h-full w-full">
        {profile?.image && (
          <div className="absolute top-5 left-12 w-[108px] h-[108px] border-4 border-dark-purple rounded-full flex justify-center items-center bg-white">
            <Image
              src={profile.image}
              alt="Profile"
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-cover rounded-full"
            />
          </div>
        )}
        {!nameIsEmpty && (
          <>
            <div className="absolute top-[140px] left-0 w-[200px] h-9 bg-white">
              <p className="flex justify-center text-dark-gray text-lg font-semibold capitalize">
                {profile.firstname}
                &nbsp;
                {profile.lastname}
              </p>
            </div>
          </>
        )}
        {profile.email && (
          <div className="absolute top-[170px] left-0 w-[200px] h-7 bg-white text-sm font-normal">
            <p className="flex justify-center">{profile.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayProfile;
