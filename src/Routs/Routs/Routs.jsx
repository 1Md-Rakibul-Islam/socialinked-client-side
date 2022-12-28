import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Page404 from "../../Pages/Shared/404/Page404";
import Media from "../../Pages/Media/Media";
import Message from "../../Pages/Message/Message";
import PostDetails from "../../Pages/Shared/PostDetails/PostDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/media",
        element: <Media></Media>
      },
      {
        path: "/postDetails/:_id",
        loader: ({ params }) => fetch(`https://socialinked.vercel.app/post/${params._id}`),
        element: <PostDetails></PostDetails>
      },
      {
        path: "/message",
        element: <Message></Message>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <Page404></Page404>,
      },
    ]
  },
]);