import BasicMenuItem from "./BasicMenuItem";
import {
  BasicMenuBarDataType,
  BasicStyledMenuUnorderedList,
} from "./BasicMenuBar";
import classes from "./BgTextMenu.module.css";

const defaultSize = "30px";
const defaultWeight = "900";
const defaultColors = ["#FF8CB6", "#8CF5FF", "#FE924B", "#69C18E", "#DD7BFF"];
const BgTextMenu = (
  props: BasicMenuBarDataType & {
    firstColor?: string;
    secondColor?: string;
    colors?: string[];
  }
) => {
  const {
    aClassName,
    activeClassName,
    listClassName,
    unorderedListClassName,
    menuData,
    colors,
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
          attributes={{
            "--color": colors
              ? colors[index % colors.length]
              : defaultColors[index % defaultColors.length],
            "--background-color": colors
              ? colors[index % colors.length] + "80"
              : defaultColors[index % defaultColors.length] + "80",
            "--text-data": `"${item.children?.toString()}"`,
          }}
        >
          {item.children}
        </BasicMenuItem>
      ))}
    </BasicStyledMenuUnorderedList>
  );
};

export default BgTextMenu;
