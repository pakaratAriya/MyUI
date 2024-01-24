import BasicMenuItem from "./BasicMenuItem";
import {
  BasicMenuBarDataType,
  BasicStyledMenuUnorderedList,
} from "./BasicMenuBar";
import classes from "./ColorfulTextMenu.module.css";
import styled from "styled-components";

const defaultSize = "30px";
const defaultWeight = "900";

const ColorfulTextMenu = (
  props: BasicMenuBarDataType & {
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fontSize?: string;
    fontWeight?: string;
  }
) => {
  const {
    aClassName,
    activeClassName,
    listClassName,
    unorderedListClassName,
    menuData,
    firstColor,
    secondColor,
    thirdColor,
    fontSize,
    fontWeight,
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
            "--text-test": `"${item.children?.toString()}"`,
            "--first-color": firstColor ?? "white",
            "--second-color": secondColor ?? "cyan",
            "--third-color": thirdColor ?? "red",
            "--font-size": fontSize ?? defaultSize,
            "--font-weight": fontWeight ?? defaultWeight,
            fontSize: fontSize ?? defaultSize,
            fontWeight: fontWeight ?? defaultWeight,
            padding: 0,
            color: "transparent",
          }}
        >
          {item.children}
        </BasicMenuItem>
      ))}
    </BasicStyledMenuUnorderedList>
  );
};

export default ColorfulTextMenu;
