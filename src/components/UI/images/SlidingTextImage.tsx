import BasicImage from "./BasicImage";
import rotateImageClasses from "./RotateImage.module.css";
import slidingImageClasses from "./SlidingTextImage.module.css";
import { ImageWithContentType } from "../models/Image";

// TODO: Make slide direction options
const SlidingTextImage = (props: ImageWithContentType) => {
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
      containerClassName={`${slidingImageClasses.container} ${rotateImageClasses.container} ${containerClassName}`}
      captionClassName={`${slidingImageClasses.caption} ${captionClassName}`}
      imageClassName={`${rotateImageClasses.image} ${imageClassName}`}
      captionStyle={captionStyle}
      containerStyle={containerStyle}
      imageStyle={imageStyle}
    >
      {props.children}
    </BasicImage>
  );
};

export default SlidingTextImage;
