import styled from "styled-components";
import { defaultMenuUnorderedListStyle } from "../constants/DefaultStyled";
import { PropsWithChildren, ReactElement } from "react";
import BasicMenuItem, { BasicMenuItemWithChildren } from "./BasicMenuItem";

export type BasicMenuItemType = PropsWithChildren<{ to: string }>;

export type BasicMenuType = {
  menuData: Array<BasicMenuItemType>;
};

export type BasicMenuClassNameType = {
  unorderedListClassName?: string;
  listClassName?: string;
  aClassName?: string;
  activeClassName?: string;
};

export type BasicMenuBarDataType = BasicMenuClassNameType & BasicMenuType;

export const BasicStyledMenuUnorderedList = styled.ul`
  padding: ${defaultMenuUnorderedListStyle.padding};
  margin: ${defaultMenuUnorderedListStyle.margin};
  display: ${defaultMenuUnorderedListStyle.display};
  flex-wrap: ${defaultMenuUnorderedListStyle.flexWrap};
  transition: all ${defaultMenuUnorderedListStyle.transitionDuration};
`;

const BasicMenuBar = (props: BasicMenuBarDataType) => {
  const {
    aClassName,
    activeClassName,
    listClassName,
    unorderedListClassName,
    menuData,
  } = props;
  return (
    <BasicStyledMenuUnorderedList className={unorderedListClassName}>
      {menuData.map((item, index) => (
        <BasicMenuItem
          key={`menubar-${index}-${item.children?.toString()}`}
          to={item.to}
          aClassName={aClassName}
          listClassName={listClassName}
          activeClassName={activeClassName}
        >
          {item.children}
        </BasicMenuItem>
      ))}
    </BasicStyledMenuUnorderedList>
  );
};

export default BasicMenuBar;
