import { BasicMenuItemType } from "../menus/BasicMenuBar";

export const convertToInMenuDataHelper = (
  menuData: BasicMenuItemType[],
  name: string
): BasicMenuItemType[] => {
  const convertedToMenuData: BasicMenuItemType[] = menuData.map((data) => ({
    children: data.children,
    to: `${data.to}-${name}`,
  }));
  return convertedToMenuData;
};
