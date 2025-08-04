import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import 'animate.css';

const Login = () => {
  const [type, setType] = useState("password");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const typeChange = () => setType(type === "password" ? "text" : "password");
  const getPasswordValue = (value) => setPassword(value);

  const onSubmit = async (info) => {
    try {
   
      const mockUserData = {
        isLoggedIn: true,
        userId: "user_" + Math.random().toString(36).substr(2, 9),
        email: info.email,
        password:info.password 
      };
      
      
      localStorage.setItem("userData", JSON.stringify(mockUserData));
      
      
      if (mockUserData.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
      
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full border-b border-gray-200 py-3 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            
            <div className="text-2xl font-bold text-red-700 ml-10">
              Exclusive
            </div>
          </div>
        </div>
      </div>

      <main className="flex py-6 min-h-screen bg-white">
        <section className="hidden lg:flex w-3/5 left-0 top-0 h-screen text-white flex-col justify-center items-center">
          <div className="w-full h-full">
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20240419/pngtree-smart-phone-with-online-shop-concept-on-screen-all-screen-content-image_15663344.jpg"
              alt="material"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </section>

        <div className="w-full lg:w-2/5 flex flex-col justify-center items-center px-6">
          <section className="login-section animate__animated animate__slideInRight animate__faster"> 
            <div className="w-full max-w-md space-y-4 bg-gray-100 p-16 mb-14 rounded-2xl">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-medium">Login to Exclusive</h1>
                <p className="text-gray-800 text-sm">
                  Enter your details below
                </p>
              </div>
       
              {loginError && (
                <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your e-mail"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      }
                    })}
                    className="w-full bg-white/90 rounded-lg border border-gray-200 focus:outline-none focus:border-red-700 text-sm px-4 py-2"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="relative">
                  <input
                    type={type}
                    placeholder="Password..."
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length is 4",
                      },
                      maxLength: {
                        value: 8,
                        message: "Maximum length is 8",
                      },
                      onChange: (e) => getPasswordValue(e.target.value),
                    })}
                    className="w-full bg-white/90 rounded-lg border border-gray-200 focus:outline-none focus:border-red-700 text-sm px-4 py-2"
                  />
                  {password && (
                    <span
                      className="absolute top-2.5 right-3 cursor-pointer text-gray-500"
                      onClick={typeChange}
                    >
                      {type === "password" ? "👁️" : "🙈"}
                    </span>
                  )}
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <div className="flex justify-between items-center px-1">
                  <Link to="/"
                    type="submit"
                    className="px-6 py-2 bg-red-700 text-white font-semibold font-sans rounded-sm hover:bg-red-800 transition"
                  >
                    Login
                  </Link>

                  <Link to="/forgotpassword" className="text-sm text-red-700 hover:underline font-serif">
                    Forgot Password?
                  </Link>
                </div>

                <div className="text-sm text-center mt-6 font-serif">
                  Don't have an account?{" "}
                  <Link to="/PartnerSignup" className="text-red-700 hover:underline font-medium">
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;