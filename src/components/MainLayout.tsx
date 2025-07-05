import { Outlet } from "react-router-dom";

import Header from "./Header";
import { NETFLIX_BACKGROUND_IMAGE_URL } from "../constants/brand";

const MainLayout = (): React.JSX.Element => (
  <div
    className={`bg-[url(${NETFLIX_BACKGROUND_IMAGE_URL})] bg-cover bg-center min-h-screen`}
  >
    <Header />
    <Outlet />
  </div>
);

export default MainLayout;
