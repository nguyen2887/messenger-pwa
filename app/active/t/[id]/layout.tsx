import { ActiveSideBar } from "@/components/layouts/active-side-bar";
import React from "react";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ActiveSideBar />

      <div className="flex-1">{children}</div>
    </>
  );
}
