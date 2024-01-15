import {
  BasicStyledImage,
  BasicStyledImageCaption,
  BasicStyledImageContainer,
} from "./BasicImage";
import { ImageWithContentType } from "../models/Image";
import styled from "styled-components";
import { useEffect, useState } from "react";

// TODO: Make slide direction options
const StyledPartialSlideContainer = styled(BasicStyledImageContainer)``;
const StyledPartialSlideCaption = styled(BasicStyledImageCaption)`
  height: auto;
  bottom: -1px;
  top: auto;
  transform: translateY(100%);
  background-color: black;

  ${StyledPartialSlideContainer}:hover & {
    transform: translateY(0);
  }
`;
const StyledPartialSlideImage = styled(BasicStyledImage)<{ height: string }>`
  transform: translateY(0);
  height: auto;
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
      className={containerClassName}
      style={containerStyle}
    >
      <StyledPartialSlideImage
        className={imageClassName}
        src={src}
        style={imageStyle}
        height={height}
      />
      <StyledPartialSlideCaption
        className={captionClassName}
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
