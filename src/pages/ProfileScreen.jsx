const ProfileScreen = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">Account Settings</h2>

      <div className="flex items-center bg-purple-50 p-4 rounded-lg">
        <div className="relative mr-4">
          <img
            src="https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover border-2 border-white"
          />
          <span className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            📷
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Marry Doe</h3>
          <p className="text-sm text-gray-600">Marry@gmail.com</p>
        </div>
      </div>

      <p className="mt-4 text-gray-500 text-sm leading-relaxed">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <hr className="mt-6 border-gray-200" />
    </div>
  );
};

export default ProfileScreen;
