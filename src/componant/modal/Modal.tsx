'use client ';

import React from 'react';
import useModalStore from '../../store/useModalStore';
import Image from 'next/image';

/**
 * Modal component renders a modal dialog with a close button and a content area.
 * It is used to display messages or links copied to the clipboard.
 * @returns {JSX.Element} The rendered Modal component.
 */

const Modal: React.FC = (): JSX.Element => {
  const { isOpen, content, closeModal } = useModalStore((state) => ({
    isOpen: state.isOpen,
    content: state.content,
    closeModal: state.closeModal,
  }));

  if (!isOpen) return <></>;

  const errors = content === 'error' || content === 'existing';

  const getMessage = () => {
    switch (content) {
      case 'upload':
        return 'Your changes have been successfully saved!';
      case 'error':
        return 'You should make some changes before saving!';
      case 'copie':
        return 'Your link has been copied to the clipboard!';
      case 'existing':
        return 'Your email is already in our database!';
      default:
        return content || '';
    }
  };

  const getIconSrc = () => {
    switch (content) {
      case 'upload':
        return '/images/icon-changes-saved.svg';
      case 'error':
        return '/images/exclamation-solid.svg';
      case 'existing ':
        return '/images/exclamation-solid.svg';
      case 'copie':
        return '/images/icon-link.svg';
      default:
        return '/images/icon-link.svg';
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-link-black bg-opacity-20`}
      onClick={closeModal}
    >
      <div
        className={`absolute bottom-[4%]  w-[90%] sm:w-[450px] rounded-lg  ${
          errors ? 'bg-white border border-link-red' : 'bg-dark-gray'
        }`}
      >
        <div className="flex justify-center items-center gap-3 p-3 h-full">
          <Image
            src={getIconSrc()}
            alt="modal icon"
            width={16}
            height={16}
            className="w-[16px] h-[16px]"
            priority
          />
          <p
            className={`text-sm sm:text-base font-semibold ${
              errors ? 'text-link-red' : 'text-background-white'
            }`}
          >
            {getMessage()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
