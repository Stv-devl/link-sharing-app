import React from 'react';
import '../global.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <title>Link-sharing-app</title>
      <meta name="description" content="link sharing app" />
    </head>
    <body className="h-screen w-full text-medium-gray bg-background-white text-[16px] text-base leading-6 max-w-[1650px]">
      {children}
    </body>
  </html>
);

export default RootLayout;
