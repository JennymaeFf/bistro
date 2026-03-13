export default function Home() {
  return (
    <div
      className="flex items-center justify-center text-center font-sans min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="bg-black/40 fixed inset-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 py-12 px-6 max-w-md w-full">
        
        {/* Logo + Restaurant Name */}
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-800 tracking-wide drop-shadow-lg">
            J'Bistro
          </h1>
          <p className="text-xl text-amber-700 font-semibold mt-1 drop-shadow">
            RESTAURANT ★
          </p>
        </div>

        {/* Welcome Text */}
        <h2 className="text-3xl font-semibold text-white drop-shadow-lg">
          Welcome to
          <br />
          J'Bistro
        </h2>

        {/* Login Form */}
        <form className="w-full flex flex-col gap-6 mt-6">
          
          {/* Email */}
          <div className="flex flex-col text-left">
            <label className="text-lg text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-4 rounded-xl bg-[#f5e8d3] bg-opacity-90 border border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-800 text-lg placeholder-gray-600"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col text-left">
            <label className="text-lg text-white font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="px-5 py-4 rounded-xl bg-[#f5e8d3] bg-opacity-90 border border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-800 text-lg placeholder-gray-600"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 bg-amber-800 hover:bg-amber-900 text-white font-bold py-4 px-8 rounded-xl text-xl transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-white mt-6 text-lg">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-amber-300 hover:text-amber-200 underline font-medium"
          >
            Register here
          </a>
        </p>

      </div>
    </div>
  );
}