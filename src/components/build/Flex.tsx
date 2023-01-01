import React, { FC } from "react";

type FlexDirection =
  | "flex-col"
  | "flex-col-reverse"
  | "flex-row"
  | "flex-row-reverse";

interface FlexProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  direction: FlexDirection;
}

const Flex: FC<FlexProps> = ({ id, className, children, direction }) => {
  return (
    <div id={id} className={`flex ${direction} ${className}`}>
      {children}
    </div>
  );
};

export default Flex;
