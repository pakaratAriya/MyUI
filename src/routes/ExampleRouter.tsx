import { RouteObject, Outlet } from "react-router-dom";
import ButtonExamplesPage from "../pages/ButtonExamples";
import ImageExamplesPage from "../pages/ImageExamples";
import { CategoryDataType } from "./RouterDataType";

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
