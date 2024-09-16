import React from 'react';
import Link from 'next/link';
import IconPreview from '../../assets/icon-preview-header.svg';
import { PreviewBtnType } from '@/types/types';

/**
 *  PreviewBtn component renders a button with a label and an optional onClick handler.
 * It includes a hover effect when the mouse is over the button.
 * @param {PreviewBtnType} props - Component properties.
 * @param {string} props.href - The URL to navigate to.
 * @param {string} props.label - The text content of the button.
 * @returns {JSX.Element} The Button component.
 */

const PreviewBtn: React.FC<PreviewBtnType> = ({
  href,
  label,
}: PreviewBtnType): JSX.Element => {
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
