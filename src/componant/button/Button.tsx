'use client';
import { ButtonComponent } from '@/types/types';
import React from 'react';

/**
 * Button component renders a button with a label and an optional onClick handler.
 * It includes a hover effect when the mouse is over the button.
 * @param {ButtonComponent} props - Component properties.
 * @param {string} props.label - The text content of the button.
 * @param {() => void} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} The Button component.
 * */

const Button: React.FC<ButtonComponent> = ({
  label,
  onClick,
}: ButtonComponent): JSX.Element => {
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
