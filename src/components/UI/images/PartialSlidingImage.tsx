import {
  BasicStyledImage,
  BasicStyledImageCaption,
  BasicStyledImageContainer,
} from "./BasicImage";
import { ImageWithContentType } from "../models/Image";
import styled from "styled-components";
import classes from "./PartialSlidingImage.module.css";
import { useEffect, useState } from "react";

// TODO: Make slide direction options
const StyledPartialSlideContainer = styled(BasicStyledImageContainer)``;
const StyledPartialSlideCaption = styled(BasicStyledImageCaption)``;
const StyledPartialSlideImage = styled(BasicStyledImage)<{ height: string }>`
  ${StyledPartialSlideContainer}:hover & {
    transform: translateY(-${(props) => `${props.height}`}px);
  }
`;
const PartilaSlidingImage = (props: ImageWithContentType) => {
  let captionRef: HTMLDivElement | null = null;
  const [height, setHeight] = useState<string>("");
  useEffect(() => {
    setHeight(captionRef?.clientHeight.toString() ?? "0");
  }, [captionRef]);
  const {
    src,
    captionClassName,
    containerClassName,
    imageClassName,
    captionStyle,
    containerStyle,
    imageStyle,
  } = props;
  return (
    <StyledPartialSlideContainer
      className={`${classes.container} ${containerClassName}`}
      style={containerStyle}
    >
      <StyledPartialSlideImage
        className={`${classes.image} ${imageClassName}`}
        src={src}
        style={imageStyle}
        height={height}
      />
      <StyledPartialSlideCaption
        className={`${classes.caption} ${captionClassName}`}
        style={captionStyle}
        ref={(r) => {
          captionRef = r;
        }}
      >
        {props.children}
      </StyledPartialSlideCaption>
    </StyledPartialSlideContainer>
  );
};

export default PartilaSlidingImage;
