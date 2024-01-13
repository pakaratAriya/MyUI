import { styled } from "styled-components";
import ButtonStyledType, { ButtonType } from "../models/Button";
import BasicStyledButton from "./BasicButton";
import { defaultButtonStyle } from "../Constants/DefaultStyled";
import BasicStyledSpan from "./BasicSpan";
import {
  decreaseCSSValue,
  increaseCSSValue,
  selectProps,
} from "../helpers/calculateHelper";

const StyledSplittedButton = styled(BasicStyledButton)<ButtonStyledType>`
  overflow: hidden;
  &:before,
  &:after {
    content: "";
    z-index: ${(props) => selectProps(props, "zIndex")};
    width: 25%;
    position: absolute;
    height: 100%;
    background-color: ${(props) => selectProps(props, "color")};
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }
  &:before {
    top: 100%;
    left: 0;
  }

  &:after {
    top: -100%;
    left: 25%;
  }

  &:hover:before {
    top: 0;
  }
  &:hover:after {
    top: 0;
    transition-delay: 0.1s;
  }
`;

const StyledSplittedSpan = styled(BasicStyledSpan)<ButtonStyledType>`
  border-radius: 0px;
  opacity: 1;

  color: ${(props) => selectProps(props, "color")};
  background-color: Transparent;
  &:before,
  &:after {
    content: "";
    width: 25%;
    position: absolute;
    height: 100%;
    background-color: ${(props) => selectProps(props, "color")};
    transition: all ${(props) => selectProps(props, "transitionDuration")};
    z-index: ${(props) => decreaseCSSValue(props, "zIndex", 1)};
  }
  &:before {
    top: 100%;
    right: 25%;
  }

  &:after {
    top: -100%;
    right: 0;
    transition-delay: 0.1s;
  }

  ${StyledSplittedButton}:hover &:before {
    top: 0;
    transition-delay: 0.2s;
  }
  ${StyledSplittedButton}:hover &:after {
    top: 0;
    transition-delay: 0.3s;
  }
  ${StyledSplittedButton}:hover & {
    color: ${(props) => selectProps(props, "backgroundColor")};
  }
`;

const SplittedButton = (props: ButtonType) => {
  const { onClick, hoverStyled, style } = props;
  const defaultButtonStyle2 = { ...defaultButtonStyle };
  defaultButtonStyle2.backgroundColor = "white";
  defaultButtonStyle2.color = "black";
  return (
    <StyledSplittedButton
      onClick={onClick}
      $defaultButtonStyle={defaultButtonStyle2}
      $hoverStyled={hoverStyled}
      $style={style}
    >
      <StyledSplittedSpan
        onClick={onClick}
        $defaultButtonStyle={defaultButtonStyle2}
        $hoverStyled={hoverStyled}
        $style={style}
      >
        {props.children}
      </StyledSplittedSpan>
    </StyledSplittedButton>
  );
};

export default SplittedButton;
