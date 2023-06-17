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
        "flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-all",
        isActive && "bg-gray-100",
      )}
    >
      <div className={cn(!isActive && "[&_svg]:fill-gray-500")}>{icon}</div>

      <div className="text-sm font-medium">{title}</div>
    </Link>
  );
};
