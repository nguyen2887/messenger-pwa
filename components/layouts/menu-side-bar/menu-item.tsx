"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

type MenuItemProps = {
  title: string;
  icon: React.JSX.Element;
  link: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ icon, link, title }) => {
  const pathname = usePathname();

  console.log(pathname);

  const isActive = useMemo(() => {
    return pathname.includes(link);
  }, [link, pathname]);

  return (
    <Link
      href={link}
      className={cn(
        "flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 transition-all",
        isActive && "bg-slate-100",
      )}
    >
      {icon}

      <div className="text-sm font-medium">{title}</div>
    </Link>
  );
};
