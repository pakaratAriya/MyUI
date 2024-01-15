import styled from "styled-components";
import { defaultButtonStyle } from "../constants/DefaultStyled";
import BasicStyledButton from "./BasicButton";
import CustomStyledType, { ButtonType } from "../models/Button";
import { multiplyCSSValue, selectProps } from "../helpers/calculateHelper";

const StyledCalendarButton = styled(BasicStyledButton)<
  CustomStyledType & { $thirdColor: string; $secondColor: string }
>`
  &:before,
  &:after {
    content: "${(props) => props.$defaultCustomStyle.content}";
    position: absolute;
    color: white;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: top;
    background-color: ${(props) =>
      props.$hoverStyled?.backgroundColor ?? props.$secondColor};
    height: 100%;
    width: 100%;
    transform: rotateX(270deg);
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }
  &:after {
    background-color: ${(props) => props.$thirdColor ?? "black"};
    transition-delay: ${(props) =>
      multiplyCSSValue(props, "transitionDuration", 0.5)};
  }

  &:hover:before,
  &:hover:after {
    transform: rotateX(0deg);
  }
`;

const CalendarButton = (
  props: ButtonType & { secondColor?: string; thirdColor?: string }
) => {
  const { style, hoverStyled } = props;
  const defaultButtonStyle2 = { ...defaultButtonStyle };
  defaultButtonStyle2.content = props.children?.toString();

  return (
    <StyledCalendarButton
      onClick={props.onClick}
      $style={style}
      $secondColor={props.secondColor ?? "gray"}
      $thirdColor={props.thirdColor ?? "black"}
      $defaultCustomStyle={defaultButtonStyle2}
      $hoverStyled={hoverStyled}
    >
      {props.children}
    </StyledCalendarButton>
  );
};

export default CalendarButton;
