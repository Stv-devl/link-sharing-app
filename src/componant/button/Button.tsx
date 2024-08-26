import { ButtonComponent } from '@/types/types';
import React from 'react';

const Button: React.FC<ButtonComponent> = ({ label, style }) => {
  return (
    <button
      type="submit"
      className={`${style} duration-500 ease-in-out hover:bg-light-purple text-white font-semibold w-full rounded-lg`}
    >
      {label}
    </button>
  );
};

export default Button;
