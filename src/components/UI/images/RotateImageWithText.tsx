import BasicImage from "./BasicImage";
import RotateImageWithTextClasses from "./RotateImageWithText.module.css";
import RotateImageClasses from "./RotateImage.module.css";
import { ImageWithContentType } from "../models/Image";

const RotateImageWithText = (props: ImageWithContentType) => {
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
    <BasicImage
      src={src}
      containerClassName={`${RotateImageWithTextClasses.container} ${RotateImageClasses.container} ${containerClassName}`}
      captionClassName={`${RotateImageWithTextClasses.caption} ${captionClassName}`}
      imageClassName={`${RotateImageClasses.image} ${imageClassName}`}
      captionStyle={captionStyle}
      containerStyle={containerStyle}
      imageStyle={imageStyle}
    >
      {props.children}
    </BasicImage>
  );
};

export default RotateImageWithText;
