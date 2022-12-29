import React from "react";
import { FaEllipsisV } from "react-icons/fa";

const Comment = () => {
  return (
    <div className="card md:hover:border md:hover:border-primary rounded-2xl bg-base-100 shadow-xl">
      <div className="flex justify-between p-3 items-center">
        <div className="flex gap-2">
          <figure className="w-[55px] h-[55px] border-2 border-primary  overflow-hidden rounded-full">
            <img src="" alt="" />
          </figure>
          <div>
            <h2 className="text-lg font-semibold">Raisul Islam</h2>
            <span>23-63-2020</span>
          </div>
        </div>
        <button>
          <FaEllipsisV className="texl-xl"></FaEllipsisV>
        </button>
      </div>
      <div className="card-body py-3 px-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis possimus consectetur quasi. Libero voluptates unde expedita illo praesentium officiis veniam, totam, deleniti voluptas iure molestias? Aspernatur laborum autem labore suscipit ullam illum at tenetur error debitis impedit, nihil alias fugiat in libero corrupti exercitationem perspiciatis consequatur. Vel, delectus! Omnis, non!</p>
      </div>
    </div>
  );
};

export default Comment;
