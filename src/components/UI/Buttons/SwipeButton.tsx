import styled from "styled-components";
import { defaultButtonStyle } from "../Constants/DefaultStyled";
import ButtonStyledType, { ButtonType } from "../models/Button";
import BasicStyledButton from "./BasicButton";
import { selectProps } from "../helpers/calculateHelper";

const StyledSwipeButton = styled(BasicStyledButton)<ButtonStyledType>`
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) =>
      props.$hoverStyled?.backgroundColor ?? props.$defaultButtonStyle.color};
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: translateX(-100%);
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }
  &:hover:before {
    transform: translateX(0);
  }
`;

const SwipeButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;

  return (
    <StyledSwipeButton
      onClick={props.onClick}
      $defaultButtonStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
      $style={style}
    >
      {props.children}
    </StyledSwipeButton>
  );
};

export default SwipeButton;
