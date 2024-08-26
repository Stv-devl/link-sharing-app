import '../global.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Link-sharing-app</title>
        <meta name="description" content="link sharing app" />
      </head>
      <body className="flex justify-center h-screen w-full bg-background-white text-medium-gray text-[16px] text-base leading-6	 ">
        <main className="flex items-center">{children}</main>
      </body>
    </html>
  );
}
