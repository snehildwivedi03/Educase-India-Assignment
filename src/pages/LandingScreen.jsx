import { Link } from "react-router-dom";

export default function LandingScreen() {
  return (
    // Fill the card and use mt-auto to push the block down
    <div className="flex-1 w-full flex flex-col">
      <div className="mt-auto">
        <h1 className="text-2xl font-bold text-[#1d2226] mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 text-base leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <Link
          to="/signup"
          className="block w-full py-3 px-4 rounded-lg bg-[#6c25ff] text-white text-center font-semibold mb-3 hover:bg-[#5a1ecf] transition"
        >
          Create Account
        </Link>

        <Link
          to="/login"
          className="block w-full py-3 px-4 rounded-lg bg-[#CEBAFB] text-black text-center font-semibold hover:bg-[#e0d7fa] transition"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}
