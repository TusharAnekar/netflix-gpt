import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Body = (): React.JSX.Element => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <p>Not Found</p>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "browse",
      element: <p className=" text-red-500">Browse</p>,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
