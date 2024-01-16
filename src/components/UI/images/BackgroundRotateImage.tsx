import {
  BasicStyledImage,
  BasicStyledImageCaption,
  BasicStyledImageContainer,
} from "./BasicImage";
import { ImageWithContentType } from "../models/Image";
import CustomStyledType from "../models/Button";
import styled from "styled-components";
import classes from "./BackgroundRotateImage.module.css";
import { multiplyCSSValue, selectProps } from "../helpers/calculateHelper";
import {
  defaultImageCaptionStyle,
  defaultImageContainerStyle,
  defaultImageStyle,
} from "../constants/DefaultStyled";

const BackgroundRotateImageContainer = styled(
  BasicStyledImageContainer
)<CustomStyledType>`
  &:before {
    background-color: ${(props) => selectProps(props, "backgroundColor")};
  }

  &:hover:before {
    transition-delay: ${(props) =>
      multiplyCSSValue(props, "transitionDelay", 0.5)};
  }
`;
const BackgroundRotateImageCaption = styled(
  BasicStyledImageCaption
)<CustomStyledType>`
  ${BackgroundRotateImageContainer}:hover & {
    transition-delay: ${(props) => selectProps(props, "transitionDelay")};
  }
`;
const BackgroundRotateImageImage = styled(BasicStyledImage)<CustomStyledType>`
  transition-delay: ${(props) =>
    multiplyCSSValue(props, "transitionDelay", 0.5)};
`;
const BackgroundRotateImage = (props: ImageWithContentType) => {
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
    <BackgroundRotateImageContainer
      className={`${classes.container} ${containerClassName}`}
      $defaultCustomStyle={defaultContainerStyle}
      style={containerStyle}
    >
      <BackgroundRotateImageImage
        className={`${classes.image} ${imageClassName}`}
        src={src}
        $defaultCustomStyle={defaultImageStyle}
        style={imageStyle}
      />
      <BackgroundRotateImageCaption
        className={`${classes.caption} ${captionClassName}`}
        $defaultCustomStyle={defaultImageCaptionStyle}
        style={captionStyle}
      >
        {props.children}
      </BackgroundRotateImageCaption>
    </BackgroundRotateImageContainer>
  );
};

export default BackgroundRotateImage;
