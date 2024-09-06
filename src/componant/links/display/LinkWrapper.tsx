import React from 'react';
import Image from 'next/image';
import { icones } from '../../../constantes/constantes';
import { LinkWrapperProps } from '@/types/types';
import { formatText } from '@/utils/formatText';

const LinkWrapper: React.FC<LinkWrapperProps> = ({ label, color, url }) => {
  const isFrontend = label === 'Frontend Mentor';
  const iconKey = `Icon${formatText(label)}` as keyof typeof icones;
  const IconComponent = icones[iconKey];

  const handleClick = () => {
    console.log(url);
  };
  return (
    <div
      className={`flex justify-between items-center bg-${color} ${
        isFrontend ? 'border' : ''
      } rounded-lg px-4 cursor-pointer w-full h-11`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        {IconComponent && <IconComponent style={{ color: '#FFFFFF' }} />}
        <p className={`${isFrontend ? 'text-black' : 'text-white'}`}>{label}</p>
      </div>
      <Image
        src={`${
          isFrontend
            ? '/images/icon-arrow-right-dark.svg'
            : '/images/icon-arrow-right.svg'
        }`}
        alt={`follow the link`}
        width={16}
        height={16}
        className="w-[16px] h-[16px]"
        priority
      />
    </div>
  );
};

export default LinkWrapper;
