"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";

export const ConversationItem = () => {
  const router = useRouter();

  const isActive = useMemo(() => false, []);

  const handleSelect = () => {
    router.push(`/t/1`);
  };

  return (
    <div
      className={cn(
        "flex gap-3 p-2 items-center hover:bg-gray-100 transition-all rounded-md cursor-pointer",
        isActive && "bg-gray-100",
      )}
      onClick={handleSelect}
    >
      <Avatar className="w-12 h-12 border border-gray-200">
        <AvatarFallback>JNT</AvatarFallback>
      </Avatar>

      <div>
        <div className="text-sm font-semibold">Jay Nguyen Tran</div>
      </div>
    </div>
  );
};
