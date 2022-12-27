import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    console.log(token);
    navigate(from, { replace: true });
  }

  const handelLogin = (data) => {
    // console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success('Login Successfully')
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });

    console.log(errors);
  };

  return (
    <div className="h-[650px] flex justify-center items-center">
      <div className="card border w-80 md:w-96 shadow-2xl p-7">
        <h2 className="text-xl text-center text-primary">Login</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="form-control w-full mt-5">
            <label htmlFor="label">
              {" "}
              <span>Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email address is required",
              })}
              className="input input-bordered"
            />
            {errors.email && <small className="text-error mt-2">{errors.email?.message}</small>}
          </div>
          <div className="form-control w-full mt-5">
            <label htmlFor="label">
              {" "}
              <span>Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password required",
                minLength: { value: 6, message: "Password must be 6 charecters or longer" },
              })}
              className="input input-bordered"
            />
            {errors.password && <small className="text-error mt-2">{errors.password?.message}</small>}
          </div>
          <span>Forget Password?</span>
          <div>{loginError && <span className="my-2 text-error">{loginError}</span>}</div>
          <input className="w-full mt-5 btn bg-primary text-white" type="submit" value="Login" />
        </form>
        <p>
          New to Medi Care{" "}
          <Link className="text-secondary" to="/signup">
            Create a new account?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
