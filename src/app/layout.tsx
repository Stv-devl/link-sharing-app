import React from 'react';
import '../global.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <title>Link-sharing-app</title>
      <meta name="description" content="link sharing app" />
    </head>
    <body className="text-medium-gray bg-background-white text-4 text-base leading-6 w-full max-w-[1950px] h-screen ">
      {children}
    </body>
  </html>
);

export default RootLayout;
