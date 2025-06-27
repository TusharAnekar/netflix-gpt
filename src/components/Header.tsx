import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { useAppSelector } from "../app/hooks";
import { signOutUser } from "../services/auth.service";

const Header = (): React.JSX.Element => {
  const navigate = useNavigate();

  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const displayName = useAppSelector((state) => state.user.displayName);

  const handleLogout = async () => {
    try {
      await signOutUser();
      navigate("/login");
    } catch (error) {
      navigate("/error", { state: { error } });
    }
  };

  return (
    <header className="flex items-center justify-between p-4 opacity-80 bg-black">
      <Link to="/">
        <img
          alt="Netflix"
          className="h-18 w-auto"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </Link>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <nav>
          <ul className="flex items-center gap-4">
            {isAuthenticated ? (
              <React.Fragment>
                <li>
                  <Link className="text-white" to="/browse">
                    Browse
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to="/profile">
                    Profile
                  </Link>
                </li>

                <button
                  className="text-white cursor-pointer"
                  onClick={handleLogout}
                  type="button"
                >
                  Logout {displayName}
                </button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li>
                  <Link className="text-white" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
