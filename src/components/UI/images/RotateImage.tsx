import BasicImage from "./BasicImage";
import classes from "./RotateImage.module.css";
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
      containerClassName={`${classes.container} ${containerClassName}`}
      captionClassName={`${classes.caption} ${captionClassName}`}
      imageClassName={`${classes.image} ${imageClassName}`}
      captionStyle={captionStyle}
      containerStyle={containerStyle}
      imageStyle={imageStyle}
    >
      {props.children}
    </BasicImage>
  );
};

export default RotateImage;
