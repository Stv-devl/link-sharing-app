import React from 'react';
import Link from 'next/link';
import IconPreview from '../../assets/icon-preview-header.svg';
import { PreviewBtnType } from '@/types/types';

const PreviewBtn: React.FC<PreviewBtnType> = ({ href, label }) => {
  const isPreview = label === 'Preview';
  const textClass = isPreview ? 'sm:block hidden' : '';
  const iconClass = isPreview ? 'block sm:hidden' : 'hidden';

  return (
    <Link href={href}>
      <div
        className={`flex items-center justify-center border border-dark-purple text-dark-purple rounded-lg  duration-500 ease-in-out hover:bg-lightest-purple font-semibold w-full h-full`}
      >
        <p className={textClass}>{label}</p>
        {isPreview && <IconPreview className={iconClass} />}
      </div>
    </Link>
  );
};

export default PreviewBtn;
