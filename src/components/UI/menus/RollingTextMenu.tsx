import BasicMenuItem from "./BasicMenuItem";
import {
  BasicMenuBarDataType,
  BasicStyledMenuUnorderedList,
} from "./BasicMenuBar";
import classes from "./RollingTextMenu.module.css";
import { AnimationDirectionType } from "../models/Image";

// TODO: Make a direction
const RollingTextMenu = (
  props: BasicMenuBarDataType & {
    textDirection?: Omit<AnimationDirectionType, "center">;
    bgDirection?: Omit<AnimationDirectionType, "center">;
    backgroundColor?: string;
  }
) => {
  const {
    aClassName,
    activeClassName,
    listClassName,
    unorderedListClassName,
    menuData,
    textDirection,
    bgDirection,
    backgroundColor,
  } = props;
  let textDirectionClass: string = classes.span;
  switch (textDirection) {
    case "left":
      textDirectionClass += ` ${classes.spanLeft}`;
      break;
    case "right":
      textDirectionClass += ` ${classes.spanRight}`;
      break;
    case "up":
      textDirectionClass += ` ${classes.spanUp}`;
      break;
    case "down":
      textDirectionClass += ` ${classes.spanDown}`;
      break;
    default:
      textDirectionClass += ` ${classes.spanLeft}`;
  }
  let bgDirectionClass: string = classes.bg;
  switch (bgDirection) {
    case "left":
      bgDirectionClass += ` ${classes.bgLeft}`;
      break;
    case "right":
      bgDirectionClass += ` ${classes.bgRight}`;
      break;
    case "up":
      bgDirectionClass += ` ${classes.bgUp}`;
      break;
    case "down":
      bgDirectionClass += ` ${classes.bgDown}`;
      break;
    default:
      bgDirectionClass += ` ${classes.bgLeft}`;
  }

  return (
    <BasicStyledMenuUnorderedList
      className={`${classes.ul} ${unorderedListClassName}`}
    >
      {menuData.map((item, index) => (
        <BasicMenuItem
          key={`menubar-${index}-${item.children?.toString()}`}
          to={item.to}
          aClassName={`${classes.a} ${bgDirectionClass} ${aClassName}`}
          listClassName={`${classes.li} ${listClassName}`}
          activeClassName={`${classes.active} ${activeClassName}`}
        >
          <span
            data-content={item.children?.toString()}
            className={textDirectionClass}
          >
            {item.children}
          </span>
        </BasicMenuItem>
      ))}
    </BasicStyledMenuUnorderedList>
  );
};

export default RollingTextMenu;
