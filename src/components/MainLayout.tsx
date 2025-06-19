import { Outlet } from "react-router-dom";

import Header from "./Header";

const MainLayout = (): React.JSX.Element => (
  <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg)] bg-cover bg-center min-h-screen">
    <Header />
    <Outlet />
  </div>
);

export default MainLayout;
