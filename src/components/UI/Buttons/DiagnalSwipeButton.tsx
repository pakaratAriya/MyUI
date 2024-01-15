import CustomStyledType, { ButtonType } from "../models/Button";
import { styled } from "styled-components";
import BasicStyledButton from "./BasicButton";
import { defaultButtonStyle } from "../constants/DefaultStyled";
import {
  selectProps,
  multiplyCSSValue,
  decreaseCSSValue,
  increaseCSSValue,
} from "../helpers/calculateHelper";

const StyledDiagnalSwipeButtonButton = styled(
  BasicStyledButton
)<CustomStyledType>`
  overflow: hidden;
  &:before,
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: ${(props) => decreaseCSSValue(props, "zIndex", 1)};
    right: 0;
    content: "";
    transition: all
      ${(props) => increaseCSSValue(props, "transitionDuration", "200ms")};
    border-top: ${(props) => multiplyCSSValue(props, "height", 0.5)} solid
      ${(props) => selectProps(props, "color")};
    border-bottom: ${(props) => multiplyCSSValue(props, "height", 0.5)} solid
      ${(props) => selectProps(props, "color")};
  }
  &:before {
    border-right: ${(props) => multiplyCSSValue(props, "height", 0.5)} solid
      white;
    transform: translateX(-100%);
  }
  &:after {
    border-left: ${(props) => multiplyCSSValue(props, "height", 0.5)} solid
      transparent;
    transform: translateX(100%);
  }
  &:hover:before {
    transform: translateX(0);
  }
  &:hover:after {
    transform: translateX(0);
  }
`;

const DiagnalSwipeButtonButton = (props: ButtonType) => {
  const { onClick, hoverStyled, style } = props;
  return (
    <StyledDiagnalSwipeButtonButton
      onClick={onClick}
      $defaultCustomStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
      $style={style}
    >
      {props.children}
    </StyledDiagnalSwipeButtonButton>
  );
};

export default DiagnalSwipeButtonButton;
