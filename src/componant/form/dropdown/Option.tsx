import React from 'react';
import { icones } from '../../../constantes/constantes';
import { OptionsProps } from '@/types/types';

/**
 * Option renders a dropdown menu option with an associated icon.
 * The icon is determined based on the option's label.
 * @param {OptionsProps} props - Properties for the Option component.
 * @param {LinkDetail} props.data - Data object containing the label for the option.
 * @param {React.Ref<HTMLDivElement>} props.innerRef - Reference to the inner div element.
 * @param {React.HTMLAttributes<HTMLDivElement>} props.innerProps - Additional props for the inner div element.
 * @returns {JSX.Element} The rendered Option component.
 */

const Option = (props: OptionsProps): JSX.Element => {
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
