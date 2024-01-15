import styled from "styled-components";
import { defaultButtonStyle } from "../constants/DefaultStyled";
import BasicStyledButton from "./BasicButton";
import CustomStyledType, { ButtonType } from "../models/Button";
import { selectProps } from "../helpers/calculateHelper";

const StyledGrowingButton = styled(BasicStyledButton)<CustomStyledType>`
  border: 0;
  &:before,
  &:after {
    content: "";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: top;
    border: 4px solid ${(props) => selectProps(props, "backgroundColor")};
    height: 20px;
    width: 20px;
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }

  &:before {
    border-radius: 5px 0;
    border-top: 0;
    border-left: 0;
    bottom: -7px;
    right: -7px;
  }
  &:after {
    border-radius: 5px 0;
    border-bottom: 0;
    border-right: 0;
    top: -7px;
    left: -7px;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    height: 100%;
  }

  &:hover {
    opacity: 1;
    color: ${(props) => selectProps(props, "color")};
    background-color: ${(props) => selectProps(props, "backgroundColor")};
  }
`;

const GrowingButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;
  const defaultButtonStyle2 = { ...defaultButtonStyle };
  defaultButtonStyle2.color = "white";
  defaultButtonStyle2.backgroundColor = "black";
  return (
    <StyledGrowingButton
      onClick={props.onClick}
      $style={style}
      $defaultCustomStyle={defaultButtonStyle2}
      $hoverStyled={hoverStyled}
    >
      {props.children}
    </StyledGrowingButton>
  );
};

export default GrowingButton;
