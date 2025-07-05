import React, { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { NETFLIX_LOGO_URL } from "../constants/brand";
import { auth } from "../lib/firebase";
import { signOutUser } from "../services/auth.service";
import { clearUser, setLoading, setUser } from "../store/slices/userSlice";

const Header = (): React.JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setLoading(true));
      if (user) {
        const { uid, email, displayName: userDisplayName } = user;
        dispatch(
          setUser({
            uid,
            email: email ?? "",
            displayName: userDisplayName ?? "",
          }),
        );
        navigate("/browse");
      } else {
        dispatch(clearUser());
        navigate("/login");
      }
    });

    return () => {
      unsubscribe();
      dispatch(setLoading(false));
    };
  }, [dispatch, navigate]);

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
