import React from "react";
import { Link } from "react-router-dom";
import { FaEllipsisV, FaHeart, FaCommentDots, FaShare, FaComment } from "react-icons/fa";

const PostCard = ({ post }) => {
  const { _id, creatorName, creatorImage, creatorEmail, uploadDate, react, image, description } = post;
  return (
    <div className="card hover:border hover:border-primary hover:-translate-y-3 rounded-sm bg-base-100 shadow-xl">
      <div className="flex justify-between p-4 items-center">
        <div className="flex gap-2">
          <figure className="w-[55px] h-[55px] border-2 border-primary  overflow-hidden rounded-full">
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
      <div className="card-body px-5">
        <p>
          {description.length > 90 ? description.slice(0, 90) + "....." : description}
          <Link to={`/postDetails/${_id}`}>
            <button className="font-bold text-md">See more</button>
          </Link>
        </p>
      </div>
      <figure className="w-full overflow-hidden h-64">
        <img className="" src={image} alt="Shoes" />
      </figure>

      <div className="">
        {/* <div className="flex justify-between p-2">
            <div className="flex gap-2 items-center">
                <FaHeart className="text-xl"></FaHeart> {react}
            </div>
            <div className="flex gap-2 items-center">
                <FaCommentDots className="text-xl"></FaCommentDots> 5
            </div>
        </div> */}
        {/* <div className="divider m-0"></div> */}
        <div className="flex justify-between p-2">  
            <button className="flex gap-2 items-center">
                <FaHeart className="text-lg"></FaHeart><span>Love</span> {react}
            </button>
            <Link to={`/postDetails/${_id}`}>
              <button className="flex gap-2 items-center">
                  <FaComment className="text-lg"></FaComment> 5 <span>Write a comment heare......</span>
              </button>
            </Link>
            <button className="flex gap-2 items-center">
                <FaShare className="text-lg"></FaShare><span>Share</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
