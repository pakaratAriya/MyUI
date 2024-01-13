import { PropsWithChildren } from "react";
import styled from "styled-components";
import CSS from "csstype";

const ColorButton = (
  props: PropsWithChildren<{
    styles?: CSS.Properties;
    hoverStyles?: CSS.Properties;
    onClick: () => void;
  }>
) => {
  const { styles, hoverStyles } = props;
  const StyledColorButton = styled.button`
    height: ${styles?.height || "90px"};
    width: ${styles?.width || "290px"};
    font-size: ${styles?.fontSize || "28px"};
    color: ${styles?.color || "white"};
    border: ${styles?.border || "none"};
    background-color: ${styles?.backgroundColor || "blue"};
    transition: all ${styles?.transitionDuration || "300ms"};
    &:hover {
      color: ${hoverStyles?.color || styles?.backgroundColor || "white"};
      background-color: ${hoverStyles?.backgroundColor || "green"};
    }
  `;
  return (
    <StyledColorButton onClick={props.onClick}>
      {props.children}
    </StyledColorButton>
  );
};

export default ColorButton;
