import React, { MouseEventHandler, ReactElement } from "react";
import { cn } from "../../../lib/utils";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: ReactElement;
  className?: string;
}

const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={cn(
          "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
          className
        )}
      >
        {icon}
      </button>
    </div>
  );
};

export default IconButton;
