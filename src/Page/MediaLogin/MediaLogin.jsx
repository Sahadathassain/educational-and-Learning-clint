import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { AuthContext } from "../../Providers/AuthProvider";

const MediaLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setErrorMessage("");

    signInWithGoogle().catch((error) => {
      console.error("Error signing in with Google:", error.message);
      setErrorMessage(`Error (${error.code}): ${error.message}`);
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
          <FiLoader size={18} className="animate-spin text-[#2563EB]" />
        ) : (
          <FaGoogle size={18} className="text-[#4285F4] transition-transform duration-200 group-hover:scale-110" />
        )}

        <span>{isLoading ? "Redirecting to Google..." : "Continue with Google"}</span>
      </button>

      {errorMessage && (
        <p className="mt-3 text-center text-xs font-medium text-red-600 break-words" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default MediaLogin;