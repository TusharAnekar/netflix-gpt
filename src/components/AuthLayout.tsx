import { Outlet } from "react-router-dom";

import Header from "./Header";

const AuthLayout = (): React.JSX.Element => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default AuthLayout;
