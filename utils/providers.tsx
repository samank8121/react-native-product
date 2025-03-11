'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import GeneralQueryClient from '@/utils/get-query-client';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = GeneralQueryClient;
  return (    
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
