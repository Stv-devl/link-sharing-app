/* eslint-disable react/no-unescaped-entities */
import React from 'react';

/**
 * The Error component displays a 404 error message indicating that the requested page does not exist.
 * @component
 * @returns {JSX.Element} A JSX element containing the error message.
 */
const Error = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="mx-[60px] text-5xl">404</h1>
      <h2 className="mb-[160px  text-2xl">
        Oups! La page que vous demandez n'existe pas.
      </h2>
    </div>
  );
};

export default Error;
