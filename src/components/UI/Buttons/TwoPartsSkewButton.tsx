import { PropsWithChildren } from "react";
import CSS from "csstype";
import styled from "styled-components";
import { defaultButtonStyle } from "../Constants/DefaultStyled";
import ButtonStyledType, { ButtonType } from "../models/Button";
import BasicStyledButton from "./BasicButton";
import { decreaseCSSValue, selectProps } from "../helpers/calculateHelper";

const StyledTwoPartsSkewButton = styled(BasicStyledButton)<
  ButtonStyledType & { $color1?: string; $color2?: string }
>`
  background-color: Transparent;
  border: 0;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: -5%;
    background-color: ${(props) => props.$color1 ?? "#686868"};
    height: 100%;
    width: 50%;
    z-index: ${(props) => decreaseCSSValue(props, "zIndex", 1)};
    transform: skewX(30deg);
    transition: all ${(props) => selectProps(props, "transitionDuration")}
      cubic-bezier(0.1, 2, 1, 0.8);
  }
  &:hover:before {
    transform: skewX(0);
    left: 50%;
    top: 0;
  }

  &:after {
    content: "";
    position: absolute;
    left: 52%;
    top: 5%;
    background-color: ${(props) => props.$color1 ?? "#A9A9A9"};
    height: 100%;
    width: 50%;
    z-index: -1;
    transform: skewX(30deg);
    transition: all ${(props) => selectProps(props, "transitionDuration")}
      cubic-bezier(0.1, 2, 1, 0.9);
  }
  &:hover:after {
    transform: skewX(0);
    left: 0%;
    top: 0;
  }
  &:hover {
    color: ${(props) => props.$style?.color ?? props.$defaultButtonStyle.color};
  }
`;

const TwoPartsSkewButton = (
  props: ButtonType & { color1?: string; color2?: string }
) => {
  const { style, hoverStyled, color1, color2 } = props;

  return (
    <StyledTwoPartsSkewButton
      onClick={props.onClick}
      $defaultButtonStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
      $style={style}
      $color1={color1}
      $color2={color2}
    >
      {props.children}
    </StyledTwoPartsSkewButton>
  );
};

export default TwoPartsSkewButton;
