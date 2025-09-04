import { Link } from "react-router-dom";

const SignupScreen = () => {
  const fields = [
    { id: "fullName", label: "Full Name*", type: "text" },
    { id: "phone", label: "Phone number*", type: "tel" },
    { id: "email", label: "Email address*", type: "email" },
    { id: "password", label: "Password*", type: "password" },
    { id: "company", label: "Company name", type: "text" },
  ];

  return (
    <div className="w-[360px] mx-auto pt-10">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-[#1d2226] leading-tight mb-6">
        Create your
        <br />
        <span>PopX account</span>
      </h1>

      {/* Form */}
      <form>
        {fields.map((field) => (
          <div key={field.id} className="relative mb-6">
            <label
              htmlFor={field.id}
              className="absolute -top-2 left-3 bg-white text-xs px-1 text-[#6c25ff] select-none"
            >
              {field.label.replace("*", "")}
              {field.label.includes("*") && (
                <span className="text-red-500 ml-0.5">*</span>
              )}
            </label>
            <input
              id={field.id}
              type={field.type}
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none placeholder:text-gray-400 focus:border-[#6c25ff]"
            />
          </div>
        ))}

        {/* Radio buttons */}
        <div className="mb-6">
          <p className="text-sm text-gray-700 mb-3">
            Are you an Agency?<span className="text-red-500 ml-1">*</span>
          </p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="radio"
                name="agency"
                defaultChecked
                className="w-5 h-5 accent-[#6c25ff] outline-none"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="radio"
                name="agency"
                className="w-5 h-5 accent-[#6c25ff] outline-none"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Submit button */}
        <Link
          to="/profile"
          className="mt-40 block w-full py-3 rounded-lg font-semibold text-center bg-[#6c25ff] text-white hover:bg-[#5a1ecf] transition"
        >
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default SignupScreen;
