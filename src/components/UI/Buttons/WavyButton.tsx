import { PropsWithChildren } from "react";
import styled, { keyframes } from "styled-components";
import { defaultButtonStyle } from "../Constants/DefaultStyled";
import ButtonStyledType, { ButtonType } from "../models/Button";
import BasicStyledButton from "./BasicButton";
import { decreaseCSSValue, selectProps } from "../helpers/calculateHelper";

const StyledWavyButton = styled(BasicStyledButton)<ButtonStyledType>`
  overflow: hidden;
`;

const wavyKeyframes = keyframes`
  0% {background-position-x: 0px;}
  100% {background-position-x: 118px;}
`;

const WavyDiv = styled.div<ButtonStyledType>`
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: calc(100% + 22px);
  background-color: #00aeff;
  z-index: ${(props) => decreaseCSSValue(props, "zIndex", 1)};
  transition: all ${(props) => selectProps(props, "transitionDuration")};
  left: 0;
  &:before {
    left: 0;
    position: absolute;
    content: "";
    background-image: url("/images/wave.png");
    width: 100%;
    height: 22px;
    top: -22px;
    animation: ${wavyKeyframes} 0.3s infinite linear;
  }
  ${StyledWavyButton}:hover & {
    top: 0;
  }
`;

const WavyButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;

  return (
    <StyledWavyButton
      onClick={props.onClick}
      $defaultButtonStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
      $style={style}
    >
      {props.children}
      <WavyDiv
        $style={style}
        $defaultButtonStyle={defaultButtonStyle}
      ></WavyDiv>
    </StyledWavyButton>
  );
};

export default WavyButton;
