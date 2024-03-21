"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

interface ReactQueryWrapperProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function ReactQueryWrapper({ children }: ReactQueryWrapperProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
