import styled from "styled-components";
import { defaultButtonStyle } from "../Constants/DefaultStyled";
import ButtonStyledType, { ButtonType } from "../models/Button";
import BasicStyledButton from "./BasicButton";
import { selectProps } from "../helpers/calculateHelper";

const StyledMirrorButton = styled(BasicStyledButton)<ButtonStyledType>`
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: -50%;
    background-color: white;
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
      $defaultButtonStyle={defaultButtonStyle}
      $hoverStyled={hoverStyled}
      $style={style}
    >
      {props.children}
    </StyledMirrorButton>
  );
};

export default MirrorButton;
