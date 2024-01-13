import styled from "styled-components";
import { defaultButtonStyle } from "../Constants/DefaultStyled";
import ButtonStyledType, { ButtonType } from "../models/Button";
import BasicStyledButton from "./BasicButton";
import { multiplyCSSValue, selectProps } from "../helpers/calculateHelper";

const StyledBorderSwappingButton = styled(BasicStyledButton)<
  ButtonStyledType & { $color1?: string; $color2?: string }
>`
  border: 0;
  background-color: Transparent;
  &:before,
  &:after {
    content: "";
    position: absolute;

    background-color: Transparent;
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }
  &:after {
    border-left: 2px solid ${(props) => props.$color1 ?? "red"};
    width: 100%;
    height: 160%;
    top: -30%;
    left: 0;
    border-right: 2px solid ${(props) => props.$color2 ?? "orange"};
    transition-delay: ${(props) =>
      multiplyCSSValue(props, "transitionDuration", 0.3)};
  }

  &:before {
    border-top: 2px solid ${(props) => props.$color1 ?? "red"};
    top: 0%;
    left: -10%;
    width: 120%;
    height: 100%;
    border-bottom: 2px solid ${(props) => props.$color2 ?? "orange"};
    transition-delay: ${(props) =>
      multiplyCSSValue(props, "transitionDuration", 0.6)};
  }
  &:hover:before {
    transform: rotateX(180deg);
  }
  &:hover:after {
    transform: rotateY(180deg);
  }
  &:hover {
    opacity: 1;
    color: ${(props) => selectProps(props, "color")};
  }
`;

const BorderSwappingButton = (
  props: ButtonType & { color1?: string; color2?: string }
) => {
  const { style, hoverStyled, color1, color2 } = props;

  return (
    <StyledBorderSwappingButton
      onClick={props.onClick}
      $defaultButtonStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
      $style={style}
      $color1={color1}
      $color2={color2}
    >
      {props.children}
    </StyledBorderSwappingButton>
  );
};

export default BorderSwappingButton;
