import React from 'react';
import Select from 'react-select';
import Option from '../dropdown/Option';
import { options } from '@/constantes/constantes';
import useFilterOptions from '../../../hook/manage/useManageOptions';
import CustomDefaultOption from './CustomDefaultOption';
import { DropDownProps, LinkDetail } from '@/types/types';
import customStyles from './CustomStyle';

/**
 * Dropdown component
 * Renders a dropdown for selecting the number of entries to display.
 */

const Dropdown: React.FC<DropDownProps> = ({
  labelText,
  value,
  name,
  handleOption,
  error,
}) => {
  const { defaultOption, filteredOptions } = useFilterOptions({
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
