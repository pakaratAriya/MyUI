import BasicImage from "./BasicImage";
import classes from "./AppearTextImage.module.css";
import { ImageWithContentType } from "../models/Image";

// TODO: Make slide direction options
const AppearTextImage = (props: ImageWithContentType) => {
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

export default AppearTextImage;
