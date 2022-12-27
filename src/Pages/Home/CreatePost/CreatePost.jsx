import React from "react";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const CreatePost = () => {
  const { user } = useContext(AuthContext);

  return (
    <section>
      <form className="border bg-slate-200 p-5 mb-10 md:mx-28 rounded-2xl">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-5 md:gap-20">
          <div className="overflow-hidden md:flex">
            {
              user?.email ?
              <img className="md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-full border-2 border-primary" src={user?.photoURL} alt="" />
              :
              <FaUser className="text-6xl p-1 rounded-full border-2 border-primary"></FaUser>
            }
          </div>
          {/* <input type="text" placeholder="Type here" className="input input-bordered" /> */}
          <textarea className="textarea textarea-bordered w-full h-32 md:w-2/4" placeholder={`What is your mind? ${user?.displayName}`}></textarea>
          <button className="btn btn-primary btn-sm md:btn-md" type="submit">
            <span className="mx-5">Post</span>
          </button>

        </div>
        <div className="flex justify-center items-center mt-5">
          {/* <button className="btn btn-primary btn-sm md:btn-md" type="submit">
            <span className="mx-5">Post</span>
          </button> */}
          <span>Upload a Image</span><input type="file" className="ml-4 file-input file-input-sm border md:rounded-2xl file-input-bordered md:file-input-primary file-input-ghost w-1/2 md:w-2/12" />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
