import styled from "styled-components";
import { defaultButtonStyle } from "../constants/DefaultStyled";
import CustomStyledType, { ButtonType } from "../models/Button";
import BasicStyledButton from "./BasicButton";
import { selectProps } from "../helpers/calculateHelper";

const StyledSwipeButton = styled(BasicStyledButton)<CustomStyledType>`
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) =>
      props.$hoverStyled?.backgroundColor ?? props.$defaultCustomStyle.color};
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
      $defaultCustomStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
      $style={style}
    >
      {props.children}
    </StyledSwipeButton>
  );
};

export default SwipeButton;
