import React from 'react';

import LinkWrapper from './LinkWrapper';
import { LinkCardProps } from '@/types/types';

const LinkCard: React.FC<LinkCardProps> = ({ displayLinks }) => {
  console.log(displayLinks);

  return (
    <>
      <div className="flex flex-col gap-5 w-full ">
        {displayLinks &&
          displayLinks.map(([key, item]) => (
            <LinkWrapper
              key={key}
              label={key}
              color={item.color}
              src={`/images/icon-${key.toLowerCase()}.svg`}
              url={item.url}
            />
          ))}
      </div>
    </>
  );
};

export default LinkCard;
