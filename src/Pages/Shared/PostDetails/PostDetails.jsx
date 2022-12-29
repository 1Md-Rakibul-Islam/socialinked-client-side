import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEllipsisV, FaHeart, FaCommentDots, FaShare, FaComment } from "react-icons/fa";
import Comment from "../Comment/Comment";

const PostDetails = () => {
  const post = useLoaderData();
  // console.log(post);
  const { _id, creatorName, creatorImage, creatorEmail, uploadDate, react, image, description } = post;

  return (
    <section>
      <div>
        <div className="card md:p-10 px-5 mx-auto my-10 md:w-[70vw] w-full  rounded-none bg-base-00 shadow-2xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <figure className="w-[100px] h-[100px] border-2 border-primary  overflow-hidden rounded-full">
                <img src={creatorImage} alt="" />
              </figure>
              <div>
                <h2 className="text-xl font-semibold">{creatorName}</h2>
                <span>{uploadDate}</span>
              </div>
            </div>
            <button>
              <FaEllipsisV className="texl-2xl"></FaEllipsisV>
            </button>
          </div>
          <p className="my-10">{description}</p>
          <figure className=" overflow-hidden">
            <img className="w-full h-full md:max-h-[520px]" src={image} alt="Photo" />
          </figure>
          <div className="divider m-0"></div>
          <div className="flex justify-around p-2">
            <div className="flex gap-2 items-center">
              <FaHeart className="text-xl text-red-500"></FaHeart> Love {react}
            </div>
            <div className="flex gap-2 items-center">
              <FaCommentDots className="text-xl text-info"></FaCommentDots> Comments 5
            </div>
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:mx-10 mx-4">
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
