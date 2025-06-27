import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../lib/firebase";

import type { User } from "firebase/auth";

const updateUserProfile = async (fullName: string) => {
  if (!auth.currentUser) {
    throw new Error("No user is currently signed in.");
  }
  await updateProfile(auth.currentUser, {
    displayName: fullName,
    photoURL: "https://example.com/jane-q-user/profile.jpg",
  });
};

const signUpUser = async (
  email: string,
  password: string,
  fullName: string,
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  if (userCredential.user) {
    await updateUserProfile(fullName);
  }
  return userCredential.user;
};

const signInUser = async (email: string, password: string): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  return userCredential.user;
};

const signOutUser = async (): Promise<void> => {
  await auth.signOut();
};

export { signInUser, signOutUser, signUpUser };
