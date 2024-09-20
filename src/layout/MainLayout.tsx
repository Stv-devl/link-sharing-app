'use client';
import React from 'react';
import Banner from '../componant/banner/Banner';
import Modal from '@/componant/modal/Modal';

/**
 * MainLayout provides the main structure of the application, including the Banner, content section, and Modal.
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Child components to render within the layout.
 * @returns {JSX.Element} The MainLayout component.
 */

const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <main className="w-full">
    <Banner />
    <section className="w-full px-[4%] sm:px-0 ">{children}</section>
    <Modal />
  </main>
);

export default MainLayout;
