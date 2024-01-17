import { convertToInMenuDataHelper } from "../components/ui/helpers/changeToInMenuHelper";
import { BasicMenuItemType } from "../components/ui/menus/BasicMenuBar";
import BgBorderMenu from "../components/ui/menus/BgBorderMenu";
import GrowingBorderMenu from "../components/ui/menus/GrowingBorderMenu";
import MovingBottomBorderMenu from "../components/ui/menus/MovingBottomBorderMenu";
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
  "GrowingBorderMenuData"
);

const BgBorderMenuData = convertToInMenuDataHelper(DUMMY_MENU, "BgBorderMenu");

const SplittedBgMenuData = convertToInMenuDataHelper(
  DUMMY_MENU,
  "SplittedBgMenu"
);

const MovingBottomBorderMenuData = convertToInMenuDataHelper(
  DUMMY_MENU,
  "MovingBottomBorderMenuData"
);

const MenuExamplesPage = () => {
  return (
    <>
      <GrowingBorderMenu menuData={GrowingBorderMenuData} />
      <BgBorderMenu menuData={BgBorderMenuData} />
      <SplittedBgMenu menuData={SplittedBgMenuData} spanDirection="center" />
      <MovingBottomBorderMenu menuData={MovingBottomBorderMenuData} />
    </>
  );
};

export default MenuExamplesPage;
