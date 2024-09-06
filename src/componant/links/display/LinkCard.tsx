import React from 'react';
import LinkWrapper from './LinkWrapper';
import { LinkCardProps } from '@/types/types';

const LinkCard: React.FC<LinkCardProps> = ({ formatedLinks }) => {
  return (
    <>
      <div className="flex flex-col gap-5 w-full ">
        {formatedLinks &&
          formatedLinks.map((link, index) => (
            <LinkWrapper
              key={`${link.key}-${index}`}
              label={link.label}
              color={link.color}
              url={link.url}
            />
          ))}
      </div>
    </>
  );
};

export default LinkCard;
