import { Input } from "@/components/ui/input";
import React from "react";

export const SearchBar = () => {
  return (
    <div>
      <Input className="rounded-3xl border-none bg-gray-100 my-2" placeholder="Tìm kiếm trên Messenger" />
    </div>
  );
};
