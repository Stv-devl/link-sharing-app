import React from 'react';
import { icones } from '../../../constantes/constantes';
import { CustomDefaultOptionProps } from '@/types/types';

const CustomDefaultOption: React.FC<CustomDefaultOptionProps> = ({ data }) => {
  const isFrontend = data.label === 'Frontend Mentor';
  const iconKey = `Icon${data.label.replace(/[\s.]+/g, '').toLowerCase()}`;
  const IconComponent = icones[iconKey as keyof typeof icones];

  return (
    <div
      className="flex items-center "
      style={{
        position: 'relative',
        top: '-23px',
      }}
    >
      {IconComponent && (
        <IconComponent
          className={isFrontend ? 'w-5 h-5 mr-2' : 'w-4 h-4 mr-2'}
          style={{ color: '#737373' }}
        />
      )}
      <span>{data.label}</span>
    </div>
  );
};

export default CustomDefaultOption;
