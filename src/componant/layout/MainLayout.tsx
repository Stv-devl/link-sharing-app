import React from 'react';
import Banner from '../banner/Banner';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="h-screen w-full">
    <Banner />
    <section className="bg-background-white w-full h-screen">
      {children}
    </section>
  </main>
);

export default MainLayout;
