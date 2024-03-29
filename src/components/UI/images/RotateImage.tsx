import BasicImage from "./BasicImage";
import RotateImageClasses from "./RotateImage.module.css";
import { ImageWithContentType } from "../models/Image";

const RotateImage = (props: ImageWithContentType) => {
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
      containerClassName={`${RotateImageClasses.container} ${containerClassName}`}
      captionClassName={`${RotateImageClasses.caption} ${captionClassName}`}
      imageClassName={`${RotateImageClasses.image} ${imageClassName}`}
      captionStyle={captionStyle}
      containerStyle={containerStyle}
      imageStyle={imageStyle}
    >
      {props.children}
    </BasicImage>
  );
};

export default RotateImage;
