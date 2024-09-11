'use client';
import React from 'react';
import { InputProps } from '../../../types/types';
import Image from 'next/image';

/**
 * Renders an input field with dynamic styling based on validation state.
 * The component supports displaying an icon, and changes the border and text color based on error presence.
 * An error message is displayed below the input field when validation fails.
 * @param {InputProps} props - The properties for the Input component.
 * @returns The rendered input component which may include an optional error message.
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
  const errorId = `error-${name}`;
  const haveIcon = Boolean(iconSrc);
  const inputClasses = `w-full border bg-white placeholder:text-medium-gray ${
    haveIcon ? 'pl-10' : 'pl-5'
  } h-12 rounded-lg focus:outline-none ${
    error
      ? 'border-error-border text-medium-red'
      : 'border-input-border text-dark-gray'
  } focus:border-focus-border focus:shadow-custom-purple`;

  return (
    <>
      <label
        htmlFor={name}
        className={`text-xs ${
          error && label !== 'Link' ? 'text-medium-red' : 'text-dark-gray'
        } ${!haveIcon ? 'w-[100px]' : ''}`}
      >
        {label}
      </label>
      <div className="relative w-full">
        {haveIcon ? (
          <Image
            src={iconSrc}
            alt={`${name} icon`}
            width={16}
            height={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
        ) : null}
        <input
          className={inputClasses}
          type={type}
          id={name}
          name={name}
          value={value || ''}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />
        {error && (
          <span
            id={errorId}
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
