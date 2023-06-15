import { menu } from "@/constants/menu";
import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import React from "react";

import { MenuItem } from "./menu-item";

export const MenuSideBar: React.FC<JSX.IntrinsicElements["div"]> = ({ className, ...props }) => {
  return (
    <div className={cn("w-64 p-2 border-r", className)} {...props}>
      {menu.map((item) => (
        <MenuItem key={nanoid()} {...item} />
      ))}
    </div>
  );
};
