import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
// <Outlet />This is the place wheere the child routes will be rendered
function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
