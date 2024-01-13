import "./App.css";
import RotatingButton from "./components/UI/Buttons/RotatingButton";
import SwipeButton from "./components/UI/Buttons/SwipeButton";
import SeparateButton from "./components/UI/Buttons/SeparateButton";
import MirrorButton from "./components/UI/Buttons/MirrorButton";
import ScalingButton from "./components/UI/Buttons/ScalingButton";
import CircularSwappingButton from "./components/UI/Buttons/CircularSwappingButton";
import CalendarButton from "./components/UI/Buttons/CalendarButton";
import ThreeDotsButton from "./components/UI/Buttons/ThreeDotsButton";
import WindowButton from "./components/UI/Buttons/WindowButton";
import SplittedButton from "./components/UI/Buttons/SplittedButton";
import BorderSwappingButton from "./components/UI/Buttons/BorderSwappingButton";
import GrowingButton from "./components/UI/Buttons/GrowingButton";
import FirstLetterRotationButton from "./components/UI/Buttons/FirstLetterRotationButton";
import BorderGrowingButton from "./components/UI/Buttons/BorderGrowingButton";
import WavyButton from "./components/UI/Buttons/WavyButton";
import CutEffectButton from "./components/UI/Buttons/CutEffectButton";
import TwoPartsSkewButton from "./components/UI/Buttons/TwoPartsSkewButton";
import PulsingButton from "./components/UI/Buttons/PulsingButton";

function App() {
  return (
    <div>
      <RotatingButton style={{}} onClick={() => {}}>
        Test RotatingButton
      </RotatingButton>
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
    </div>
  );
}

export default App;
