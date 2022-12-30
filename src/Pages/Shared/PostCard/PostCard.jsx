import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEllipsisV, FaHeart, FaCommentDots, FaShare, FaComment, FaRegPaperPlane } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";
import useCurrentUser from "../../../Hooks/useCurrentUser";
import toast from "react-hot-toast";

const PostCard = ({ post }) => {
  const { _id, creatorName, creatorImage, creatorEmail, uploadDate, react, image, description } = post;
  
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentUser, refetch, isCurrentUserLoading] = useCurrentUser(user?.email);
  // console.log(currentUser);
  // if (isCurrentUserLoading) {
  //   return <Loading></Loading>
  // }

  const { coverPhoto, educationInstitute, userEmail, userName, userPhoto, address } = currentUser;

    //date of publish
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

  const handleComment = event => {
    event.preventDefault();
    const comment = event.target.comment.value;
    // console.log(comment);

    // isCurrentUserLoading
    if (!user?.email) {
      return navigate('/login');
    }

    const commentInfo = {
      "postId": _id,
      "commenterNamer": userName,
      "commenterPhoto": userPhoto,
      "commenterEmail": userEmail,
      "comment": comment,
      "commentTime": currentDate
    }

    // create a post
    fetch('https://socialinked.vercel.app/comments', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(commentInfo)
    })
    .then( res => res.json())
    .then( data => {
      console.log(data);
      if (data.acknowledged) {
        toast.success('Comment Successfully');
        navigate(`/postDetails/${_id}`);
        refetch();
      }
    })

  }
  
  return (
    <div className="card hover:-translate-y-2 rounded-sm bg-base-100 shadow-xl">
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
      <div className="card-body py-3 px-5">
        <p>
          {description?.length > 90 ? description.slice(0, 90) + "......" : description + "......"}
          {/* { description} */}
          <Link to={`/postDetails/${_id}`}>
            <button className="font-bold text-md">See Details</button>
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

        <div className="flex justify-between p-2">  
            <button className="flex gap-2 items-center">
                <FaHeart className="text-lg"></FaHeart><span>Love</span> {react}
            </button>
            <Link to={`/postDetails/${_id}`}>
              <button className="flex gap-2 items-center">
                  <FaComment className="text-lg"></FaComment> 5
              </button>
            </Link>
            <button className="flex gap-2 items-center">
                <FaShare className="text-lg"></FaShare><span>Share</span>
            </button>
        </div>
      </div>
      <form onSubmit={handleComment} className="flex gap-3 md:gap-5 my-5 mx-5 md:mx-10">
        <textarea name="comment" required className="textarea w-full h-10 rounded-3xl overflow-hidden" placeholder={`Write a comment heare....`
          }></textarea>
          <button type="submit" className=""><FaRegPaperPlane className="text-2xl"></FaRegPaperPlane></button>
      </form>
      
    </div>
  );
};

export default PostCard;
