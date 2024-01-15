import styled from "styled-components";
import { defaultButtonStyle } from "../constants/DefaultStyled";
import CustomStyledType, { ButtonType } from "../models/Button";
import BasicStyledButton from "./BasicButton";
import { decreaseCSSValue, selectProps } from "../helpers/calculateHelper";

const StyledSeparateButton = styled(BasicStyledButton)<CustomStyledType>`
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) => selectProps(props, "color")};
    height: 100%;
    width: 100%;
    z-index: ${(props) => decreaseCSSValue(props, "zIndex", 1)};
    transform: rotateX(90deg);
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }
  &:after {
    transform: rotateY(90deg);
  }
  &:hover:before {
    transform: rotateX(0deg);
  }
  &:hover:after {
    transform: rotateY(0deg);
  }
`;

const SeparateButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;

  return (
    <StyledSeparateButton
      onClick={props.onClick}
      $defaultCustomStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
      $style={style}
    >
      {props.children}
    </StyledSeparateButton>
  );
};

export default SeparateButton;
