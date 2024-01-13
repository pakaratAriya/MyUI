import styled from "styled-components";
import { defaultButtonStyle } from "../Constants/DefaultStyled";
import BasicStyledButton from "./BasicButton";
import BasicStyledSpan from "./BasicSpan";
import ButtonStyledType, { ButtonType } from "../models/Button";
import { selectProps } from "../helpers/calculateHelper";

const StyledThreeDotsButton = styled(BasicStyledButton)<ButtonStyledType>`
  border: 0;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    background-color: ${(props) =>
      props.$hoverStyled?.backgroundColor ?? props.$defaultButtonStyle.color};
    height: 10px;
    width: 10px;
    opacity: 0;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }
  &:after {
    right: 0;

    box-shadow: 50px 0 0
      ${(props) =>
        props.$hoverStyled?.backgroundColor ?? props.$defaultButtonStyle.color};
  }
  &:before {
    left: 0;
    box-shadow: -50px 0 0
      ${(props) =>
        props.$hoverStyled?.backgroundColor ?? props.$defaultButtonStyle.color};
  }
  &:hover:before,
  &:hover:after {
    height: 20px;
    width: 20px;
    transform: translateY(-50%);
    box-shadow: 0 0 0
      ${(props) =>
        props.$hoverStyled?.backgroundColor ?? props.$defaultButtonStyle.color};
    opacity: 1;
  }
  &:hover:after {
    right: 50%;
  }
  &:hover:before {
    left: 50%;
  }
`;

const ThreeDotsBasicSpan = styled(BasicStyledSpan)<ButtonStyledType>`
  transform: scale(1);
  transition: all 400ms;
  transition-delay: 150ms;
  ${StyledThreeDotsButton}:hover & {
    transform: scale(1);
  }
`;
const ThreeDotsButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;

  return (
    <StyledThreeDotsButton
      onClick={props.onClick}
      $style={style}
      $defaultButtonStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
    >
      <ThreeDotsBasicSpan
        $style={style}
        $defaultButtonStyle={defaultButtonStyle}
        $content={props.children?.toString()}
      >
        {props.children}
      </ThreeDotsBasicSpan>
      {props.children}
    </StyledThreeDotsButton>
  );
};

export default ThreeDotsButton;
