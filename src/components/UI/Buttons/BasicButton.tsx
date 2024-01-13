import { styled } from "styled-components";
import CSS from "csstype";
const BasicStyledButton = styled.button<{
  $style?: CSS.Properties;
  $defaultButtonStyle: CSS.Properties;
  $hoverStyled?: CSS.Properties;
}>`
  color: ${(props) => props.$style?.color ?? props.$defaultButtonStyle.color};
  background-color: ${(props) =>
    props.$style?.backgroundColor ?? props.$defaultButtonStyle.backgroundColor};
  font-family: ${(props) =>
    props.$style?.fontFamily ?? props.$defaultButtonStyle.fontFamily};
  font-size: ${(props) =>
    props.$style?.fontSize ?? props.$defaultButtonStyle.fontSize};
  font-weight: ${(props) =>
    props.$style?.fontWeight ?? props.$defaultButtonStyle.fontWeight};
  border: ${(props) =>
    props.$style?.border ?? props.$defaultButtonStyle.border};
  border-radius: ${(props) =>
    props.$style?.borderRadius ?? props.$defaultButtonStyle.borderRadius};
  padding: ${(props) =>
    props.$style?.padding ?? props.$defaultButtonStyle.padding};
  width: ${(props) => props.$style?.width ?? props.$defaultButtonStyle.width};
  height: ${(props) =>
    props.$style?.height ?? props.$defaultButtonStyle.height};
  margin: ${(props) =>
    props.$style?.margin ?? props.$defaultButtonStyle.margin};
  line-height: ${(props) =>
    props.$style?.lineHeight ?? props.$defaultButtonStyle.lineHeight};
  position: ${(props) =>
    props.$style?.position ?? props.$defaultButtonStyle.position};
  text-decoration: ${(props) =>
    props.$style?.textDecoration ?? props.$defaultButtonStyle.textDecoration};
  cursor: ${(props) =>
    props.$style?.cursor ?? props.$defaultButtonStyle.cursor};
  display: ${(props) =>
    props.$style?.display ?? props.$defaultButtonStyle.display};
    z-index: z-index: ${(props) =>
      props.$style?.zIndex ?? props.$defaultButtonStyle.zIndex};
  transition: all
    ${(props) =>
      props.$style?.transitionDuration ??
      props.$defaultButtonStyle.transitionDuration};
  &:hover {
    color: ${(props) => props.$hoverStyled?.color ?? "white"};
    background-color: Transparent;
  }
`;

export default BasicStyledButton;
