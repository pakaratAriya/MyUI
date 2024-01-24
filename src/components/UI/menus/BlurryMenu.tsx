import BasicMenuBar, { BasicMenuBarDataType } from "./BasicMenuBar";
import classes from "./BlurryMenu.module.css";

const BlurryMenu = (props: BasicMenuBarDataType) => {
  const {
    menuData,
    aClassName,
    activeClassName,
    listClassName,
    unorderedListClassName,
  } = props;
  return (
    <BasicMenuBar
      menuData={menuData}
      aClassName={`${classes.a} ${aClassName}`}
      listClassName={`${classes.li} ${listClassName}`}
      unorderedListClassName={`${classes.ul} ${unorderedListClassName}`}
      activeClassName={`${classes.active} ${activeClassName}`}
    />
  );
};

export default BlurryMenu;
