import React, { useContext } from "react";
import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "./../../Provider/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { loading, setLoading, loginUser, googleAuth } =
    useContext(AuthContext);

  const userHandle = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(error => {
        setLoading(false);
        console.log(error.message);
      });
  };

  const googleHandle = () => {
    googleAuth()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(error => {
        setLoading(false);
        console.log(error.message);
      });
  };

  return (
    <div className="bg-img w-full h-screen flex items-center justify-center">
      <div className="bg-white border-t-2 border-purple w-[450px]">
        <h2 className="text-center text-[24px] font-semibold pt-10">
          Welcome to J-Mart
        </h2>
        <h4 className="text-center text-[18px]">Login</h4>
        <form onSubmit={userHandle} action="" className="py-3 px-10">
          <div className="pb-3">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full outline-0 border border-purple py-[6px] pl-3"
            />
          </div>
          <div className="pb-3">
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full outline-0 border border-purple py-[6px] pl-3"
            />
          </div>
          <div className="pt-3">
            <button
              type="submit"
              className="w-full outline-0 border bg-purple cursor-pointer text-white border-purple py-[6px] pl-3"
            >
              {loading ? (
                <TbFidgetSpinner size={24} className="mx-auto animate-spin" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <p className="text-center">Or</p>
        <div
          onClick={googleHandle}
          className="pt-3 pb-10 px-10 text-center cursor-pointer"
        >
          <span className="w-full bg-purple block py-2 text-white">
            Sign up With Google
            <FaGoogle className="text-[24px] inline-block" />
          </span>
        </div>
        <div className="bg-purple p-5">
          <p className="text-center text-white">
            Are You New at J-Mart? Please
            <Link to="/register" className="text-black underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
