import React, { useMemo } from 'react';
import useAddLink from '../data/useAddLink';
import { UseManageOptionsProps } from '@/types/types';

const useManageOptions = ({ value, options }: UseManageOptionsProps) => {
  const { link } = useAddLink();

  const existingLabels = useMemo(
    () => link && link.map((link) => link.label),
    [link]
  );

  const defaultOption = useMemo(() => {
    return options.find((option) => option.label === value);
  }, [value, options]);

  const filteredOptions = useMemo(() => {
    return options.filter((option) => !existingLabels?.includes(option.label));
  }, [existingLabels, options]);

  return { defaultOption, filteredOptions };
};

export default useManageOptions;
