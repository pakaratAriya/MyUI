import { RouteObject, Outlet } from "react-router-dom";
import ButtonExamplesPage from "../pages/ButtonExamples";
import ImageExamplesPage from "../pages/ImageExamples";
import { CategoryDataType } from "./RouterDataType";
import MenuExamplesPage from "../pages/MenuExamples";

export const ExampleData: CategoryDataType = {
  category: "examples",
  allPagesData: [
    {
      id: "button",
      title: "Buttons",
      path: "button",
      page: <ButtonExamplesPage />,
    },
    {
      id: "image",
      title: "Images",
      path: "image",
      page: <ImageExamplesPage />,
    },
    {
      id: "menu",
      title: "Menu",
      path: "menu",
      page: <MenuExamplesPage />,
    },
  ],
};

const ExampleRouter: RouteObject = {
  path: ExampleData.category,
  element: <Outlet />,
  children: ExampleData.allPagesData.map((page) => ({
    path: page.path,
    element: page.page,
  })),
};

export default ExampleRouter;
