import styled from "styled-components";
import { defaultButtonStyle } from "../Constants/DefaultStyled";
import ButtonStyledType, { ButtonType } from "../models/Button";
import BasicStyledButton from "./BasicButton";
import {
  decreaseCSSValue,
  increaseCSSValue,
  selectProps,
} from "../helpers/calculateHelper";

const StyledPulsingButton = styled(BasicStyledButton)<ButtonStyledType>`
  border-radius: 50%;
  &:before {
    border-radius: 50%;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) => selectProps(props, "backgroundColor")};
    height: 100%;
    width: 100%;
    z-index: ${(props) => decreaseCSSValue(props, "zIndex", 1)};
    transform: scale(1);

    transition: all
      ${(props) => increaseCSSValue(props, "transitionDuration", ".3s")};
  }
  &:hover:before {
    transform: scale(1.2, 1.6);
    opacity: 0;
  }

  &:hover {
    color: ${(props) => selectProps(props, "color")};
    background-color: ${(props) => selectProps(props, "backgroundColor")};
    box-shadow: 2px 8px 2px rgba(0, 0, 0, 0.2);
    top: -1px;
  }

  &:active {
    top: 1px;
    box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.3);
  }
`;

const PulsingButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;
  const defaultButtonStyle2 = { ...defaultButtonStyle };
  defaultButtonStyle2.color = "white";
  defaultButtonStyle2.backgroundColor = "black";
  defaultButtonStyle2.transitionDuration = "0.1s";

  return (
    <StyledPulsingButton
      onClick={props.onClick}
      $defaultButtonStyle={defaultButtonStyle2}
      $hoverStyled={hoverStyled}
      $style={style}
    >
      {props.children}
    </StyledPulsingButton>
  );
};

export default PulsingButton;
