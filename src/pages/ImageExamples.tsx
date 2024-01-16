import { TestImagePath } from "../components/ui/constants/DefaultStyled";
import AppearTextImage from "../components/ui/images/AppearTextImage";
import BackgroundRotateImage from "../components/ui/images/BackgroundRotateImage";
import PartilaSlidingImage from "../components/ui/images/PartialSlidingImage";
import RotateImage from "../components/ui/images/RotateImage";
import RotateImageWithText from "../components/ui/images/RotateImageWithText";
import ShrinkTextImage from "../components/ui/images/ShrinkTextImage";
import SlidingImage from "../components/ui/images/SlidingImage";
import SlidingTextImage from "../components/ui/images/SlidingTextImage";

const ImageExamplesPage = () => {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <RotateImageWithText src={TestImagePath}>
        <h3>RotateImage</h3>
      </RotateImageWithText>
      <SlidingTextImage src={TestImagePath}>
        <h3>SlidingTextImage</h3>
      </SlidingTextImage>
      <SlidingImage src={TestImagePath}>
        <h3>SlidingImage</h3>
      </SlidingImage>
      <PartilaSlidingImage src={TestImagePath}>
        <h3>PartialSlidingImage</h3>
      </PartilaSlidingImage>
      <AppearTextImage src={TestImagePath}>
        <h3>AppearTextImage</h3>
        <p style={{ backgroundColor: "lightcoral" }}>Test description</p>
      </AppearTextImage>
      <RotateImage src={TestImagePath}>
        <h3>RotateImage</h3>
        <p>Test description</p>
      </RotateImage>
      <BackgroundRotateImage src={TestImagePath}>
        <h3>BackgroundRotateImage</h3>
        <p>Test Description</p>
      </BackgroundRotateImage>
      <ShrinkTextImage src={TestImagePath}>
        <h3>ShrinkTextImage</h3>
        <p>Test Description</p>
      </ShrinkTextImage>
    </div>
  );
};

export default ImageExamplesPage;
