import styled from "styled-components";
import { defaultButtonStyle } from "../constants/DefaultStyled";
import BasicStyledButton from "./BasicButton";
import BasicStyledSpan from "./BasicSpan";
import CustomStyledType, { ButtonType } from "../models/Button";
import { decreaseCSSValue, selectProps } from "../helpers/calculateHelper";

const StyledFirstLetterRotationButton = styled(
  BasicStyledButton
)<CustomStyledType>`
  border-radius: 0;
  color: ${(props) => selectProps(props, "color")};
  &:before {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: Transparent;
    height: 100%;
    width: 100%;
    border-radius: 0;
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }

  &:hover:before {
    background-color: ${(props) => selectProps(props, "color")};
    transform: rotate(7deg);
    z-index: ${(props) => decreaseCSSValue(props, "zIndex", 1)};
  }
  &:hover {
    color: ${(props) => selectProps(props, "backgroundColor")};
  }
`;

const FirstLetterRotationSpan = styled(BasicStyledSpan)<
  CustomStyledType & { $content?: string }
>`
  z-index: ${(props) => selectProps(props, "zIndex")};
  color: transparent;
  background-color: Transparent;
  position: relative;
  display: inline;
  opacity: 1;

  &:before {
    content: "${(props) => props.$content ?? ""}";
    position: absolute;
    background-color: Transparent;
    color: ${(props) => selectProps(props, "color")};
    transition: all 0.2s;
  }

  ${StyledFirstLetterRotationButton}:hover &:before {
    color: ${(props) => selectProps(props, "backgroundColor")};
    font-size: 30px;
    transform: rotate(-360deg) translateX(-40%) translateY(-37%);
  }
`;
const FirstLetterRotationButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;
  const defaultButtonStyle2 = { ...defaultButtonStyle };
  const spanStyle = { ...defaultButtonStyle };
  defaultButtonStyle2.color = "black";
  defaultButtonStyle2.backgroundColor = "white";
  spanStyle.display = "inline";
  return (
    <StyledFirstLetterRotationButton
      onClick={props.onClick}
      $style={style}
      $defaultCustomStyle={defaultButtonStyle2}
      $hoverStyled={hoverStyled}
    >
      <FirstLetterRotationSpan
        $style={style}
        $defaultCustomStyle={spanStyle}
        $content={props.children?.toString()[0]}
      >
        {props.children?.toString()[0]}
      </FirstLetterRotationSpan>
      {props.children?.toString().substring(1)}
    </StyledFirstLetterRotationButton>
  );
};

export default FirstLetterRotationButton;
