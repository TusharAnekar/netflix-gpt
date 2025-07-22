import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "./components/AuthLayout";
import AuthRoute from "./components/AuthRoute";
import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Browse from "./pages/Browse";
import GptSearch from "./pages/GptSearch";
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
          element: (
            <AuthRoute>
              <Home />
            </AuthRoute>
          ),
        },
        {
          path: "login",
          element: (
            <AuthRoute>
              <Login />
            </AuthRoute>
          ),
        },
        {
          path: "signup",
          element: (
            <AuthRoute>
              <Signup />
            </AuthRoute>
          ),
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
          element: <GptSearch />, // Placeholder for GPT Search page
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
