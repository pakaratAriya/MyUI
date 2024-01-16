import {
  BasicStyledImage,
  BasicStyledImageCaption,
  BasicStyledImageContainer,
} from "./BasicImage";
import { ImageWithContentType } from "../models/Image";
import CustomStyledType from "../models/Button";
import styled from "styled-components";
import classes from "./ShrinkTextImage.module.css";
import { increaseCSSValue, selectProps } from "../helpers/calculateHelper";
import {
  defaultImageCaptionStyle,
  defaultImageContainerStyle,
} from "../constants/DefaultStyled";

const ShrinkTextImageContainer = styled(
  BasicStyledImageContainer
)<CustomStyledType>`
  &:before {
    background-color: ${(props) => selectProps(props, "backgroundColor")};
    z-index: ${(props) => increaseCSSValue(props, "zIndex", 1)};
  }
`;
const ShrinkTextImageCaption = styled(
  BasicStyledImageCaption
)<CustomStyledType>`
  z-index: ${(props) => increaseCSSValue(props, "zIndex", 1)};
  ${ShrinkTextImageContainer}:hover & {
    transition-delay: ${(props) => selectProps(props, "transitionDelay")};
  }
`;
const ShrinkTextImageImage = styled(BasicStyledImage)``;
const ShrinkTextImage = (props: ImageWithContentType) => {
  const {
    src,
    captionStyle,
    containerStyle,
    imageStyle,
    containerClassName,
    captionClassName,
    imageClassName,
  } = props;
  const defaultContainerStyle = defaultImageContainerStyle;
  defaultContainerStyle.backgroundColor = "rgb(1, 103, 94)";
  return (
    <ShrinkTextImageContainer
      className={`${classes.container} ${containerClassName}`}
      $defaultCustomStyle={defaultContainerStyle}
      style={containerStyle}
    >
      <ShrinkTextImageImage
        className={`${classes.image} ${imageClassName}`}
        src={src}
        style={imageStyle}
      />
      <ShrinkTextImageCaption
        className={`${classes.caption} ${captionClassName}`}
        $defaultCustomStyle={defaultImageCaptionStyle}
        style={captionStyle}
      >
        {props.children}
      </ShrinkTextImageCaption>
    </ShrinkTextImageContainer>
  );
};

export default ShrinkTextImage;
