import { styled } from "styled-components";
import CSS from "csstype";
import { selectProps } from "../helpers/calculateHelper";
const BasicStyledButton = styled.button<{
  $style?: CSS.Properties;
  $defaultCustomStyle: CSS.Properties;
  $hoverStyled?: CSS.Properties;
}>`
  color: ${(props) => selectProps(props, "color")};
  background-color: ${(props) => selectProps(props, "backgroundColor")};
  font-family: ${(props) => selectProps(props, "fontFamily")};
  font-size: ${(props) => selectProps(props, "fontSize")};
  font-weight: ${(props) => selectProps(props, "fontWeight")};
  border: ${(props) => selectProps(props, "border")};
  border-radius: ${(props) => selectProps(props, "borderRadius")};
  padding: ${(props) => selectProps(props, "padding")};
  width: ${(props) => selectProps(props, "width")};
  height: ${(props) => selectProps(props, "height")};
  margin: ${(props) => selectProps(props, "margin")};
  line-height: ${(props) => selectProps(props, "lineHeight")};
  position: ${(props) => selectProps(props, "position")};
  text-decoration: ${(props) => selectProps(props, "textDecoration")};
  cursor: ${(props) => selectProps(props, "cursor")};
  display: ${(props) => selectProps(props, "display")};
  z-index: ${(props) => selectProps(props, "zIndex")};
  transition: all ${(props) => selectProps(props, "transitionDuration")};
  &:hover {
    color: ${(props) => props.$hoverStyled?.color ?? "white"};
    background-color: Transparent;
  }
`;

export default BasicStyledButton;
