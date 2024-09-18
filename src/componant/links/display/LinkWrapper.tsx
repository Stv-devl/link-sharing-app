import React from 'react';
import Image from 'next/image';
import { icones } from '../../../constantes/constantes';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { LinkWrapperProps } from '@/types/types';
import { formatText } from '@/utils/formatText';
import { usePathname } from 'next/navigation';
import useModalStore from '../../../store/useModalStore';

/**
 * LinkWrapper renders a sortable link item with an icon, label, and interactive behavior.
 * It allows users to click the link to either copy the URL to the clipboard or open it in a new tab,
 * depending on the current page. The component is draggable and can be reordered within a list.
 * @param {LinkWrapperProps} props - Properties for the LinkWrapper component.
 * @param {string} props.id - Unique identifier for the link, used for sorting.
 * @param {string} props.label - The label text to display for the link.
 * @param {string} props.color - The background color of the link item.
 * @param {string} props.url - The URL associated with the link, to open or copy.
 * @returns {JSX.Element} The rendered LinkWrapper component.
 */
const LinkWrapper: React.FC<LinkWrapperProps> = ({
  id,
  label,
  color,
  url,
}: LinkWrapperProps): JSX.Element => {
  const pathname = usePathname();
  const isPreviewPage = pathname === '/preview';

  const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

  const isFrontend = label === 'Frontend Mentor';
  const iconKey = `Icon${formatText(label)}` as keyof typeof icones;
  const IconComponent = icones[iconKey];

  const handleClick = () => {
    if (url) {
      const validUrl =
        url.startsWith('http://') || url.startsWith('https://')
          ? url
          : `https://${url}`;
      navigator.clipboard
        .writeText(validUrl)
        .then(() => {
          console.log('URL copied to clipboard');
        })
        .catch((err) => {
          console.error('Failed to copy URL: ', err);
        });

      if (isPreviewPage) {
        useModalStore.getState().openModal('copie');
      } else {
        window.open(validUrl, '_blank');
      }
    } else {
      console.log('No URL provided');
    }
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: 'background-color 0.2s ease',
        userSelect: 'none' as const,
      }}
      className={`flex justify-between items-center bg-${color} sortable-item ${
        isFrontend ? 'border' : ''
      } rounded-lg px-4 cursor-pointer w-full ${
        !isPreviewPage ? 'h-11' : 'h-14'
      }`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        {IconComponent && <IconComponent style={{ color: '#FFFFFF' }} />}
        <p className={`${isFrontend ? 'text-black' : 'text-white'}`}>{label}</p>
      </div>
      <Image
        src={`${
          isFrontend
            ? '/images/icon-arrow-right-dark.svg'
            : '/images/icon-arrow-right.svg'
        }`}
        alt={`follow the link`}
        width={16}
        height={16}
        className="w-[16px] h-[16px]"
        priority
      />
    </div>
  );
};

export default LinkWrapper;
