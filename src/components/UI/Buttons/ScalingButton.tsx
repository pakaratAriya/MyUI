import styled from "styled-components";
import { defaultButtonStyle } from "../constants/DefaultStyled";
import CustomStyledType, { ButtonType } from "../models/Button";
import BasicStyledButton from "./BasicButton";
import { selectProps } from "../helpers/calculateHelper";

const StyledScalingButton = styled(BasicStyledButton)<
  CustomStyledType & { $content: string }
>`
  overflow: hidden;

  &:before {
    content: "${(props) => props.$content}";
    color: white;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => selectProps(props, "color")};
    height: 100%;
    width: 100%;
    transform: scale(5);
    opacity: 0;
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }
  &:hover:before {
    transform: scale(1);
    opacity: 1;
  }
`;

const ScalingButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;
  const content: string = props.children?.toString() ?? "";
  return (
    <StyledScalingButton
      onClick={props.onClick}
      $content={content}
      $defaultCustomStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
      $style={style}
    >
      {props.children}
    </StyledScalingButton>
  );
};

export default ScalingButton;
