import { ReactNode } from "react";
import styled from "styled-components";
import {
  defaultMenuAnchorStyle,
  defaultMenuListItemStyle,
} from "../constants/DefaultStyled";
import { NavLink as NavLinkBased, useLocation } from "react-router-dom";

export type BasicMenuItemWithChildren = {
  children: ReactNode | undefined;
  to: string;
  listClassName?: string;
  aClassName?: string;
  activeClassName?: string;
  attributes?: any;
};

export const BasicStyledMenuItemList = styled.li`
  list-style: ${defaultMenuListItemStyle.listStyle};
  transition: all ${defaultMenuListItemStyle.transitionDuration};
  &:before {
    transition: all ${defaultMenuListItemStyle.transitionDuration};
  }
  &:after {
    transition: all ${defaultMenuListItemStyle.transitionDuration};
  }
`;

export const BasicStyledMenuAnchor = styled(NavLinkBased)<{
  isActive: boolean;
}>`
  text-decoration: ${defaultMenuAnchorStyle.textDecoration};
  color: ${defaultMenuAnchorStyle.color};
  font-size: ${defaultMenuAnchorStyle.fontSize};
  display: ${defaultMenuAnchorStyle.display};
  padding: ${defaultMenuAnchorStyle.padding};
  position: ${defaultMenuAnchorStyle.position};
  transition: all ${defaultMenuAnchorStyle.transitionDuration};
  margin: ${defaultMenuAnchorStyle.margin};
  font-weight: ${(props) => (props.isActive ? "600" : "100")};
  &:before,
  &:after {
    transition: all ${defaultMenuAnchorStyle.transitionDuration};
  }
`;

export const BasicStyledMenuSpan = styled.span`
  transition: all ${defaultMenuListItemStyle.transitionDuration};
  &:before {
    transition: all ${defaultMenuListItemStyle.transitionDuration};
  }
  &:after {
    transition: all ${defaultMenuListItemStyle.transitionDuration};
  }
`;

const BasicMenuItem = (props: BasicMenuItemWithChildren) => {
  const { to, listClassName, aClassName, activeClassName, attributes } = props;
  const { hash } = useLocation();
  const isActive = hash.includes(to);
  return (
    <BasicStyledMenuItemList className={listClassName}>
      <BasicStyledMenuAnchor
        to={to}
        className={isActive ? `${aClassName} ${activeClassName}` : aClassName}
        isActive={isActive}
        style={{ ...attributes }}
      >
        {props.children}
      </BasicStyledMenuAnchor>
    </BasicStyledMenuItemList>
  );
};

export default BasicMenuItem;
