"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import OpenToWorkBanner from "@/components/OpenToWorkBanner";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {!isHome ? <Navigation /> : null}
      <main id="main-content" className={`relative z-10 flex-1 ${isHome ? "pt-14 lg:pt-0" : "pt-16"}`}>
        <OpenToWorkBanner />
        {children}
      </main>
    </>
  );
}
