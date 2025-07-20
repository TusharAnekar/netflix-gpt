import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "./components/AuthLayout";
import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
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
          element: (
            <ProtectedRoute>
              <Browse />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "gpt-search",
      element: (
        <ProtectedRoute>
          <AuthLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <div>GPT Search Page</div>, // Placeholder for GPT Search page
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
