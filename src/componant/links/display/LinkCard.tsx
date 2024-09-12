import React from 'react';
import { DndContext } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import LinkWrapper from './LinkWrapper';
import useDragAndDrop from '@/hook/manage/useDragAndDrop';
import { usePathname } from 'next/navigation';

const LinkCard = () => {
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
