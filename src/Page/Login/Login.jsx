import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiBookOpen,
  FiShield,
} from "react-icons/fi";

import MediaLogin from "../MediaLogin/MediaLogin";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage("");
    setIsLoading(true);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;

        console.log(loggedUser);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);

        setErrorMessage(
          "Incorrect email or password. Please check your details and try again."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8FAFC]">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#F97316]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_20px_60px_rgba(30,58,138,0.10)] lg:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative hidden overflow-hidden bg-[#1E3A8A] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-12">

            {/* Decorative circles */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full border border-white/10" />

            <div className="relative z-10">
              {/* Brand */}
              <Link
                to="/"
                className="inline-flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#2563EB] shadow-lg">
                  <FiBookOpen size={22} />
                </div>

                <div>
                  <p className="text-lg font-bold tracking-tight">
                    Educational
                  </p>
                  <p className="-mt-1 text-sm text-blue-200">
                    & Learning
                  </p>
                </div>
              </Link>

              {/* Main message */}
              <div className="mt-20 max-w-md">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-100">
                  Welcome Back
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight xl:text-5xl">
                  Continue your
                  <span className="block text-blue-200">
                    learning journey.
                  </span>
                </h1>

                <p className="mt-6 max-w-sm text-base leading-7 text-blue-100">
                  Sign in to access your learning resources, explore
                  educational products, and continue discovering something
                  new.
                </p>
              </div>
            </div>

            {/* Bottom Trust Point */}
            <div className="relative z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <FiShield size={19} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Secure sign in
                </p>
                <p className="text-xs text-blue-200">
                  Your account information stays protected.
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">

            {/* Mobile Brand */}
            <div className="mb-8 flex justify-center lg:hidden">
              <Link
                to="/"
                className="inline-flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB] text-white shadow-md">
                  <FiBookOpen size={22} />
                </div>

                <div className="text-left">
                  <p className="text-lg font-bold text-[#172033]">
                    Educational
                  </p>
                  <p className="-mt-1 text-sm text-[#64748B]">
                    & Learning
                  </p>
                </div>
              </Link>
            </div>

            {/* Heading */}
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
                Account Access
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#172033] sm:text-4xl">
                Welcome back
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                Enter your details below to access your account.
              </p>
            </div>

            {/* Error */}
            {errorMessage && (
              <div
                className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4"
                role="alert"
              >
                <p className="text-sm font-medium leading-6 text-red-700">
                  {errorMessage}
                </p>
              </div>
            )}

            {/* Login Form */}
            <form
              onSubmit={handleLogin}
              className="mt-8 space-y-5"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#172033]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#172033] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-[#172033]"
                  >
                    Password
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 pr-12 text-sm text-[#172033] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setPasswordVisible((prev) => !prev)
                    }
                    aria-label={
                      passwordVisible
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#64748B] transition hover:bg-[#E2E8F0] hover:text-[#2563EB]"
                  >
                    {passwordVisible ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <FiEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2563EB]/20 transition duration-200 hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/25 focus:outline-none focus:ring-4 focus:ring-[#2563EB]/20 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <FiArrowRight
                      size={17}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#E2E8F0]" />
              <span className="text-xs font-medium text-[#94A3B8]">
                OR CONTINUE WITH
              </span>
              <div className="h-px flex-1 bg-[#E2E8F0]" />
            </div>

            {/* Google / Social Login */}
            <div className="flex justify-center">
              <MediaLogin />
            </div>

            {/* Register */}
            <div className="mt-8 rounded-xl bg-[#F8FAFC] px-4 py-4 text-center">
              <p className="text-sm text-[#64748B]">
                Don&apos;t have an account?
                <Link
                  to="/register"
                  className="ml-1.5 font-bold text-[#2563EB] transition hover:text-[#1E3A8A] hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;