import React, { useMemo } from 'react';
import { UseManageOptionsProps } from '@/types/types';
import useUserStore from '@/store/useUsersStore';

/**
 * Custom hook for handling drag-and-drop functionality.
 * Manages link reordering and updates the state upon drag events.
 * @returns {object} An object containing:
 * - `link`: Array of current links.
 * - `sensors`: Sensors configuration for drag-and-drop.
 * - `handleDragEnd`: Function to handle the end of a drag event.
 */

const useManageOptions = ({
  value,
  options,
}: UseManageOptionsProps): object => {
  const link = useUserStore((state) => state.link);

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
