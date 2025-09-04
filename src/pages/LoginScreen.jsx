import { useState } from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="pt-10">
      <h1 className="text-2xl font-bold text-[#1d2226] mb-2">
        Sign in to your PopX account
      </h1>
      <p className="text-gray-500 text-base leading-relaxed mb-6">
        Enter your credentials to access your dashboard.
      </p>

      <form>
        {/*Email Input */}
        <div className="relative mb-6">
          <label
            htmlFor="email"
            className="absolute -top-2 left-3 bg-white text-xs px-1 text-[#6c25ff]"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-[#6c25ff]"
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <label
            htmlFor="password"
            className="absolute -top-2 left-3 bg-white text-xs px-1 text-[#6c25ff]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-[#6c25ff]"
          />
        </div>

        {/* Login Button */}
        <Link
          to={isFormValid ? "/profile" : "#"}
          className={`block w-full py-3 rounded-lg font-semibold text-center transition ${
            isFormValid
              ? "bg-[#6c25ff] text-white shadow-md hover:bg-[#5a1ecf]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Login
        </Link>
      </form>
    </div>
  );
};

export default LoginScreen;
