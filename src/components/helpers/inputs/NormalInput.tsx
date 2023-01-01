import React, { FC } from "react";
import { NormalInputProps } from ".";

const NormalInput: FC<NormalInputProps> = ({
  className,
  backgroundColor,
  color,
  type,
  placeholder,
  required,
  reference,
  focus,
  rounded,
  onChange,
}) => {
  return (
    <>
      <input
        className={`${backgroundColor} ${color} py-1 px-2 outline-none border-solid border-[1px] border-transparent ${
          focus && `focus:border-black`
        } ${rounded && "rounded"} ${className}`}
        type={type}
        placeholder={placeholder}
        required={required}
        ref={reference}
        onChange={onChange}
      />
    </>
  );
};

export default NormalInput;
