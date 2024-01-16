import { BasicMenuItemType } from "../components/ui/menus/BasicMenuBar";
import BasicMenuItem from "../components/ui/menus/BasicMenuItem";
import GrowingBorderMenu from "../components/ui/menus/GrowingBorderMenu";

const DUMMY_MENU: Array<BasicMenuItemType> = [
  { children: "Home", to: "#1" },
  { children: "About", to: "#2" },
  { children: "Products", to: "#3" },
  { children: "Careers", to: "#4" },
  { children: "Contact", to: "#5" },
];

const MenuExamplesPage = () => {
  return (
    <>
      <GrowingBorderMenu menuData={DUMMY_MENU} />
      <GrowingBorderMenu menuData={DUMMY_MENU} />
    </>
  );
};

export default MenuExamplesPage;
