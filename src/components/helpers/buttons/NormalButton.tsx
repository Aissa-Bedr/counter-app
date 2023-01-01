import React, { FC } from "react";
import { NormalButtonProps } from ".";

const NormalButton: FC<NormalButtonProps> = ({
  className,
  backroundColor,
  color,
  width,
  onClick,
  hoverOpacity,
  rounded,
  children,
}) => {
  return (
    <>
      <button
        className={`py-1 px-2 ${backroundColor} ${color} ${width} ${
          hoverOpacity && "hover:opacity-80"
        } ${rounded && "rounded"} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default NormalButton;
