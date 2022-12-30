import React from "react";
import { FaEllipsisV } from "react-icons/fa";

const Comment = ({ commentInfo }) => {
    const {       
    postId,
    commenterNamer,
    commenterPhoto,
    commenterEmail,
    comment,
    commentTime
} = commentInfo;

  return (
    <div className="card w-96 h-40 md:hover:border md:hover:border-primary rounded-2xl bg-base-100 shadow-xl">
      <div className="flex justify-between p-3 items-center">
        <div className="flex gap-2">
          <figure className="w-[55px] h-[55px] border-2 border-primary  overflow-hidden rounded-full">
            <img src={commenterPhoto} alt="" />
          </figure>
          <div>
            <h2 className="text-lg font-semibold">{commenterNamer}</h2>
            <span>{commentTime}</span>
          </div>
        </div>
        <button>
          <FaEllipsisV className="texl-xl"></FaEllipsisV>
        </button>
      </div>
      <div className="card-body overflow-x-hidden overflow-y-auto py-3 px-5">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
