import { Outlet } from "react-router-dom";

import Header from "./Header";
import { NETFLIX_BACKGROUND_IMAGE_URL } from "../constants/brand";

const MainLayout = (): React.JSX.Element => (
  <div
    className="bg-cover bg-center min-h-screen"
    style={{ backgroundImage: `url(${NETFLIX_BACKGROUND_IMAGE_URL})` }}
  >
    <Header />
    <Outlet />
  </div>
);

export default MainLayout;
