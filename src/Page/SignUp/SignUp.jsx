import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiBookOpen,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

import MediaLogin from "../MediaLogin/MediaLogin";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    setPasswordError("");
    setIsRegistered(false);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    setIsLoading(true);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        // Preserve existing behavior
        createdUser.photoURL = photo;
        createdUser.displayName = name;

        return updateUser(name, photo);
      })
      .then(() => {
        console.log("User updated Successfully");

        setIsRegistered(true);
        setPasswordError("");
      })
      .catch((error) => {
        console.error(error);

        setIsRegistered(false);
        setPasswordError(error.message);
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

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_20px_60px_rgba(30,58,138,0.10)] lg:grid-cols-2">

          {/* ==================================================
              LEFT SIDE
          ================================================== */}
          <div className="relative hidden overflow-hidden bg-[#1E3A8A] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-12">

            {/* Decorative Shapes */}
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

              {/* Content */}
              <div className="mt-20 max-w-md">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-100">
                  Start Learning
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight xl:text-5xl">
                  Create your
                  <span className="block text-blue-200">
                    learning account.
                  </span>
                </h1>

                <p className="mt-6 max-w-sm text-base leading-7 text-blue-100">
                  Join our learning community and explore educational
                  resources designed to make learning more engaging,
                  accessible, and enjoyable.
                </p>

                {/* Benefits */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <FiCheckCircle size={16} />
                    </div>

                    <span className="text-sm text-blue-100">
                      Explore educational resources
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <FiCheckCircle size={16} />
                    </div>

                    <span className="text-sm text-blue-100">
                      Discover learning products
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <FiCheckCircle size={16} />
                    </div>

                    <span className="text-sm text-blue-100">
                      Learn at your own pace
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="relative z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <FiShield size={19} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Secure account
                </p>

                <p className="text-xs text-blue-200">
                  Your information is kept protected.
                </p>
              </div>
            </div>
          </div>

          {/* ==================================================
              RIGHT SIDE
          ================================================== */}
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
                Create Account
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#172033] sm:text-4xl">
                Join us today
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                Create your account and start exploring.
              </p>
            </div>

            {/* Error Message */}
            {passwordError && (
              <div
                className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4"
                role="alert"
              >
                <p className="text-sm font-medium leading-6 text-red-700">
                  {passwordError}
                </p>
              </div>
            )}

            {/* Success Message */}
            {isRegistered && (
              <div
                className="mt-6 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4"
                role="status"
              >
                <FiCheckCircle
                  className="mt-0.5 shrink-0 text-[#2563EB]"
                  size={18}
                />

                <div>
                  <p className="text-sm font-semibold text-[#1E3A8A]">
                    Registration successful!
                  </p>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Your account has been created successfully.
                  </p>
                </div>
              </div>
            )}

            {/* Registration Form */}
            <form
              onSubmit={handleRegister}
              className="mt-8 space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#172033]"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#172033] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                  required
                />
              </div>

              {/* Photo URL */}
              <div>
                <label
                  htmlFor="photo"
                  className="mb-2 block text-sm font-semibold text-[#172033]"
                >
                  Profile photo URL
                </label>

                <input
                  id="photo"
                  type="url"
                  name="photo"
                  placeholder="https://example.com/photo.jpg"
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#172033] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                  required
                />
              </div>

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
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#172033]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 pr-12 text-sm text-[#172033] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#64748B] transition hover:bg-[#E2E8F0] hover:text-[#2563EB]"
                  >
                    {showPassword ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <FiEye size={18} />
                    )}
                  </button>
                </div>

                <p className="mt-2 text-xs leading-5 text-[#94A3B8]">
                  Minimum 6 characters with uppercase, lowercase,
                  and a number.
                </p>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2563EB]/20 transition duration-200 hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/25 focus:outline-none focus:ring-4 focus:ring-[#2563EB]/20 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
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

            {/* Social Login */}
            <div className="flex justify-center">
              <MediaLogin />
            </div>

            {/* Login */}
            <div className="mt-8 rounded-xl bg-[#F8FAFC] px-4 py-4 text-center">
              <p className="text-sm text-[#64748B]">
                Already have an account?

                <Link
                  to="/login"
                  className="ml-1.5 font-bold text-[#2563EB] transition hover:text-[#1E3A8A] hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;