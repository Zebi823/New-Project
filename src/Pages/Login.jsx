import React, {useState,useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navbar from './Navbar';
import 'animate.css';

const Login = () => {
  const [type, setType] = useState("password");
  const [password, setPassword] = useState("");

  const { 
    register, 
    handleSubmit, 
    formState: { errors }
   } = useForm();

  const navigate = useNavigate();

  const typeChange = () => setType(type === "password" ? "text" : "password");
  const getPasswordValue = (value) => setPassword(value);

  const onSubmit = async (info) => {
    // Here, add API login logic
    localStorage.setItem("isLoggedIn", "true");
    navigate("/admin");
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/admin");
    }
  }, [navigate]);

  return (
     <>
       {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

    <main className="flex py-6 min-h-screen bg-gray-100">

      {/* Left Panel */}
      <section className="hidden lg:flex w-3/5 text-white flex-col justify-center items-center ">
      
        <div className=" w-full mb-18 ml-12 px-8  ">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20240419/pngtree-smart-phone-with-online-shop-concept-on-screen-all-screen-content-image_15663344.jpg"
            alt="material"
            className="w-full h-auto  shadow-lg max-h-[400px] object-cover "
          />
        </div>
      </section>

    
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-center px-6 ">
          <section className="login-section animate__animated animate__slideInRight animate__faster "> 
        <div className="w-full max-w-md space-y-4 bg-gray-100 p-16 mb-14 ">
            
          <div className="text-left ">
            <h1 className="text-3xl font-medium ">Log in to Exclusive</h1>
            <p className="text-gray-800 text-sm mt-2">
            Enter your details below
            </p>
          </div>
       
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            
            
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
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-700 py-2"

              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
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
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-700 py-2"
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

           {/* Login & Forgot Password Row */}
<div className="flex justify-between items-center px-1 mt-10">
  <button
    type="submit"
    className="px-4 py-1 bg-red-700 text-white font-semibold font-sans rounded-sm hover:bg-red-800 transition"
  >
    Login
  </button>

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
