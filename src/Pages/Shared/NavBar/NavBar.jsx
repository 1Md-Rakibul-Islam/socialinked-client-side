import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebookMessenger, FaHome, FaIdCard, FaRegEnvelope, FaRegImages, FaSignOutAlt, FaUser } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import socialinked from "../../../assets/icons/socialinked-icon.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut().then().catch();
  };

  const navItem = <>
            <li>
              <Link to={"/"}>
                <FaHome className='text-2xl'></FaHome>
              </Link>
            </li>
            <li>
              <Link to={"/media"}>
                <FaRegImages className='text-2xl'></FaRegImages>
              </Link>
            </li>
            <li>
              <Link to={"/message"}>
                <FaRegEnvelope className='text-2xl'></FaRegEnvelope>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <FaIdCard className='text-2xl'></FaIdCard>
              </Link>
            </li>

            {user?.email ? (
              <>
                <li>
                  <button onClick={handelLogOut}>
                    <FaSignOutAlt className='text-2xl'></FaSignOutAlt>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/signup"}>Sign Up</Link>
                </li>
              </>
            )}
  </>

  return (
    <div className="navbar glass z-30 mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {
              navItem
            }
          </ul>
        </div>
        <a className="justify-between items-baseline md:flex hidden">
          <img className="w-[120px]" src={socialinked} alt="" />
          <h2 className="text-purple-800 text-3xl font-bold">ed</h2>
        </a>
      </div>
      <div className="form-control">
        <input type="text" placeholder="Search" className="md:w-96 w-40 input input-bordered" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {
            navItem
          }
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="rounded-full ">{user?.email ? <img src={user?.photoURL} alt="" /> : <FaUser className="text-3xl"></FaUser>}</div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
                <Link to={"/dashboard"}><a className="justify-between">Profile</a></Link>
            </li>
            <li className='text-2xl'>
              <a className="justify-between">{user?.displayName}</a>
            </li>
            <li>
              <a className="justify-between">{user?.email}</a>
            </li>
            {user?.email ? (
              <li>
                <button onClick={handelLogOut}>Logout</button>
              </li>
            ) : (
              <Link to={"/login"}>
                <li>
                  <button className=''>Login</button>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
      {/* <label tabIndex={3} className="btn btn-ghost lg:hidden">
      <label htmlFor="dashboard-drawer" className="drawer-button lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
      </label> */}
    </div>
  );
};

export default NavBar;
