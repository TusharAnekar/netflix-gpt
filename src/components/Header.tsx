import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { useAppSelector } from "../app/hooks";
import { NETFLIX_LOGO_URL } from "../constants/brand";
import { signOutUser } from "../services/auth.service";

const Header = (): React.JSX.Element => {
  const navigate = useNavigate();

  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const displayName = useAppSelector((state) => state.user.displayName);

  const handleLogout = async () => {
    try {
      await signOutUser();
    } catch (error) {
      navigate("/error", { state: { error } });
    }
  };

  return (
    <header className="flex items-center justify-between p-4 opacity-80 bg-black">
      <Link to="/">
        <img alt="Netflix" className="h-18 w-auto" src={NETFLIX_LOGO_URL} />
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
                  <Link className="text-white" to="/gpt-search">
                    GPT Search
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
