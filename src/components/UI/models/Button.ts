import CSS from "csstype";
import { PropsWithChildren } from "react";
interface ButtonStyledType {
  $style?: CSS.Properties;
  $defaultButtonStyle: CSS.Properties;
  $hoverStyled?: CSS.Properties;
}

export type ButtonType = PropsWithChildren<{
  style?: CSS.Properties;
  hoverStyled?: CSS.Properties;
  onClick: () => void;
}>;
export default ButtonStyledType;
