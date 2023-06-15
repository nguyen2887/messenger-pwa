import { ArchivedSideBar } from "@/components/layouts/archived-side-bar";
import React from "react";

export default function ArchivedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArchivedSideBar />

      <div className="flex-1">{children}</div>
    </>
  );
}
