"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type MenuItemProps = {
  title: string;
  icon: React.JSX.Element;
  link: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ icon, link, title }) => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <Link href={link} className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100">
      {icon}

      <div className="text-sm font-medium">{title}</div>
    </Link>
  );
};
