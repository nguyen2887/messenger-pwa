import { RequestsSideBar } from "@/components/layouts/requests-side-bar";
import React from "react";

export default function RequestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RequestsSideBar />

      <div className="flex-1">{children}</div>
    </>
  );
}
