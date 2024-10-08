import { useEffect, useState } from "react";
import { SideNav } from "./side-nav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

  return (
    <main className="mx-auto pt-12">
      <div className="flex gap-8 flex-col sm:flex-row">
        <SideNav />
        <div className="w-full">{children}</div>

      </div>
    </main>
  );
}