import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { useAppDispatch } from "../app/hooks";
import { auth } from "../lib/firebase";
import { clearUser, setLoading, setUser } from "../store/slices/userSlice";

const AuthProvider = (): null => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName: userDisplayName } = user;
        dispatch(
          setUser({
            uid,
            email: email ?? "",
            displayName: userDisplayName ?? "",
          }),
        );
      } else {
        dispatch(clearUser());
      }
      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null; // This component does not render anything
};

export default AuthProvider;
