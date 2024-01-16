import { styled } from "styled-components";
import { BasicImageWithContentType } from "../models/Image";
import {
  defaultImageCaptionStyle,
  defaultImageContainerStyle,
  defaultImageStyle,
} from "../constants/DefaultStyled";

export const BasicStyledImage = styled.img`
  position: ${defaultImageStyle.position};
  top: ${defaultImageStyle.top};
  left: ${defaultImageStyle.left};
  width: ${defaultImageStyle.width};
  transition: all ${defaultImageStyle.transitionDuration};
`;

export const BasicStyledImageContainer = styled.div`
  width: ${defaultImageContainerStyle.width};
  height: ${defaultImageContainerStyle.height};
  position: ${defaultImageContainerStyle.position};
  overflow: ${defaultImageContainerStyle.overflow};
  margin: ${defaultImageContainerStyle.margin};
  display: ${defaultImageContainerStyle.display};
  transition: all ${defaultImageContainerStyle.transitionDuration};
  &:before {
    transition: all ${defaultImageContainerStyle.transitionDuration};
  }
`;

export const BasicStyledImageCaption = styled.div`
  position: ${defaultImageCaptionStyle.position};
  top: ${defaultImageCaptionStyle.top};
  left: ${defaultImageCaptionStyle.left};
  height: ${defaultImageCaptionStyle.height};
  width: ${defaultImageCaptionStyle.width};
  display: ${defaultImageCaptionStyle.display};
  flex-direction: ${defaultImageCaptionStyle.flexDirection};
  justify-content: ${defaultImageCaptionStyle.justifyContent};
  align-items: ${defaultImageCaptionStyle.alignItems};
  color: ${defaultImageCaptionStyle.color};
  transition: all ${defaultImageCaptionStyle.transitionDuration};
  & > * {
    margin: 0;
  }
`;

const BasicImage = (props: BasicImageWithContentType) => {
  const {
    captionClassName,
    containerClassName,
    imageClassName,
    src,
    captionStyle,
    containerStyle,
    imageStyle,
    onClick,
  } = props;
  return (
    <BasicStyledImageContainer
      className={containerClassName}
      style={containerStyle}
      onClick={onClick}
    >
      <BasicStyledImage
        className={imageClassName}
        src={src}
        style={imageStyle}
      />
      <BasicStyledImageCaption
        className={captionClassName}
        style={captionStyle}
      >
        {props.children}
      </BasicStyledImageCaption>
    </BasicStyledImageContainer>
  );
};

export default BasicImage;
