import React from "react";
import { useContext } from "react";
import { FaMapMarkerAlt, FaUniversity, FaUserGraduate, FaUserCircle, FaPaperPlane } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useCurrentUser from "../../Hooks/useCurrentUser";
import CreatePost from "../Home/CreatePost/CreatePost";
import Loading from "../Shared/Loading/Loading";
import EditModal from "./EditModal/EditModal";

const About = () => {
  const { user } = useContext(AuthContext);

  const [currentUser, refetch, isCurrentUserLoading] = useCurrentUser(user?.email);
  // console.log(currentUser);

  if (isCurrentUserLoading) {
    return <Loading></Loading>
  }
   
  const { coverPhoto, educationInstitute, userEmail, userName, userPhoto, address } = currentUser;
  

  return (
    <section className="-mt-10">
      <label tabIndex={3} htmlFor="about-drawer" className="ml-5 btn btn-ghost drawer-button lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </label>
      <div className="drawer drawer-mobile">
        <input id="about-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="">
            <div>
              <div className="w-full h-[45vh] border border-primary overflow-hidden bg-slate-200">
                <img className="w-full" src={coverPhoto} alt="" />
              </div>

              <div className="flex justify-between items-center md:mx-20 mx-10 ">
                <div className="">
                  <div className="-mt-48 mb:mb-20 mb-5 w-[300px] h-[300px] border-4 border-primary rounded-full overflow-hidden bg-slate-200">
                    <img className="w-full" src={userPhoto} alt="" />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-items-center gap-x-4">
                      <FaUserCircle className="text-3xl "></FaUserCircle>
                      <h2 className="text-3xl font-bold">{userName}</h2>
                    </div>
                    <div className="flex items-center justify-items-center gap-x-4">
                      <FaPaperPlane className="text-3xl "></FaPaperPlane>
                      <span className="text-xl">{user?.email}</span>
                    </div>

                    <h1 className="text-2xl font-semibold">About</h1>
                    <div className="flex items-center justify-items-center gap-x-4">
                      <FaUserGraduate className="text-3xl "></FaUserGraduate>
                      <h4 className="text-xl">
                        {educationInstitute}
                      </h4>
                    </div>
                    <div className="mb:my-20 mb-5 flex items-center justify-items-center gap-x-4">
                      <FaMapMarkerAlt className="text-3xl "></FaMapMarkerAlt>
                        <h4 className="text-xl">
                          {address}
                        </h4>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="edit-modal" className="btn btn-md btn-success">Edit</label>
                  <EditModal currentUser={currentUser} refetch={refetch}></EditModal>
                </div>
              </div>
            </div>
            <div className="mx-0 mt-10 mb-28 px-0">
              <CreatePost></CreatePost>
            </div>
          </div>
        </div>

        <div className="drawer-side overflow-x-hidden">
          <label htmlFor="about-drawer" className="drawer-overlay"></label>
          <h2 className=" w-80 p-2 text-center text-white text-xl bg-purple-700 font-semibold sticky">Suggestions</h2>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
