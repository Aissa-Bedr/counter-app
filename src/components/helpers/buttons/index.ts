export interface NormalButtonProps {
  className?: ClassName;
  backroundColor?: BackroundColor;
  color?: Color;
  width?: Width;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  hoverOpacity?: HoverOpacity;
  rounded?: Rounded;
  children: React.ReactNode;
}

export interface StyledComponents {
  roundedFull?: Rounded;
  duration?: Duration;
  animation?: ButtonAnimation;
  shadow?: Shadow;
}

export interface StyledButtonProps
  extends NormalButtonProps,
    StyledComponents {}

export interface GlassButtonProps extends NormalButtonProps {
  roundedFull?: Rounded;
}

type ClassName = string;
type BackroundColor = ClassName;
type Color = BackroundColor;
type Width = Color;
type HoverOpacity = true;
type Rounded = HoverOpacity;
type Duration = Rounded;
type ButtonAnimation = Duration;
type Shadow = ButtonAnimation;
