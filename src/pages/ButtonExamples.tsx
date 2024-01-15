import RotatingButton from "../components/ui/buttons/RotatingButton";
import SwipeButton from "../components/ui/buttons/SwipeButton";
import SeparateButton from "../components/ui/buttons/SeparateButton";
import MirrorButton from "../components/ui/buttons/MirrorButton";
import ScalingButton from "../components/ui/buttons/ScalingButton";
import CircularSwappingButton from "../components/ui/buttons/CircularSwappingButton";
import CalendarButton from "../components/ui/buttons/CalendarButton";
import ThreeDotsButton from "../components/ui/buttons/ThreeDotsButton";
import WindowButton from "../components/ui/buttons/WindowButton";
import SplittedButton from "../components/ui/buttons/SplittedButton";
import BorderSwappingButton from "../components/ui/buttons/BorderSwappingButton";
import GrowingButton from "../components/ui/buttons/GrowingButton";
import FirstLetterRotationButton from "../components/ui/buttons/FirstLetterRotationButton";
import BorderGrowingButton from "../components/ui/buttons/BorderGrowingButton";
import WavyButton from "../components/ui/buttons/WavyButton";
import CutEffectButton from "../components/ui/buttons/CutEffectButton";
import TwoPartsSkewButton from "../components/ui/buttons/TwoPartsSkewButton";
import PulsingButton from "../components/ui/buttons/PulsingButton";
import DiagnalSwipeButtonButton from "../components/ui/buttons/DiagnalSwipeButton";
import TargetButton from "../components/ui/buttons/TargetButton";
import CSS from "csstype";

const ButtonExamplesPage = () => {
  const testStyle: CSS.Properties = {
    color: "rgba(1,1,1,0.5)",
    backgroundColor: "rgba(0.5,0.5,0.5,0.5)",
    border: "rgba(128,128,128,0.8)",
    fontFamily: "cursive",
  };

  return (
    <>
      <RotatingButton onClick={() => {}}>Test RotatingButton</RotatingButton>
      <SwipeButton onClick={() => {}}>Test Swipe Button</SwipeButton>
      <SeparateButton onClick={() => {}}>Test Separate Button</SeparateButton>
      <MirrorButton onClick={() => {}}>Test Mirror Button</MirrorButton>
      <ScalingButton onClick={() => {}}>Scaling Button</ScalingButton>
      <CircularSwappingButton onClick={() => {}}>
        Circular Swapping Button
      </CircularSwappingButton>
      <CalendarButton onClick={() => {}}>Calendar Button</CalendarButton>
      <ThreeDotsButton onClick={() => {}}>ThreeDots Button</ThreeDotsButton>
      <WindowButton onClick={() => {}}>WindowButton</WindowButton>
      <SplittedButton onClick={() => {}}>SplittedButton</SplittedButton>
      <BorderSwappingButton onClick={() => {}}>
        BorderSwapping
      </BorderSwappingButton>
      <GrowingButton onClick={() => {}}>GrowingButton</GrowingButton>
      <FirstLetterRotationButton onClick={() => {}}>
        FirstLButton
      </FirstLetterRotationButton>
      <BorderGrowingButton onClick={() => {}}>
        BorderGrowingButton
      </BorderGrowingButton>
      <WavyButton onClick={() => {}}>Wavy Button</WavyButton>
      <CutEffectButton onClick={() => {}}>Cut Effect Button</CutEffectButton>
      <TwoPartsSkewButton onClick={() => {}}>
        TwoPartsSkewButton
      </TwoPartsSkewButton>
      <PulsingButton onClick={() => {}}>PulsingButton</PulsingButton>
      <DiagnalSwipeButtonButton onClick={() => {}}>
        DiagnalButton
      </DiagnalSwipeButtonButton>
      <TargetButton onClick={() => {}}>TargetButton</TargetButton>
    </>
  );
};

export default ButtonExamplesPage;
