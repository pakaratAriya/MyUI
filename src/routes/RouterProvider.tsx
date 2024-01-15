import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../pages/Root";
import ExampleRouter from "./ExampleRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [ExampleRouter],
  },
]);

const ProjectRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default ProjectRouterProvider;
