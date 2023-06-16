import { IconCameraPlus, IconEditSquare } from "@/assets/vectors";
import React from "react";

export const TopBar = () => {
  return (
    <div className="flex justify-between items-center pl-4 py-1">
      <h1 className="text-2xl font-bold">Chat</h1>

      <div className="flex items-center gap-2">
        <ButtonIcon>
          <IconCameraPlus />
        </ButtonIcon>

        <ButtonIcon>
          <IconEditSquare />
        </ButtonIcon>
      </div>
    </div>
  );
};

const ButtonIcon = ({ ...props }: JSX.IntrinsicElements["div"]) => (
  <div className="bg-slate-100 hover:bg-slate-200 rounded-3xl p-1 cursor-pointer transition-all" {...props} />
);
