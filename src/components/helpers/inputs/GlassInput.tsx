import React, { FC } from "react";
import { GlassInputProps } from ".";
import NormalInput from "./NormalInput";

const GlassInput: FC<GlassInputProps> = ({
  className,
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
      <NormalInput
        className={`drop-shadow-sm focus:drop-shadow-md duration-300 ${className}`}
        type={type}
        placeholder={placeholder}
        required={required}
        reference={reference}
        focus={focus}
        rounded={rounded}
        onChange={onChange}
      />
    </>
  );
};

export default GlassInput;
