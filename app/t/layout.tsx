import { ChatSideBar } from "@/components/layouts/chat-side-bar";
import React from "react";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChatSideBar />

      <div className="flex-1 flex items-center justify-center bg-gray-100">{children}</div>
    </>
  );
}
