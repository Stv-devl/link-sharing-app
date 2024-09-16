import React from 'react';
import Select from 'react-select';
import Option from '../dropdown/Option';
import { options } from '@/constantes/constantes';
import useManageOptions from '../../../hook/manage/useManageOptions';
import CustomDefaultOption from './CustomDefaultOption';
import { DropDownProps, LinkDetail } from '@/types/types';
import customStyles from './CustomStyle';

/**
 * Dropdown renders a select input for choosing options, such as the number of entries to display.
 * It displays a label, handles option selection, and shows an error message if applicable.
 * @param {DropDownProps} props - Properties for the Dropdown component.
 * @param {string} props.labelText - The label text for the dropdown.
 * @param {string} props.value - The currently selected value.
 * @param {string} props.name - The name attribute for the dropdown.
 * @param {(selectedOption: LinkDetail) => void} props.handleOption - Callback function triggered on option selection.
 * @param {string} props.error - Error message to display below the dropdown.
 * @returns {JSX.Element} The rendered Dropdown component.
 */

const Dropdown: React.FC<DropDownProps> = ({
  labelText,
  value,
  name,
  handleOption,
  error,
}: DropDownProps): JSX.Element => {
  const { defaultOption, filteredOptions } = useManageOptions({
    value,
    options,
  });

  return (
    <div className="relative w-full">
      <label
        className="block text-xs font-normal text-dark-gray"
        htmlFor={name}
      >
        {labelText}
      </label>
      <Select
        options={filteredOptions}
        components={{ Option, SingleValue: CustomDefaultOption }}
        defaultValue={defaultOption}
        onChange={(newValue) => {
          if (newValue && !Array.isArray(newValue)) {
            handleOption(newValue as LinkDetail);
          }
        }}
        styles={
          customStyles as unknown as import('react-select').StylesConfig<
            LinkDetail,
            false
          >
        }
        classNamePrefix="select"
        inputId={name}
        instanceId={name}
      />
      {error && (
        <span className="text-medium-red relative sm:absolute right-0 sm:right-11 top-auto sm:top-10 transform-none sm:transform sm:-translate-y-1/2 ">
          {error}
        </span>
      )}
    </div>
  );
};

export default Dropdown;
