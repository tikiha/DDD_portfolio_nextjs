import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="fixed w-full h-10 bg-blue-900 flex items-center">
        navigation
      </nav>
      {children}
    </>
  );
}
