import { ReactNode } from "react";

export type RoutingPageDataType = {
  id: string;
  title: string;
  path: string;
  page: ReactNode;
};

export type CategoryDataType = {
  category: string;
  allPagesData: RoutingPageDataType[];
};
