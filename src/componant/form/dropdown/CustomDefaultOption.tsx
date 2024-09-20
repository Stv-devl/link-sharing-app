import React from 'react';
import { icones } from '../../../constantes/constantes';
import { CustomDefaultOptionProps } from '@/types/types';

/**
 * CustomDefaultOption renders a dropdown option with an associated icon.
 * The icon is selected based on the option's label.
 * @param {CustomDefaultOptionProps} props - Properties for the component.
 * @param {LinkDetail} props.data - Data object containing the label for the option.
 * @returns {JSX.Element} The rendered CustomDefaultOption component.
 */

const CustomDefaultOption: React.FC<CustomDefaultOptionProps> = ({
  data,
}: CustomDefaultOptionProps): JSX.Element => {
  const isFrontend = data.label === 'Frontend Mentor';
  const iconKey = `Icon${data.label.replace(/[\s.]+/g, '').toLowerCase()}`;
  const IconComponent = icones[iconKey as keyof typeof icones];

  return (
    <div className="flex items-center ">
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
