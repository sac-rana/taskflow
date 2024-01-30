'use client';

import Sidebar from '@/components/sidebar';
import { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>{children}</div>
    </div>
  );
}
