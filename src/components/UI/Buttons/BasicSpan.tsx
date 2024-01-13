import { styled } from "styled-components";
import CSS from "csstype";

const BasicStyledSpan = styled.span<{
  $style?: CSS.Properties;
  $defaultButtonStyle: CSS.Properties;
  $content?: string;
}>`
    content: "${(props) => props.$content ?? ""}";
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    color: ${(props) =>
      props.$style?.backgroundColor ??
      props.$defaultButtonStyle.backgroundColor};
    background-color: ${(props) =>
      props.$style?.color ?? props.$defaultButtonStyle.color};
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all
    ${(props) =>
      props.$style?.transitionDuration ??
      props.$defaultButtonStyle.transitionDuration};

  }
    &:hover {
      opacity: 1;
    }
  `;

export default BasicStyledSpan;
