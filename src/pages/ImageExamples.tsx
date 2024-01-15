import { TestImagePath } from "../components/ui/constants/DefaultStyled";
import AppearTextImage from "../components/ui/images/AppearTextImage";
import PartilaSlidingImage from "../components/ui/images/PartialSlidingImage";
import RotateImage from "../components/ui/images/RotateImage";
import SlidingImage from "../components/ui/images/SlidingImage";
import SlidingTextImage from "../components/ui/images/SlidingTextImage";

const ImageExamplesPage = () => {
  return (
    <>
      <RotateImage src={TestImagePath}>
        <h1>Hello</h1>
      </RotateImage>
      <SlidingTextImage src={TestImagePath}>
        <h1>Hello</h1>
      </SlidingTextImage>
      <SlidingImage src={TestImagePath}>
        <h1>Hello</h1>
      </SlidingImage>
      <PartilaSlidingImage src={TestImagePath}>
        <h1>Hello</h1>
      </PartilaSlidingImage>
      <AppearTextImage src={TestImagePath}>
        <h1>Hello</h1>
        <p style={{ backgroundColor: "lightcoral" }}>Test description</p>
      </AppearTextImage>
    </>
  );
};

export default ImageExamplesPage;
