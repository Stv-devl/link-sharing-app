import { DisplayProfileProps } from '@/types/types';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const DisplayPreviewProfile: React.FC<DisplayProfileProps> = ({ profile }) => {
  const pathname = usePathname();
  const isPreviewPage = pathname === '/preview';

  if (!profile) return null;

  const nameIsEmpty = profile.firstname === '' && profile.lastname === '';

  return (
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
        <div className="absolute top-[140px] right-[-24px] w-[250px]">
          <div className="flex justify-center h-9 bg-white">
            <p
              className={` text-dark-gray font-semibold capitalize truncate ${
                !isPreviewPage ? 'text-lg' : 'text-2xl	'
              }`}
            >
              {profile.firstname}&nbsp;{profile.lastname}
            </p>
          </div>
        </div>
      )}
      {profile.email && (
        <div
          className={`absolute left-6 w-[150px] h-7 bg-white text-sm font-normal  max-w-[200px] ${
            !isPreviewPage ? 'top-[170px]' : 'top-[185px]'
          }`}
        >
          <div className="flex justify-center items-centern ">
            <p className="truncate">{profile.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayPreviewProfile;
