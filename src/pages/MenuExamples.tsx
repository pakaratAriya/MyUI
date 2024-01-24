import { convertToInMenuDataHelper } from "../components/ui/helpers/changeToInMenuHelper";
import { BasicMenuItemType } from "../components/ui/menus/BasicMenuBar";
import Bg2BorderMenu from "../components/ui/menus/Bg2BorderMenu";
import BgBorderMenu from "../components/ui/menus/BgBorderMenu";
import BgTextMenu from "../components/ui/menus/BgTextMenu";
import BlurryMenu from "../components/ui/menus/BlurryMenu";
import BorderRotationMenu from "../components/ui/menus/BorderRotationMenu";
import BorderSniperMenu from "../components/ui/menus/BorderSniperMenu";
import ColorfulTextMenu from "../components/ui/menus/ColorfulTextMenu";
import GrowingBorderMenu from "../components/ui/menus/GrowingBorderMenu";
import MovingBottomBorderMenu from "../components/ui/menus/MovingBottomBorderMenu";
import RollingTextMenu from "../components/ui/menus/RollingTextMenu";
import SplittedBgMenu from "../components/ui/menus/SplittedBgMenu";

const DUMMY_MENU: Array<BasicMenuItemType> = [
  { children: "Home", to: "#1" },
  { children: "About", to: "#2" },
  { children: "Products", to: "#3" },
  { children: "Careers", to: "#4" },
  { children: "Contact", to: "#5" },
];

const GrowingBorderMenuData = convertToInMenuDataHelper(
  DUMMY_MENU,
  "GrowingBorderMenu"
);

const BgBorderMenuData = convertToInMenuDataHelper(DUMMY_MENU, "BgBorderMenu");

const SplittedBgMenuData = convertToInMenuDataHelper(
  DUMMY_MENU,
  "SplittedBgMenu"
);

const MovingBottomBorderMenuData = convertToInMenuDataHelper(
  DUMMY_MENU,
  "MovingBottomBorderMenu"
);

const BlurryMenuData = convertToInMenuDataHelper(DUMMY_MENU, "BlurryMenu");

const RollingTextMenuData = convertToInMenuDataHelper(
  DUMMY_MENU,
  "RollingTextMenu"
);

const Bg2BorderMenuData = convertToInMenuDataHelper(
  DUMMY_MENU,
  "Bg2BorderMenu"
);

const BorderSniperMenuData = convertToInMenuDataHelper(
  DUMMY_MENU,
  "BorderSniperMenu"
);

const BorderRotationMenuData = convertToInMenuDataHelper(
  DUMMY_MENU,
  "BorderRotationMenu"
);

const ColorfulTextMenuData = convertToInMenuDataHelper(
  DUMMY_MENU,
  "ColorfulTextMenu"
);

const BgTextMenuData = convertToInMenuDataHelper(DUMMY_MENU, "BgTextMenu");

const MenuExamplesPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <GrowingBorderMenu menuData={GrowingBorderMenuData} />
      <BgBorderMenu menuData={BgBorderMenuData} />
      <SplittedBgMenu menuData={SplittedBgMenuData} spanDirection="center" />
      <MovingBottomBorderMenu menuData={MovingBottomBorderMenuData} />
      <BlurryMenu menuData={BlurryMenuData} />
      <RollingTextMenu
        menuData={RollingTextMenuData}
        textDirection={"left"}
        bgDirection="down"
      />
      <Bg2BorderMenu menuData={Bg2BorderMenuData} />
      <BorderSniperMenu menuData={BorderSniperMenuData} />
      <BorderRotationMenu menuData={BorderRotationMenuData} />
      <ColorfulTextMenu menuData={ColorfulTextMenuData} />
      <BgTextMenu menuData={BgTextMenuData} />
    </div>
  );
};

export default MenuExamplesPage;
