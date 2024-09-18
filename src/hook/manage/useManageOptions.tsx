import React, { useMemo } from 'react';
import { UseManageOptionReturn, UseManageOptionsProps } from '@/types/types';
import useUserStore from '@/store/useUsersStore';

/**
 * Custom hook to manage options by filtering out existing labels.
 * @param {UseManageOptionsProps} props - The input props for managing options.
 * @param {string} props.value - The current selected value.
 * @param {LinkDetail[]} props.options - The available options to choose from.
 * @returns {UseManageOptionReturn} - The object containing the default option and filtered options.
 */

const useManageOptions = ({
  value,
  options,
}: UseManageOptionsProps): UseManageOptionReturn => {
  const link = useUserStore((state) => state.link);

  const existingLabels = useMemo(
    () => link && link.map((link) => link.label),
    [link]
  );

  const defaultOption = useMemo(() => {
    return options.find((option) => option.label === value) ?? null;
  }, [value, options]);

  const filteredOptions = useMemo(() => {
    return options.filter((option) => !existingLabels?.includes(option.label));
  }, [existingLabels, options]);

  return { defaultOption, filteredOptions };
};

export default useManageOptions;
