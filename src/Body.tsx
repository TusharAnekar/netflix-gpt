import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "./components/AuthLayout";
import MainLayout from "./components/MainLayout";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const Body = (): React.JSX.Element => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "browse",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Browse />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
