import React from 'react';
import Banner from '../componant/banner/Banner';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="h-screen w-full">
    <Banner />
    <section className="w-full h-[86%] px-[4%] sm:px-0 ">{children}</section>
  </main>
);

export default MainLayout;
