import React from "react";

const CreatePost = () => {
  return (
    <section>
      <form className="border bg-slate-200 p-10 mb-10 md:mx-28 rounded-2xl">
        <div className="flex justify-between items-center gap-20">
          <div className="">
            <img className="w-[100px] h-[100px] rounded-full border border-primary" src='../../../assets/icons/socialinked-icon.png' alt="" />
          </div>
          {/* <input type="text" placeholder="Type here" className="input input-bordered" /> */}
          <textarea className="textarea textarea-bordered w-full" placeholder="What is your mind?"></textarea>
          <input type="file" className="file-input file-input-bordered file-input-primary" />
        </div>
        <div className="flex justify-center mt-5">
          <button className="btn btn-primary btn-md" type="submit">
            <span className="mx-10">Post</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
