import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { loginSchema } from "../schemas/auth.schema";
import { signInUser } from "../services/auth.service";

import type { z } from "zod";

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = (): React.JSX.Element => {
  const [signinError, setSigninError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    const { email, password } = data;

    try {
      await signInUser(email, password);
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-credential":
            setSigninError("Incorrect credential. Please try again.");
            break;
          case "auth/too-many-requests":
            setSigninError("Too many attempts. Please try again later.");
            break;
          default:
            setSigninError(
              "An error occurred during sign in. Please try again.",
            );
        }
      } else if (error instanceof Error) {
        setSigninError(error.message);
      }
    }
  };

  return (
    <div className="grid place-items-center h-[calc(100vh-102px)]">
      <div className=" p-8 rounded-lg shadow-lg w-96 opacity-80 bg-black text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email{""}
              <input
                autoComplete="email"
                className="w-full p-2 border border-gray-300 rounded"
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
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password{""}
              <input
                autoComplete="current-password"
                className="w-full p-2 border border-gray-300 rounded"
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
          <button
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors cursor-pointer"
            type="submit"
          >
            Sign In
          </button>
        </form>

        {signinError ? (
          <p className="text-red-600 text-sm mt-4">{signinError}</p>
        ) : null}

        <p className="text-sm text-center mt-4">
          New to Netflix?{" "}
          <Link className="text-red-600 hover:underline" to="/signup">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
