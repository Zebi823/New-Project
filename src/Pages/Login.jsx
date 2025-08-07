import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import 'animate.css';

const Login = () => {
  const [type, setType] = useState("password");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const password = watch("password");

  const typeChange = () => {
    setType(type === "password" ? "text" : "password");
  };

  const onSubmit = async (info) => {
    try {
      // Simulated backend login check
      const adminEmail = "admin@example.com";
      const adminPassword = "admin999";

      if (info.email === adminEmail && info.password === adminPassword) {
        const fakeToken = `token_${Math.random().toString(36).substr(2)}`;
        const userData = {
          isAdmin: true,
          token: fakeToken,
          email: info.email,
        };

        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/admin");
      } else {
        setLoginError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Something went wrong. Try again.");
    }
  };

  return (
    <>
      {/* Header */}
      <div className="w-full border-b border-gray-200 py-3 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-red-700 ml-10">Exclusive</div>
        </div>
      </div>

      {/* Main */}
      <main className="flex py-6 min-h-screen bg-white">
        {/* Image Section */}
        <section className="hidden lg:flex w-3/5 h-screen justify-center items-center">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20240419/pngtree-smart-phone-with-online-shop-concept-on-screen-all-screen-content-image_15663344.jpg"
            alt="shop"
            className="w-full h-full object-cover shadow-lg"
          />
        </section>

        {/* Form Section */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center items-center px-6">
          <section className="animate__animated animate__slideInRight animate__faster">
            <div className="w-full max-w-md space-y-4 bg-gray-100 p-10 mb-14 rounded-2xl">
              <div>
                <h1 className="text-3xl font-medium">Login to Exclusive</h1>
                <p className="text-gray-800 text-sm">Enter your details below</p>
              </div>

              {loginError && (
                <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email Field */}
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-red-700 text-sm px-4 py-2"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                {/* Password Field */}
                <div className="relative">
                  <input
                    type={type}
                    placeholder="Password..."
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 4, message: "Minimum length is 4" },
                      maxLength: { value: 12, message: "Maximum length is 12" },
                    })}
                    className="w-full bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-red-700 text-sm px-4 py-2"
                  />
                  {password && (
                    <span
                      className="absolute top-2.5 right-3 cursor-pointer text-gray-500"
                      onClick={typeChange}
                    >
                      {type === "password" ? "👁️" : "🙈"}
                    </span>
                  )}
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                  )}
                </div>

                {/* Submit & Forgot Password */}
                <div className="flex justify-between items-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-red-700 text-white font-semibold rounded hover:bg-red-800 transition"
                  >
                    Login
                  </button>
                  <Link to="/forgotpassword" className="text-sm text-red-700 hover:underline">
                    Forgot Password?
                  </Link>
                </div>

                {/* Signup Link */}
                <p className="text-sm text-center mt-6">
                  Don't have an account?{" "}
                  <Link to="/PartnerSignup" className="text-red-700 hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;
