import React, { FC } from "react";
import { GlassButtonProps } from ".";
import NormalButton from "./NormalButton";

const GlassButton: FC<GlassButtonProps> = ({
  className,
  width,
  onClick,
  hoverOpacity,
  rounded,
  roundedFull,
  children,
}) => {
  return (
    <>
      <NormalButton
        className={`bg-white text-dark drop-shadow-sm hover:drop-shadow-md duration-300 ${
          roundedFull && "rounded-full"
        } ${className}`}
        width={width}
        hoverOpacity={hoverOpacity}
        rounded={rounded}
        onClick={onClick}
      >
        {children}
      </NormalButton>
    </>
  );
};

export default GlassButton;
