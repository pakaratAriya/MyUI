import CustomStyledType, { ButtonType } from "../models/Button";
import { styled } from "styled-components";
import BasicStyledButton from "./BasicButton";
import { defaultButtonStyle } from "../constants/DefaultStyled";
import { selectProps } from "../helpers/calculateHelper";

const StyledWindowButton = styled(BasicStyledButton)<
  CustomStyledType & { $firstColor?: string; $secondColor?: string }
>`
  border: 0;
  background-color: Transparent;
  color: ${(props) => selectProps(props, "color")};
  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
    content: "";
    background-color: ${(props) => props.$firstColor ?? "cyan"};
    transform-origin: top;
    transition: all ${(props) => selectProps(props, "transitionDuration")};
    transform: rotateX(0deg);
  }
  &:before {
    top: -2px;
    left: -2px;
  }
  &:after {
    bottom: -2px;
    right: -2px;
    background-color: ${(props) => props.$secondColor ?? "pink"};
    transform-origin: bottom;
  }
  &:hover:before {
    transform: perspective(1000px) rotateX(75deg);
    left: 0;
  }
  &:hover:after {
    right: 0;
    transform: perspective(1000px) rotateX(-75deg);
  }
  &:hover {
    color: ${(props) => selectProps(props, "color")};
  }
`;

const WindowButton = (
  props: ButtonType & { firstColor?: string; secondColor?: string }
) => {
  const { onClick, hoverStyled, style, firstColor, secondColor } = props;
  const defaultButtonStyle2 = { ...defaultButtonStyle };
  defaultButtonStyle2.color = "gray";
  defaultButtonStyle2.color = "black";
  return (
    <StyledWindowButton
      onClick={onClick}
      $defaultCustomStyle={defaultButtonStyle2}
      $firstColor={firstColor}
      $hoverStyled={hoverStyled}
      $secondColor={secondColor}
      $style={style}
    >
      {props.children}
    </StyledWindowButton>
  );
};

export default WindowButton;
