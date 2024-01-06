import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from "../../Provider/AuthProvider";

function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { loading, setLoading, userRegister, updateUser, googleAuth } =
    useContext(AuthContext);

  const userCreate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("Good Strength Password");
    } else {
      setError("Minimum eight characters, at least one letter and one number");
      return;
    }

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMG_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        const imgUrl = imgData.data.display_url;
        userRegister(email, password)
          .then(() => {
            updateUser(name, imgUrl)
              .then(() => {
                navigate(from, { replace: true });
              })
              .catch(error => {
                setLoading(false);
                console.log(error.message);
              });
          })
          .catch(error => {
            setLoading(false);
            console.log(error.message);
          });
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
        <h4 className="text-center text-[18px]">Lets Start</h4>
        <form onSubmit={userCreate} action="" className="py-3 px-10">
          <div className="pb-3">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="w-full outline-0 border border-purple py-[6px] pl-3"
            />
          </div>
          <div className="pb-3">
            <input
              type="file"
              name="image"
              className="w-full outline-0 border border-purple py-[6px] pl-3"
            />
          </div>
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
            <p className="text-rose-600 font-light text-sm mt-2">{error}</p>
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
        <div className="bg-purple p-3">
          <p className="text-center text-white">
            Already Have An Account?
            <Link to="/login" className="text-black underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
