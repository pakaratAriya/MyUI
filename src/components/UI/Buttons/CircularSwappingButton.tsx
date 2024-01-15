import styled from "styled-components";
import { defaultButtonStyle } from "../constants/DefaultStyled";
import BasicStyledButton from "./BasicButton";
import CustomStyledType, { ButtonType } from "../models/Button";
import { decreaseCSSValue, selectProps } from "../helpers/calculateHelper";

const StyledCircularSwappingButton = styled(
  BasicStyledButton
)<CustomStyledType>`
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) => selectProps(props, "color")};
    height: 0%;
    width: 100%;
    border-radius: 0 0 50% 50%;
    z-index: ${(props) => decreaseCSSValue(props, "zIndex", 1)};
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }
  &:hover:before {
    border-radius: 0 0 190% 190%;
    height: 190%;
  }
  &:hover {
    color: ${(props) => selectProps(props, "backgroundColor")};
    background-color: Transparent;
  }
`;

const CircularSwappingButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;

  return (
    <StyledCircularSwappingButton
      onClick={props.onClick}
      $style={style}
      $defaultCustomStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
    >
      {props.children}
    </StyledCircularSwappingButton>
  );
};

export default CircularSwappingButton;
