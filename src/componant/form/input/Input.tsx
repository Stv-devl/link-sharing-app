'use client';
import React from 'react';
import { InputProps } from '../../../types/types';
import Image from 'next/image';

/**
 * Renders an input field with dynamic border styling and optional error message.
 * Displays an error message below the input when validation fails.
 * @param props - Properties for the Input component.
 * @returns The rendered input component with optional error message.
 */

const Input: React.FC<InputProps> = ({
  name,
  type,
  handleChange,
  value,
  label,
  placeholder,
  error,
  autoComplete,
  iconSrc,
}: InputProps) => {
  const borderSetting = error ? 'border-error-border' : 'border-input-border';

  return (
    <>
      <label
        htmlFor={name}
        className={`text-xs ${
          error && label !== 'Link' ? 'text-medium-red' : 'text-dark-gray'
        }`}
      >
        {label}
      </label>
      <div className="relative w-full">
        <Image
          src={iconSrc}
          alt={`${name} icon`}
          width={16}
          height={16}
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        />
        <input
          className={`w-full border bg-white placeholder:text-medium-gray pl-10 h-12 rounded-lg focus:outline-none ${borderSetting} focus:border-focus-border focus:shadow-custom-purple  ${
            error ? 'text-medium-red' : 'text-dark-gray'
          }`}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        {error && (
          <span
            className={`text-medium-red relative sm:absolute right-0 sm:right-3 top-auto sm:top-1/2 transform-none sm:transform sm:-translate-y-1/2  `}
          >
            {error}
          </span>
        )}
      </div>
    </>
  );
};

export default Input;
