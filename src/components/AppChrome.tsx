"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import OpenToWorkBanner from "@/components/OpenToWorkBanner";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <Navigation />
      <main id="main-content" className="relative z-10 flex-1 pt-16">
        {!isHome ? <OpenToWorkBanner /> : null}
        {children}
      </main>
    </>
  );
}
