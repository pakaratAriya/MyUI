import styled from "styled-components";
import { defaultButtonStyle } from "../Constants/DefaultStyled";
import BasicStyledButton from "./BasicButton";
import BasicStyledSpan from "./BasicSpan";
import ButtonStyledType, { ButtonType } from "../models/Button";
import { selectProps } from "../helpers/calculateHelper";

const StyledBorderGrowingButton = styled(BasicStyledButton)<ButtonStyledType>`
  border-radius: 0;
  border: 0;
  overflow: hidden;
  color: ${(props) => selectProps(props, "color")};
  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: ${(props) => selectProps(props, "color")};
    height: 100%;
    width: 2px;
    border-radius: 0;
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }

  &:before {
    bottom: -100%;
    left: 0;
  }

  &:after {
    top: -100%;
    right: 0;
  }

  &:hover:before {
    bottom: 0;
  }
  &:hover:after {
    top: 0;
  }
  &:hover {
    color: ${(props) => selectProps(props, "color")};
  }
`;

const BorderGrowingSpan = styled(BasicStyledSpan)<ButtonStyledType>`
  color: transparent;
  position: absolute;
  background-color: transparent;
  opacity: 1;

  &:before,
  &:after {
    content: "";
    border: 0;
    position: absolute;
    background-color: ${(props) => selectProps(props, "color")};
    height: 2px;
    width: 100%;
    border-radius: 0;
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }

  &:before {
    top: 0;
    left: -100%;
  }

  &:after {
    bottom: 0;
    right: -100%;
  }

  ${StyledBorderGrowingButton}:hover &:before {
    left: 0;
  }
  ${StyledBorderGrowingButton}:hover &:after {
    right: 0;
  }
`;
const BorderGrowingButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;
  const defaultButtonStyle2 = { ...defaultButtonStyle };
  const spanStyle = { ...defaultButtonStyle };
  defaultButtonStyle2.color = "black";
  defaultButtonStyle2.backgroundColor = "white";
  spanStyle.color = "black";
  return (
    <StyledBorderGrowingButton
      onClick={props.onClick}
      $style={style}
      $defaultButtonStyle={defaultButtonStyle2}
      $hoverStyled={hoverStyled}
    >
      {props.children}
      <BorderGrowingSpan
        $style={style}
        $defaultButtonStyle={spanStyle}
      ></BorderGrowingSpan>
    </StyledBorderGrowingButton>
  );
};

export default BorderGrowingButton;
