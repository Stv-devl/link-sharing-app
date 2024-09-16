'use client';

import React from 'react';
import Home from './(dashboard)/home/page';

/**
 * Index component serves as the entry point for the dashboard's home page.
 * It is a client-side component, as indicated by the `'use client'` directive,
 * and renders the `Home` component within the application.
 * @component
 * @returns {JSX.Element} The rendered Index component containing the Home page.
 */

const Index: React.FC = (): JSX.Element => <Home />;

export default Index;
