import { styled } from "styled-components";
import CSS from "csstype";
import { selectProps } from "../helpers/calculateHelper";

const BasicStyledSpan = styled.span<{
  $style?: CSS.Properties;
  $defaultCustomStyle: CSS.Properties;
  $content?: string;
}>`
    content: "${(props) => props.$content ?? ""}";
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    color: ${(props) => selectProps(props, "backgroundColor")};
    background-color: ${(props) => selectProps(props, "color")};
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all
    ${(props) => selectProps(props, "transitionDuration")};

  }
    &:hover {
      opacity: 1;
    }
  `;

export default BasicStyledSpan;
