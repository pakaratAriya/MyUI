import CustomStyledType, { ButtonType } from "../models/Button";
import { styled } from "styled-components";
import BasicStyledButton from "./BasicButton";
import { defaultButtonStyle } from "../constants/DefaultStyled";
import { selectProps } from "../helpers/calculateHelper";
import BasicStyledSpan from "./BasicSpan";

const StyledTargetSpan = styled(BasicStyledSpan)<CustomStyledType>`
  content: "";
  position: absolute;
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
  pointer-events: none;
  background-color: ${(props) => selectProps(props, "color")};
  box-shadow: 0 0 10px ${(props) => selectProps(props, "color")},
    0 0 30px ${(props) => selectProps(props, "color")},
    0 0 50px ${(props) => selectProps(props, "color")},
    0 0 100px ${(props) => selectProps(props, "color")};
  opacity: 1;
  transform: scaleX(1) scaleY(1);
`;
const StyledTargetButton = styled(BasicStyledButton)<CustomStyledType>`
  background-color: Transparent;
  color: ${(props) => selectProps(props, "color")};
  box-shadow: 0 0 0;
  border-color: ${(props) => selectProps(props, "color")};
  &:hover {
    color: ${(props) => selectProps(props, "backgroundColor")};
    background-color: ${(props) => selectProps(props, "color")};
    box-shadow: 0 0 10px ${(props) => selectProps(props, "color")},
      0 0 30px ${(props) => selectProps(props, "color")};
  }

  ${StyledTargetSpan}:nth-child(1), ${StyledTargetSpan}:nth-child(3) {
    width: 4px;
    height: 20px;
  }

  ${StyledTargetSpan}:nth-child(2), ${StyledTargetSpan}:nth-child(4) {
    width: 20px;
    height: 4px;
  }
  /* =================== top ==================== */

  ${StyledTargetSpan}:nth-child(1) {
    left: calc(50% - 2px);
    top: -28px;
  }

  &:hover ${StyledTargetSpan}:nth-child(1) {
    transform: scaleY(0);
    top: 8px;
  }

  /* =================== right ==================== */

  ${StyledTargetSpan}:nth-child(2) {
    right: -28px;
    top: calc(50% - 2px);
  }

  &:hover ${StyledTargetSpan}:nth-child(2) {
    transform: scaleX(0);
    right: 8px;
  }

  /* =================== bottom ==================== */

  ${StyledTargetSpan}:nth-child(3) {
    left: calc(50% - 2px);
    bottom: -28px;
  }

  &:hover ${StyledTargetSpan}:nth-child(3) {
    transform: scaleY(0);
    bottom: 8px;
  }

  /* =================== left ==================== */
  ${StyledTargetSpan}:nth-child(4) {
    left: -28px;
    top: calc(50% - 2px);
  }

  &:hover ${StyledTargetSpan}:nth-child(4) {
    transform: scaleX(0);
    left: 8px;
  }

  &:hover ${StyledTargetSpan} {
    opacity: 0;
  }
`;

const TargetButton = (props: ButtonType) => {
  const { onClick, hoverStyled, style } = props;
  return (
    <StyledTargetButton
      onClick={onClick}
      $defaultCustomStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
      $style={style}
    >
      <StyledTargetSpan
        $defaultCustomStyle={defaultButtonStyle}
        $hoverStyled={hoverStyled}
        $style={style}
      ></StyledTargetSpan>
      <StyledTargetSpan
        $defaultCustomStyle={defaultButtonStyle}
        $hoverStyled={hoverStyled}
        $style={style}
      ></StyledTargetSpan>
      <StyledTargetSpan
        $defaultCustomStyle={defaultButtonStyle}
        $hoverStyled={hoverStyled}
        $style={style}
      ></StyledTargetSpan>
      <StyledTargetSpan
        $defaultCustomStyle={defaultButtonStyle}
        $hoverStyled={hoverStyled}
        $style={style}
      ></StyledTargetSpan>
      {props.children}
    </StyledTargetButton>
  );
};

export default TargetButton;
