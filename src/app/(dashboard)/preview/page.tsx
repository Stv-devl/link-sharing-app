'use client';

import React from 'react';
import withAuth from '../../../componant/withAuth/WithAuth';
import PreviewBanner from '@/componant/banner/PreviewBanner';

const Preview = () => {
  return (
    <main className="h-screen w-full ">
      <PreviewBanner />
      <section className="bg-background-white w-full h-screen"></section>;
    </main>
  );
};

export default withAuth(Preview);
