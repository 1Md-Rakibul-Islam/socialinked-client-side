import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useToken from "../../../Hooks/useToken";
import Loading from "../../Shared/Loading/Loading";

const EditModal = ({currentUser, refetch}) => {
   const { _id, coverPhoto, educationInstitute, userEmail, userName, userPhoto, address } = currentUser;
   const {user, setLoading, loading} = useContext(AuthContext);
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   updateUpError 
  if(!currentUser){
    return <Loading></Loading>
  }

  const [updateUpError, setUpdateUpError] = useState("");
  // const [token] = useToken(user?.displayName);
  const navigate = useNavigate();

   const handelUpdate = data => {
        // console.log(data.name, data.photo[0], data.coverPhoto[0], data.education, data.address, data.email);

        toast.success('Update start plase wait...')

        const imageHostKey = import.meta.env.VITE_imgbb_key;

        setUpdateUpError("");
        // update user
        const profileImage = data.photo[0];
            // console.log(image);
            
            const formData = new FormData();
            formData.append("image", profileImage);
    
            const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
            fetch(url, {
              method: "POST",
              body: formData,
            })
              .then((res) => res.json())
              .then((imageData) => {

                if (imageData.status) {
                  const profilePhotoURL = imageData.data.url;
                  // console.log(profilePhotoURL);
                  
                  // upload cover image
                  const coverImage = data.coverPhoto[0];
                  // console.log(coverImage);
                  
                  const formData = new FormData();
                  formData.append("image", coverImage);
          
                  const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
                  fetch(url, {
                    method: "POST",
                    body: formData,
                  })
                    .then((res) => res.json())
                    .then((imageData) => {
                      if (imageData.status) {
                        const coverPhotoURL = imageData.data.url;
                        // console.log(data.name, profilePhotoURL, coverPhotoURL, data.education, data.address, data.email);

                        const updateAccountData = {
                          "userName": data.name,
                          "userPhoto": profilePhotoURL,
                          "coverPhoto": coverPhotoURL,
                          "educationInstitute": data.education,
                          "address": data.address,
                          "userEmail": data.email
                        }

                        // send update data to database

                        fetch(`https://socialinked.vercel.app/users/${_id}`, {
                          method:"PUT",
                          headers: {
                            "content-type": "application/json",
                          },
                          body: JSON.stringify(updateAccountData)
                        })
                        .then( res => res.json())
                        .then( data => {
                          if (data.acknowledged) {
                            refetch();
                            toast.success('Profile Update Successfully')
                          }
                          // console.log(data);
                        })
                      }
                  }) 
                }
            })

    }

  return (
    <div>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
        <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold mt-4 mb-5 text-center text-2xl">Update Profile!</h3>
          
          <form onSubmit={handleSubmit(handelUpdate)} calssName="card">
          <div className="grid justify-center gap-3 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label htmlFor="label">
                <span>Name</span>
              </label>
              <input
                defaultValue={userName}
                {...register("name", {
                  required: true,
                })}
                className="input input-bordered"
              />
              {errors?.name && <small className="text-error mt-2">{errors.name?.message}</small>}
            </div>
            <div className="form-control">
              <label htmlFor="label">
                <span>Profile Photo</span>
              </label>
              <input
              // defaultValue={userPhoto}
                {...register("photo", {
                  required: true,
                })}
                type="file"
                className="file-input file-input-bordered file-input-primary"
              />
              {errors?.photo && <small className="text-error mt-2">{errors.photo?.message}</small>}
            </div>
            <div className="form-control">
              <label htmlFor="label">
                <span>Cover Photo</span>
              </label>
              <input
                // defaultValue={coverPhoto}
                {...register("coverPhoto", {
                  required: true,
                })}
                type="file"
                className="file-input file-input-bordered file-input-primary"
              />
              {errors?.coverPhoto && <small className="text-error mt-2">{errors.coverPhoto?.message}</small>}
            </div>
            <div className="form-control">
              <label htmlFor="label">
                <span>Education</span>
              </label>
              <input
                defaultValue={educationInstitute}
                {...register("education", {
                  required: "School/Collage/University is required",
                })}
                className="input input-bordered"
              />
              {errors?.education && <small className="text-error mt-2">{errors.education?.message}</small>}
            </div>
            <div className="form-control">
              <label htmlFor="label">
                <span>Address</span>
              </label>
              <input
                defaultValue={address}
                {...register("address", {
                  required: "Address is required",
                })}
                className="input input-bordered"
              />
              {errors?.address && <small className="text-error mt-2">{errors.address?.message}</small>}
            </div>
            <div className="form-control">
              <label htmlFor="label">
                <span>Email</span>
              </label>
              <input
                defaultValue={userEmail}
                readOnly
                {...register("email", {
                  required: "Email address is required",
                })}
                className="input input-bordered"
              />
              {errors?.email && <small className="text-error mt-2">{errors.email?.message}</small>}
            </div>

            <div>{updateUpError && <span className="my-2 text-error">{updateUpError}</span>}</div>
          </div>

          <div className="modal-action">
            <button type="submit" htmlFor="edit-modal" className="btn">
              Save
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
