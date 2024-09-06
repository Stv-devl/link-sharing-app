import { ButtonComponent } from '@/types/types';
import React from 'react';

const Button: React.FC<ButtonComponent> = ({ label, onClick }) => {
  const colorStyle =
    label === '+ Add new link'
      ? 'bg-white text-dark-purple border border-dark-purple hover:bg-lightest-purple'
      : 'bg-dark-purple text-white hover:bg-light-purple ';

  return (
    <button
      type="submit"
      onClick={onClick}
      className={`${colorStyle} duration-500 ease-in-out font-semibold rounded-lg w-full h-[46px]`}
    >
      {label}
    </button>
  );
};

export default Button;
