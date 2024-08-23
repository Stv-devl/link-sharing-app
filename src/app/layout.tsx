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
        <meta name="description" content="video app" />
      </head>
      <body className="h-screen w-full flex flex-col bg-[#10141E]  text-white font-outfit text-[15px] font-light  ">
        <div className="sm:h-[2%]"></div>
        <div className="xl:hidden h-[1.6rem]"></div>
        <main className="pl-[2%] xl:ml-[156px] xl:h-[97.5vh] overflow-y-auto  ">
          {children}
        </main>
      </body>
    </html>
  );
}
