import styled from "styled-components";
import { defaultButtonStyle } from "../constants/DefaultStyled";
import BasicStyledButton from "./BasicButton";
import BasicStyledSpan from "./BasicSpan";
import CustomStyledType, { ButtonType } from "../models/Button";
import { decreaseCSSValue, selectProps } from "../helpers/calculateHelper";

const StyledCutEffectButton = styled(BasicStyledButton)<CustomStyledType>`
  overflow: hidden;
  border-radius: 5px;
  border: 0;
  z-index: ${(props) => selectProps(props, "zIndex")};
  color: ${(props) => selectProps(props, "color")};

  &:hover {
    color: ${(props) => selectProps(props, "backgroundColor")};
  }
`;

const CutEffectSpan = styled(BasicStyledSpan)<CustomStyledType>`
  border: 2px solid black;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  border-radius: 5px;
  background-color: Transparent;
  z-index: ${(props) => decreaseCSSValue(props, "zIndex", 1)};
  &:before {
    content: "";
    position: absolute;
    display: inline;
    opacity: 1;
    left: 50%;
    height: 500%;
    top: 50%;
    width: 8%;
    background-color: ${(props) => selectProps(props, "backgroundColor")};
    transform: translate(-50%, -50%) rotate(-60deg);
    transition: all 0.2s;
    z-index: ${(props) => decreaseCSSValue(props, "zIndex", 1)};
  }

  ${StyledCutEffectButton}:hover &:before {
    width: 100%;
    background-color: ${(props) => selectProps(props, "color")};
    transform: translate(-50%, -50%) rotate(60deg);
  }
`;
const CutEffectButton = (props: ButtonType) => {
  const { style, hoverStyled } = props;
  const defaultButtonStyle2 = { ...defaultButtonStyle };
  const spanStyle = { ...defaultButtonStyle };
  defaultButtonStyle2.color = "black";
  defaultButtonStyle2.backgroundColor = "white";
  spanStyle.display = "inline";
  return (
    <StyledCutEffectButton
      onClick={props.onClick}
      $style={style}
      $defaultCustomStyle={defaultButtonStyle2}
      $hoverStyled={hoverStyled}
    >
      {props.children}
      <CutEffectSpan
        $style={style}
        $defaultCustomStyle={spanStyle}
      ></CutEffectSpan>
    </StyledCutEffectButton>
  );
};

export default CutEffectButton;
