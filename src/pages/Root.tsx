import { Outlet } from "react-router-dom";
import MainNavigation from "../components/pageComponents/mainNavigation/MainNavigation";
import BasicImage from "../components/ui/images/BasicImage";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
