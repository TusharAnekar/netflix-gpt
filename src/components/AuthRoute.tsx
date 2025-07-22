import React from "react";

import { Navigate } from "react-router-dom";

import { useAppSelector } from "../app/hooks";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute = ({ children }: AuthRouteProps): React.ReactElement => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const isLoading = useAppSelector((state) => state.user.isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isAuthenticated) {
    return <Navigate replace to="/browse" />;
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthRoute;
