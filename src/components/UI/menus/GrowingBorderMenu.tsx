import BasicMenuBar, { BasicMenuType } from "./BasicMenuBar";
import classes from "./GrowingBorderMenu.module.css";

const GrowingBorderMenu = (props: BasicMenuType) => {
  return (
    <BasicMenuBar
      name="GrowingBorderMenu"
      menuData={props.menuData}
      aClassName={classes.a}
      listClassName={classes.li}
      unorderedListClassName={classes.ul}
      activeClassName={classes.active}
    />
  );
};

export default GrowingBorderMenu;
