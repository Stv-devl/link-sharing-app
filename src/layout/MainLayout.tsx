import React from 'react';
import Banner from '../componant/banner/Banner';
import Modal from '@/componant/modal/Modal';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="w-full">
    <Banner />
    <section className="w-full px-[4%] sm:px-0 ">{children}</section>
    <Modal />
  </main>
);

export default MainLayout;
