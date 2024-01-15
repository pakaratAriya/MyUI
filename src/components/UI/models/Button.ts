import CSS from "csstype";
import { PropsWithChildren } from "react";
interface CustomStyledType {
  $style?: CSS.Properties;
  $defaultCustomStyle: CSS.Properties;
  $hoverStyled?: CSS.Properties;
}

export type ButtonType = PropsWithChildren<{
  style?: CSS.Properties;
  hoverStyled?: CSS.Properties;
  onClick: () => void;
}>;
export default CustomStyledType;
