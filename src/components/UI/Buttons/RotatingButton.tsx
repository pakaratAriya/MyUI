import { PropsWithChildren } from "react";
import CSS from "csstype";
import styled from "styled-components";
import { defaultButtonStyle } from "../Constants/DefaultStyled";
import ButtonStyledType, { ButtonType } from "../models/Button";
import BasicStyledButton from "./BasicButton";
import { selectProps } from "../helpers/calculateHelper";

const StyledRotatingButton = styled(BasicStyledButton)<ButtonStyledType>`
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) => selectProps(props, "color")};
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: transform ${(props) => selectProps(props, "transitionDuration")};
  }
  &:hover:before {
    transform: rotate(0);
  }
`;

const RotatingButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;

  return (
    <StyledRotatingButton
      onClick={props.onClick}
      $defaultButtonStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
      $style={style}
    >
      {props.children}
    </StyledRotatingButton>
  );
};

export default RotatingButton;
