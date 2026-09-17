import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Providers/AuthProvider";

const MediaLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleSignIn = () => {
    // Call signInWithGoogle immediately without prior synchronous state drops
    setIsLoading(true);
    setErrorMessage("");

    signInWithGoogle()
      .then(() => {
        console.log("Signed in with Google successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
        setErrorMessage("Google sign-in failed. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className="group flex w-full items-center justify-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3.5 text-sm font-semibold text-[#172033] shadow-sm transition-all duration-200 hover:border-[#CBD5E1] hover:bg-[#F8FAFC] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading ? (
          <FiLoader
            size={18}
            className="animate-spin text-[#2563EB]"
          />
        ) : (
          <FaGoogle
            size={18}
            className="text-[#4285F4] transition-transform duration-200 group-hover:scale-110"
          />
        )}

        <span>
          {isLoading
            ? "Connecting to Google..."
            : "Continue with Google"}
        </span>
      </button>

      {errorMessage && (
        <p
          className="mt-3 text-center text-xs font-medium text-red-600"
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default MediaLogin;