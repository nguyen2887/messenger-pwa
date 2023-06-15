import { cn } from "@/lib/utils";
import React from "react";

import { ConversationItem } from "./conversation-item";
import { SearchBar } from "./search-bar";
import { TopBar } from "./top-bar";

export const ChatSideBar: React.FC<JSX.IntrinsicElements["div"]> = ({ className, ...props }) => {
  return (
    <div className={cn("w-96 border-r p-2", className)} {...props}>
      <TopBar />

      <SearchBar />

      <ConversationItem />
    </div>
  );
};
