import styled from "styled-components";
import { defaultButtonStyle } from "../constants/DefaultStyled";
import CustomStyledType, { ButtonType } from "../models/Button";
import BasicStyledButton from "./BasicButton";
import { selectProps } from "../helpers/calculateHelper";

const StyledMirrorButton = styled(BasicStyledButton)<CustomStyledType>`
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: -50%;
    background-color: white;
    box-shadow: 0 0 10px white, 0 0 30px white, 0 0 50px white;
    height: 10px;
    width: 100%;
    transform-origin: bottom left;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0;
  }
  &:hover:before {
    transform: translateX(100%) rotate(45deg);
    transition: all ${(props) => selectProps(props, "transitionDuration")};
  }
  &:hover {
    color: ${(props) => selectProps(props, "backgroundColor")};
    background-color: ${(props) => selectProps(props, "color")};
  }
`;

const MirrorButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;

  return (
    <StyledMirrorButton
      onClick={props.onClick}
      $defaultCustomStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
      $style={style}
    >
      {props.children}
    </StyledMirrorButton>
  );
};

export default MirrorButton;
