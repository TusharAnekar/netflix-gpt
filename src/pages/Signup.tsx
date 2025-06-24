import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { signupSchema } from "../schemas/auth.schema";
import { signUpUser } from "../services/auth.service";

import type { z } from "zod";

type SignupFormInputs = z.infer<typeof signupSchema>;

const Signup = (): React.JSX.Element => {
  const [signupError, setSignupError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormInputs) => {
    const { email, password } = data;

    try {
      const user = await signUpUser(email, password);
      // eslint-disable-next-line no-console
      console.log("User signed up successfully:", user);
      // Redirect or show success message
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            setSignupError("This email is already in use.");
            break;
          default:
            setSignupError(
              "An error occurred during sign up. Please try again.",
            );
        }
      } else if (error instanceof Error) {
        setSignupError(error.message);
      }
    }
  };

  return (
    <div className="grid place-items-center h-[calc(100vh-102px)]">
      <div className="p-8 rounded-lg shadow-lg w-96 opacity-80 bg-black text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="fullName"
            >
              Full Name{""}
              <input
                autoComplete="name"
                className="w-full p-2 border border-gray-300 rounded"
                id="fullName"
                placeholder="Enter your full name"
                type="text"
                {...register("fullName")}
              />
            </label>
            {errors.fullName ? (
              <p className="text-red-600 text-xs mt-1">
                {errors.fullName.message}
              </p>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email{""}
              <input
                autoComplete="email"
                className="w-full p-2 border border-gray-300 rounded"
                id="email"
                placeholder="Enter your email"
                type="email"
                {...register("email")}
              />
            </label>
            {errors.email ? (
              <p className="text-red-600 text-xs mt-1">
                {errors.email.message}
              </p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password{""}
              <input
                autoComplete="new-password"
                className="w-full p-2 border border-gray-300 rounded"
                id="password"
                placeholder="Enter your password"
                type="password"
                {...register("password")}
              />
            </label>
            {errors.password ? (
              <p className="text-red-600 text-xs mt-1">
                {errors.password.message}
              </p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password{""}
              <input
                autoComplete="new-password"
                className="w-full p-2 border border-gray-300 rounded"
                id="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                {...register("confirmPassword")}
              />
            </label>
            {errors.confirmPassword ? (
              <p className="text-red-600 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            ) : null}
          </div>
          <button
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors cursor-pointer"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        {signupError ? (
          <p className="text-red-600 text-xs mt-4 text-center">{signupError}</p>
        ) : null}

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link className="text-red-600 hover:underline" to="/login">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
