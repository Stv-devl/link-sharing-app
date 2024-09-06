import { StylesConfig } from 'react-select';
import { OptionTypeProps } from '@/types/types';

const customStyles: StylesConfig<OptionTypeProps, false> = {
  control: (provided, state) => ({
    ...provided,
    height: '48px',
    minHeight: '48px',
    borderColor: state.isFocused ? '#633CFF' : '#D9D9D9',
    boxShadow: state.isFocused ? '0 0 0 1px #633CFF' : 'none',
    '&:hover': {
      borderColor: state.isFocused ? '#633CFF' : '#D9D9D9',
    },
    display: 'flex',
    alignItems: 'center',
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '48px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    paddingRight: '15px',
  }),
};

export default customStyles;
