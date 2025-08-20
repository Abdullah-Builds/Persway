import React, { useState } from "react";
import { X } from "lucide-react";
import { OAUTH_PROVIDERS, OAuth } from "../../../backend/Authentication/appwrite";
import { CheckRegistration , findByEmail} from '../../../backend/Database/database';
import type { OAuthProvider } from "appwrite";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "signup";
  onSwitchMode: (mode: "login" | "signup") => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  mode,
  onSwitchMode,
}) => {


  if (!isOpen) return null;

  const handleOAuthLogin = async (provider: OAuthProvider) => {
    try {

      const response = await OAuth({ provider });
      return response;
    } catch (err) {
      console.error("OAuth failed:", err);
      throw err;
    }
  };

  //===========
  const [email, setEmail] = useState('');

  //========
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-slide-up max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>


        {/* Title */}
        <div className="text-center mb-6">

          <h2 className="text-3xl font-bold text-gray-900 mb-1">
            {mode === "login" ? "Welcome Back" : "Join Persway"}
          </h2>
          <p className="text-gray-600 text-sm">
            {mode === "login"
              ? "Sign in using your preferred service"
              : "Create your account using OAuth"}
          </p>
        </div>

        {/* OAuth Buttons */}
        <div>
          <div className="mb-10"> <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
            By signing in or creating an account, you acknowledge that you have read and understood our
            <a href="https://policies.google.com/terms" className="text-blue-600 hover:underline">&nbsp; Terms of Service &nbsp;</a>
            and
            <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">&nbsp; Privacy Policy &nbsp;</a>,
            and you agree to be bound by them.
            You also consent to the collection, use, and storage of your personal information
            as described in the Privacy Policy, including the use of cookies and similar technologies
            for authentication, analytics, personalization, and marketing purposes.
          </p></div>

          {mode === "login" && (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              />

              {/* Sign In button */}
              <button className="w-full px-4 py-2  bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-0 hover:opacity-90 transition"
              onClick={async ()=>{
                const response = await findByEmail(email)
                if(!response || response.length == 0 ) alert("User Not Registered")
                else onClose()
              }}>
               Sign in
              </button>

              <div className="mt-4 flex items-center w-full gap-2 mb-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 text-sm font-medium">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
            </>
          )}

        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
            maxWidth: "320px",
            margin: "0 auto",
          }}
        >
          {/* Google Button */}
          <button
            aria-label="Sign in with Google"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              backgroundColor: "#fff",
              border: "1px solid #dadce0",
              color: "#3c4043",
              padding: "0.65rem 1rem",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "1.5",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f7f8f8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#fff")
            }
            onClick={() => {
              handleOAuthLogin(OAUTH_PROVIDERS.GOOGLE)
              if (mode == "login") {
                CheckRegistration();
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 533.5 544.3"
              style={{ width: "1.2em", height: "1.2em", flexShrink: 0 }}
            >
              <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.3H272v95.1h146.9c-6.4 34.6-25.5 63.9-54.4 83.4v68h87.7c51.3-47.3 81.3-116.9 81.3-196.2z" />
              <path fill="#34A853" d="M272 544.3c73.8 0 135.7-24.5 180.9-66.5l-87.7-68c-24.4 16.4-55.6 26-93.2 26-71.6 0-132.2-48.3-153.9-113.3H26.2v71.2c45.1 89 137.9 150.6 245.8 150.6z" />
              <path fill="#FBBC05" d="M118.1 322.5c-10.6-31.4-10.6-65.6 0-97l-71.9-71.2c-31.5 61.6-31.5 134.9 0 196.5l71.9-71.2z" />
              <path fill="#EA4335" d="M272 107.7c39.8 0 75.6 13.7 103.8 40.5l77.8-77.8C407.5 24.5 345.8 0 272 0 164.1 0 71.3 61.6 26.2 150.6l71.9 71.2C139.8 156 200.4 107.7 272 107.7z" />
            </svg>
            <span style={{ whiteSpace: "nowrap" }}>Continue with Google</span>

          </button>

          {/* GitHub Button */}
          <button
            aria-label="Sign in with GitHub"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              backgroundColor: "#24292f",
              color: "#ffffff",
              padding: "0.65rem 1rem",
              borderRadius: "4px",
              cursor: "pointer",
              border: "none",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "1.5",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2f363d")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#24292f")}
            onClick={() => {
              handleOAuthLogin(OAUTH_PROVIDERS.GITHUB)
              if (mode == "login") {
                CheckRegistration();
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              style={{ width: "1.2em", height: "1.2em", fill: "#fff", flexShrink: 0 }}
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
            3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61
            -4.042-1.61C4.422 17.07 3.633 16.7 3.633 
            16.7c-1.087-.744.084-.729.084-.729 1.205.084 
            1.84 1.236 1.84 1.236 1.07 1.835 2.809 
            1.305 3.495.998.108-.775.418-1.305.762-1.605
            -2.665-.3-5.466-1.334-5.466-5.93 0-1.31.468
            -2.38 1.235-3.22-.135-.303-.54-1.523.105
            -3.176 0 0 1.005-.322 3.3 1.23a11.5 
            11.5 0 0 1 3-.404c1.02.005 2.045.138 
            3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 
            1.653.24 2.873.12 3.176.765.84 1.23 1.91 
            1.23 3.22 0 4.61-2.805 5.625-5.475 
            5.92.43.37.81 1.096.81 2.21 0 1.595-.015 
            2.88-.015 3.27 0 .315.21.69.825.57C20.565 
            22.092 24 17.592 24 12.297c0-6.627-5.373
            -12-12-12" />
            </svg>
            <span style={{ whiteSpace: "nowrap" }}>Continue with GitHub</span>

          </button>

          {/* Appwrite Branding with SVG */}
          <div
            style={{
              marginTop: "12px",
              fontSize: "12px",
              color: "#555",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <span>Powered and Secured by</span>
            {/* Inline SVG from Simple Icons (white on transparent) */}
            <svg
              viewBox="0 0 24 24"
              aria-label="Appwrite"
              role="img"
              width={18}
              height={18}
              fill="#FD366E"
            >
              <path d="M7.834 4C4.094 4.09.584 6.816.06 11.014a7.993 7.994 0 0 0 3.122 7.368c2.757 2.08 6.198 2.047 8.82.538a7.993 7.993 0 1 0-.005-13.834A7.84 7.84 0 0 0 7.831 4zm.122 1.485a6.525 6.526 0 0 1 6.484 5.537c0 .007.002.013.003.02.02.143.037.287.048.433l.006.054c.01.15.016.303.017.456 0 .084-.005.168-.008.252-.002.058-.003.117-.007.175a6.68 6.68 0 0 1-.03.335l-.01.08c-.015.12-.033.24-.055.358l-.01.048c-.022.124-.05.248-.08.37l-.006.025a6.578 6.58 0 0 1-.41 1.15c-.007.016-.017.033-.024.05a6.538 6.54 0 0 1-1.62 2.115l-.054.046c-.08.067-.162.13-.245.194-.055.042-.11.084-.168.125-.04.03-.08.056-.122.084a6.68 6.68 0 0 1-1.123.612 6.517 6.518 0 0 1-6.468-.8C.069 14.184.838 7.96 5.457 6.004a6.512 6.513 0 0 1 2.499-.518zm.61 3.72c-.183 0-.343.013-.352.032-.01.024-.132.504-.264 1.074-.136.57-.353 1.468-.475 2-.235.974-.377 1.613-.377 1.698 0 .023.146.042.325.042h.325l.146-.65.423-1.796c.15-.635.334-1.408.405-1.72.07-.31.14-.591.155-.624.014-.043-.066-.057-.31-.057zm-2.441 1.6-.438.47-.433.47.127.15c.07.086.264.298.428.472l.302.32h.856l-.405-.438c-.221-.235-.405-.46-.405-.49 0-.032.17-.243.377-.47.207-.23.376-.428.376-.45 0-.02-.178-.034-.395-.034zm3.27 0c-.231 0-.415.014-.415.028s.08.103.18.202c.366.367.624.678.61.74-.009.032-.188.253-.405.484l-.39.428h.437l.438-.005.4-.438c.22-.244.4-.46.4-.49 0-.023-.188-.244-.424-.493l-.423-.457z" />
            </svg>

            <span>Appwrite</span>
          </div>
        </div>
        {/* Switch mode */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {mode === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              onClick={() => onSwitchMode(mode === "login" ? "signup" : "login")}
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );

};
