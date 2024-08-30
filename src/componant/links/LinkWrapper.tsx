import React from 'react';
import Image from 'next/image';

interface LinkWrapperProps {
  label: string;
  color: string;
  src: string;
  url: string;
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({
  label,
  color,
  src,
  url,
}) => {
  const isFrontend = label === 'Frontend';

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
        <Image
          src={src}
          alt={`${label} "icon"`}
          width={16}
          height={16}
          className="pt-0.5"
          priority
        />
        <p className={`${isFrontend ? 'text-black' : 'text-white'}`}>
          {isFrontend ? `${label} Mentor ` : label}
        </p>
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
