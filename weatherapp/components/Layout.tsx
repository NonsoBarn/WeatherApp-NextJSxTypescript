import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-gray-100">{children}</div>;
}
