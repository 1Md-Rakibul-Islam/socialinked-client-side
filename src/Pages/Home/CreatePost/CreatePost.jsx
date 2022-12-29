import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const CreatePost = ( {refetch} ) => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const handlePost = (data) => {

  //date of publish
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

    // uplode image in imageBB
    const imageHostKey = import.meta.env.VITE_imgbb_key;
    // console.log(data, imageHostKey);

    const image = data.photo[0];
    // console.log(image);
    
    const formData = new FormData();
    formData.append("image", image);
    // console.log(formData);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.status) {

          // save to database
          const postInfo = {
            "creatorName": user?.displayName,
            "creatorImage": user?.photoURL,
            "creatorEmail": user?.email,
            "uploadDate": currentDate,
            "image": imageData.data.url,
            "description": data.description,
            "react": 0,
          }
          // console.log( postInfo );

          // create a post
          fetch('https://socialinked.vercel.app/posts', {
            method: "POST",
            headers: {
              "content-type": "application/json",
              // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(postInfo)
          })
          .then( res => res.json())
          .then( data => {
            console.log(data);
            if (data.acknowledged) {
              toast.success('Post Successfully');
              refetch();
            }
          })
        }
      });


  }

  return (

    <form onSubmit={handleSubmit(handlePost)} >
      <div  className="border bg-slate-200 p-5 mb-10 md:mx-28 rounded-2xl">
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
          <textarea
            {...register("description", {
              required: true,
            })}
            name="description" className="textarea textarea-bordered w-full h-32 md:w-2/4" placeholder={`What is your mind? ${user?.displayName}`
          }></textarea>

          {
            user?.email ?
            <button className="btn btn-primary btn-sm md:btn-md" type="submit">
              <span className="mx-5">Post</span>
            </button>:
            <Link to='/login'>
              <button className="btn btn-primary btn-sm md:btn-md" type="submit">
                <span className="mx-5">Post</span>
              </button>
            </Link>
          }
          {/* <button className="btn btn-primary btn-sm md:btn-md" type="submit">
            <span className="mx-5">Post</span>
          </button> */}

        </div>
        <div className="flex justify-center items-center mt-5">
          {/* <button className="btn btn-primary btn-sm md:btn-md" type="submit">
            <span className="mx-5">Post</span>
          </button> */}
          <span>Upload a Image</span>
          <input
                {...register("photo", {
                  required: true,
                })}
                type="file"
                className="ml-4 file-input file-input-sm border md:rounded-2xl file-input-bordered md:file-input-primary file-input-ghost w-1/2 md:w-2/12"
              />
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
