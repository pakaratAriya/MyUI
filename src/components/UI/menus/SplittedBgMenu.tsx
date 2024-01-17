import BasicMenuItem from "./BasicMenuItem";
import {
  BasicMenuBarDataType,
  BasicStyledMenuUnorderedList,
} from "./BasicMenuBar";
import classes from "./SplittedBgMenu.module.css";
import { AnimationDirectionType } from "../models/Image";

// TODO: Make a direction
const SplittedBgMenu = (
  props: BasicMenuBarDataType & {
    spanDirection?: AnimationDirectionType;
    reverseDirection?: boolean;
    backgroundColor?: string;
  }
) => {
  const {
    aClassName,
    activeClassName,
    listClassName,
    unorderedListClassName,
    menuData,
    spanDirection,
    reverseDirection,
    backgroundColor,
  } = props;
  let directionClass: string = classes.span;
  switch (spanDirection) {
    case "left":
      directionClass += ` ${classes.spanLeft}`;
      break;
    case "right":
      directionClass += ` ${classes.spanRight}`;
      break;
    case "up":
      directionClass += ` ${classes.spanUp}`;
      break;
    case "down":
      directionClass += ` ${classes.spanDown}`;
      break;
    case "center":
      directionClass += ` ${classes.spanCenter}`;
      break;
    default:
      directionClass += ` ${classes.spanLeft}`;
  }
  if (reverseDirection) {
    directionClass += ` ${classes.reverse}`;
  }
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
          <span
            className={directionClass}
            style={{ backgroundColor: backgroundColor }}
          ></span>
          <span
            className={directionClass}
            style={{ backgroundColor: backgroundColor }}
          ></span>
          <span
            className={directionClass}
            style={{ backgroundColor: backgroundColor }}
          ></span>
          <span
            className={directionClass}
            style={{ backgroundColor: backgroundColor }}
          ></span>
        </BasicMenuItem>
      ))}
    </BasicStyledMenuUnorderedList>
  );
};

export default SplittedBgMenu;
