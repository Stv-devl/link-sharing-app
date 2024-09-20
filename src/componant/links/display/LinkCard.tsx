'use client';

import React from 'react';
import { DndContext } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import LinkWrapper from './LinkWrapper';
import useDragAndDrop from '@/hook/manage/useDragAndDrop';
import { usePathname } from 'next/navigation';

/**
 * LinkCard component renders a list of links with drag-and-drop functionality.
 * It includes the LinkWrapper component for each link and the DndContext and SortableContext components.
 * @returns {JSX.Element} The rendered LinkCard component, which may include a loading indicator or error message.
 * */

const LinkCard = (): JSX.Element => {
  const pathname = usePathname();
  const isPreviewPage = pathname === '/preview';

  const { link, sensors, handleDragEnd } = useDragAndDrop();

  return (
    <>
      {!isPreviewPage ? (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <SortableContext
            items={link ? link.map((item) => item.key) : []}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-5 w-full sortable-list ">
              {link &&
                link.map((link) => (
                  <LinkWrapper
                    key={link.key}
                    id={link.key}
                    label={link.label}
                    color={link.color}
                    url={link.url}
                  />
                ))}
            </div>
          </SortableContext>
        </DndContext>
      ) : (
        <div className="flex flex-col gap-5 w-full sortable-list ">
          {link &&
            link.map((link) => (
              <LinkWrapper
                key={link.key}
                id={link.key}
                label={link.label}
                color={link.color}
                url={link.url}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default LinkCard;
