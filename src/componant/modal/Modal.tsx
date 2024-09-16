'use client ';

import React from 'react';
import useModalStore from '../../store/useModalStore';
import Image from 'next/image';

/**
 * Modal component renders a modal dialog with a close button and a content area.
 * It is used to display messages or links copied to the clipboard.
 * @returns {JSX.Element} The rendered Modal component.
 */

const Modal: React.FC = () => {
  const { isOpen, content, closeModal } = useModalStore((state) => ({
    isOpen: state.isOpen,
    content: state.content,
    closeModal: state.closeModal,
  }));

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-link-black bg-opacity-20"
      onClick={closeModal}
    >
      <div className="absolute bottom-[2%] bg-dark-gray w-[90%] sm:w-[450px] rounded-lg">
        <div className="flex justify-center items-center gap-3 p-3 h-full">
          <Image
            src={`/images/icon-link.svg`}
            alt={`icon link`}
            width={16}
            height={16}
            className="w-[16px] h-[16px]"
            priority
          />
          <p className="text-background-white text-xs sm:text-base sm:font-semibold">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
