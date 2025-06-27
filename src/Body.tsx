import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useAppDispatch } from "./app/hooks";
import AuthLayout from "./components/AuthLayout";
import MainLayout from "./components/MainLayout";
import { auth } from "./lib/firebase";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { clearUser, setLoading, setUser } from "./store/slices/userSlice";

const Body = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

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
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "browse",
      element: <AuthLayout />,
      errorElement: <p>Not Found</p>,
      children: [
        {
          index: true,
          element: <Browse />,
        },
      ],
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setLoading(true));
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          setUser({ uid, email: email ?? "", displayName: displayName ?? "" }),
        );
      } else {
        dispatch(clearUser());
      }
    });
  }, [dispatch]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
