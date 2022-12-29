import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useToken from "../../Hooks/useToken";
import { GoogleAuthProvider } from "firebase/auth";
import Loading from "../../Pages/Shared/Loading/Loading";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser, loginProvider, setLoading } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  // console.log(token, "gvjvhh");

  // if (token) {
  //   navigate("/");
  // }

  const handelSignUp = (data) => {
    // console.log(data);
    const imageHostKey = import.meta.env.VITE_imgbb_key;

    setSignUpError("");
    // create user
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const image = data.photo[0];
        console.log(image);
        
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imageData) => {
            setLoading(true);
            if (imageData.status) {
              const userInfo = {
                displayName: data.name,
                photoURL: imageData.data.url,
              };

              const profilePhoto = imageData.data.url;

              updateUser(userInfo)
                .then(() => {

                  //upload cover photo
                  const coverPhoto = data.coverPhoto[0];
                  console.log(coverPhoto);
                  
                  const formData = new FormData();
                  formData.append("image", coverPhoto);
          
                  const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
                  fetch(url, {
                    method: "POST",
                    body: formData,
                  })
                    .then((res) => res.json())
                    .then((imageData) => {
                      if (imageData.status) {

                        console.log( data?.name, data?.email, imageData.data.url, data?.coverPhoto, data?.address, data?.education );
                        saveUser(data?.name, data?.email, profilePhoto, imageData.data.url, data?.address, data?.education);
                        setLoading(false);
                        toast.success('Account created successfully');
                        navigate('/');
                      }
                    });

                  // console.log( data?.name, data?.email, imageData.data.url, data?.coverPhoto, data?.address, data?.education );
                  // saveUser(data?.name, data?.email, imageData.data.url, data?.coverPhoto, data?.address, data?.education)
                })
                .catch((error) => console.log(error));
            }
          });
      })
      .catch((error) => {
        setSignUpError(error.message);
        console.log(error);
      });
  };

  // google login

  const handelGoogleLogin = () => {
    loginProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
  
        const info = {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
          education: 'un',
          address: 'un'
        }
        // saveUser( data.education, data.address, imageData.data.url);
        saveUser(user?.name, user?.email, user?.photoURL, 'set cover photo', 'set address', 'set Institute');
        // saveUser(user?.name, user?.email, user?.photoURL, coverPhoto, address, educationInstitute);
        // console.log( info);

        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // save profile on db
  const saveUser = ( userName, userEmail, userPhoto, coverPhoto, address, educationInstitute ) => {
    const user = {
      userName,
      userEmail,
      userPhoto,
      coverPhoto,
      address,
      educationInstitute
    };

    // console.log( 'saveUser', user);

    fetch("https://socialinked.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("send user to backend", data);
        setCreatedUserEmail(email);
        toast.success("User created Successfully");
      });
  };

  return (
    <div className=" md:w-[800px] md:mx-auto mx-5 md:h-[640px] flex justify-center items-center">
      <div className="card w-full border shadow-2xl p-7">
        <h2 className="text-3xl my-5 text-center text-primary font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handelSignUp)} calssName="card">
          <div className="grid justify-center gap-3 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label htmlFor="label">
                <span>Name</span>
              </label>
              <input
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
                {...register("email", {
                  required: "Email address is required",
                })}
                className="input input-bordered"
              />
              {errors?.email && <small className="text-error mt-2">{errors.email?.message}</small>}
            </div>
            <div className="form-control">
              <label htmlFor="label">
                <span>Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be 6 charecters or longer" },
                  pattern: { value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/, message: "Password must be strong minimum one A-Z character and one spical symbol" },
                })}
                className="input input-bordered"
              />
              {errors.password && <small className="text-error mt-2">{errors.password?.message}</small>}
            </div>
            <div>{signUpError && <span className="my-2 text-error">{signUpError}</span>}</div>
          </div>

          <div className="text-center">
            <input className=" mt-5 btn btn-primary text-white" type="submit" value="Sign Up" />
            <p>
              Alredy have an account?
              <Link className="text-secondary" to="/login">
                Plase Login
              </Link>
            </p>
          </div>
        </form>

        <div className="divider">OR</div>
        <div className="mx-auto">
          <button onClick={handelGoogleLogin} className="btn text-3xl text-success btn-outline btn-circle">
            <FaGoogle></FaGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
