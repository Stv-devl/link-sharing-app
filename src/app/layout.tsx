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
      <body className="h-screen w-full text-medium-gray text-[16px] text-base leading-6	 ">
        <main className="h-screen w-full ">{children}</main>
      </body>
    </html>
  );
}
