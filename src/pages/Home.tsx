import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const Home = (): React.JSX.Element => {
  const navigate = useNavigate();

  const getStartedSchema = z.object({
    email: z.string().email().min(1, { message: "Email is required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof getStartedSchema>>({
    resolver: zodResolver(getStartedSchema),
  });

  const onSubmit = (data: z.infer<typeof getStartedSchema>) => {
    const { email } = data;
    navigate("/signup", { state: { email } });
  };

  return (
    <section className="flex justify-center text-center items-center h-screen text-white">
      <div className="bg-black flex flex-col items-center p-10 opacity-70 rounded-2xl space-y-4">
        <h1 className="text-5xl font-bold max-w-xl">
          Unlimited movies, TV shows and more
        </h1>
        <p>Starts at ₹149. Cancel at any time.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form
          noValidate
          className="flex gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              className="border h-full rounded-lg p-2"
              placeholder="Enter your email"
              type="email"
              {...register("email")}
            />
            {errors.email ? (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            ) : null}
          </div>

          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-700 cursor-pointer rounded-lg"
            type="submit"
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};
export default Home;
