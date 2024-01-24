import BasicMenuItem from "./BasicMenuItem";
import {
  BasicMenuBarDataType,
  BasicStyledMenuUnorderedList,
} from "./BasicMenuBar";
import classes from "./BorderSniperMenu.module.css";

// TODO: Make a direction
const BorderSniperMenu = (props: BasicMenuBarDataType) => {
  const {
    aClassName,
    activeClassName,
    listClassName,
    unorderedListClassName,
    menuData,
  } = props;

  return (
    <BasicStyledMenuUnorderedList
      className={`${classes.ul} ${unorderedListClassName}`}
    >
      {menuData.map((item, index) => (
        <BasicMenuItem
          key={`menubar-${index}-${item.children?.toString()}`}
          to={item.to}
          aClassName={`${classes.a} ${aClassName}`}
          listClassName={`${classes.li} ${listClassName}`}
          activeClassName={`${classes.active} ${activeClassName}`}
        >
          {item.children}
          <span className={classes.span}></span>
          <span className={classes.span}></span>
        </BasicMenuItem>
      ))}
    </BasicStyledMenuUnorderedList>
  );
};

export default BorderSniperMenu;
