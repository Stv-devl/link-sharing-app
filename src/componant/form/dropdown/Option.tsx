import React from 'react';
import { icones } from '../../../constantes/constantes';
import { OptionsProps } from '@/types/types';

const Option = (props: OptionsProps) => {
  const { data, innerRef, innerProps } = props;

  const isFrontend = data.label === 'Frontend Mentor';
  const iconKey = `Icon${data.label
    .replace(/[\s.]+/g, '')
    .toLowerCase()}` as keyof typeof icones;
  const IconComponent = icones[iconKey];

  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="flex items-center p-2 cursor-pointer hover:bg-lightest-purple"
    >
      <div className="flex items-center relative w-6 h-6 mr-2">
        {IconComponent && (
          <IconComponent
            className={isFrontend ? 'w-5 h-5' : 'w-4 h-4'}
            style={{ color: '#737373' }}
          />
        )}
      </div>
      <span>{data.label}</span>
    </div>
  );
};
export default Option;
