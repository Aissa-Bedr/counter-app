import React, { HTMLInputTypeAttribute } from "react";
import { StyledComponents } from "../buttons";

export interface NormalInputProps {
  className?: ClassName;
  type: Type;
  placeholder?: PlaceHolder;
  required?: Required;
  reference?: Reference;
  backgroundColor?: BackgroundColor;
  color?: Color;
  focus?: Focus;
  rounded?: Rounded;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface StyledInputProps extends NormalInputProps, StyledComponents {
  borderColor?: BorderColor;
}

export interface GlassInputProps extends NormalInputProps {}

type ClassName = string;
type Type = HTMLInputTypeAttribute;
type PlaceHolder = ClassName;
type Required = Rounded;
type Reference = React.LegacyRef<HTMLInputElement>;
type Rounded = true;
type Focus = Rounded;
type BackgroundColor = ClassName;
type Color = BackgroundColor;
type BorderColor = Color;
