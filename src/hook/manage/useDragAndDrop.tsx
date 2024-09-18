import React, { useCallback } from 'react';
import useUserStore from '@/store/useUsersStore';
import {
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  DragEndEvent,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { LinkDetail, UseDragAndDropReturn } from '@/types/types';

/**
 * Custom hook for handling drag-and-drop functionality.
 * Manages link reordering and updates the state upon drag events.
 * @returns {object} An object containing:
 * - `link`: Array of current links.
 * - `sensors`: Sensors configuration for drag-and-drop.
 * - `handleDragEnd`: Function to handle the end of a drag event.
 */

const useDragAndDrop = (): UseDragAndDropReturn => {
  const { link, updateLinkLocal } = useUserStore();

  const handleItemChange = useCallback(
    (newItems: LinkDetail[]) => {
      if (link === newItems) return;
      const oldKeys = null;
      updateLinkLocal(oldKeys, newItems);
    },
    [link, updateLinkLocal]
  );

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 10 } }),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over) return;

      const activeId = active.id as string;
      const overId = over.id as string;

      const oldIndex = link?.findIndex((item) => item.key === activeId);
      const newIndex = link?.findIndex((item) => item.key === overId);

      if (
        oldIndex == null ||
        newIndex == null ||
        oldIndex === -1 ||
        newIndex === -1 ||
        !link
      ) {
        console.warn('Invalid drag operation. Check the keys of your items.');
        return;
      }

      if (oldIndex !== newIndex) {
        const newItems = arrayMove(link, oldIndex, newIndex);
        handleItemChange(newItems);
      }
    },
    [link, handleItemChange]
  );

  return { link, sensors, handleDragEnd };
};

export default useDragAndDrop;
