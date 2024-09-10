import React from 'react';
import Image from 'next/image';
import { icones } from '../../../constantes/constantes';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { LinkWrapperProps } from '@/types/types';
import { formatText } from '@/utils/formatText';

const LinkWrapper: React.FC<LinkWrapperProps> = ({ id, label, color, url }) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

  const isFrontend = label === 'Frontend Mentor';
  const iconKey = `Icon${formatText(label)}` as keyof typeof icones;
  const IconComponent = icones[iconKey];

  const handleClick = () => {
    console.log(url);
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: 'background-color 0.2s ease',
        userSelect: 'none' as const,
      }}
      className={`flex justify-between items-center bg-${color} sortable-item ${
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
