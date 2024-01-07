import React, { useContext, useState } from "react";
import Container from "../../Container";
import Logo from "../../../assets/favicon.png";
import { Link, NavLink } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { FcManager } from "react-icons/fc";
import { FaAngleDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../../../Provider/AuthProvider";

function Nav() {
  const [menu, setMenu] = useState(false);
  const [menuUser, setMenuUser] = useState(false);
  const { user, userSignOut } = useContext(AuthContext);
  const signOutHandle = () => {
    userSignOut()
      .then(() => {})
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="py-5">
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <div>
              <Link className="flex items-center gap-1">
                <img
                  src={Logo}
                  alt=""
                  className="lg:w-[50px] w-[40px] h-auto"
                />{" "}
                <span className="lg:text-[22px] text-[20px] text-purple font-semibold">
                  J-Mart
                </span>
              </Link>
            </div>
            <div className="lg:block hidden">
              <ul className="flex items-center space-x-7">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-purple" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      isActive ? "text-purple" : ""
                    }
                  >
                    Shop
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <div className="lg:hidden block">
                <span onClick={() => setMenu(!menu)}>
                  {menu ? (
                    <IoClose className="text-[24px]" />
                  ) : (
                    <FaBars className="text-[20px]" />
                  )}
                </span>
              </div>
              <Link to="/cart" className="relative">
                <MdShoppingCart className="lg:text-[22px] text-[20px]" />
                <span className="absolute -top-4 left-5 text-purple"></span>
              </Link>
              <div
                onClick={() => setMenuUser(!menuUser)}
                className="flex items-center gap-1 border p-1 rounded-md border-purple cursor-pointer"
              >
                {user ? (
                  <>
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                  </>
                ) : (
                  <FcManager className="lg:text-[30px] text-[24px]" />
                )}
                <FaAngleDown className="text-[18px] font-light" />
              </div>
              {menuUser && (
                <div className="absolute mt-[130px] rounded-md w-[130px] py-2 px-5 z-50 bg-gray-300">
                  <ul className="space-y-3">
                    {user ? (
                      <>
                        <li>
                          <Link>Profile</Link>
                        </li>
                        <li onClick={signOutHandle}>
                          <Link>Logout</Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
          {menu && (
            <div className="p-10 bg-gray-200 mt-5">
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-purple" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      isActive ? "text-purple" : ""
                    }
                  >
                    Shop
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Nav;
