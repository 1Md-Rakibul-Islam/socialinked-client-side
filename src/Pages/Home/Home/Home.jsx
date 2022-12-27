import React from "react";
import Media from "../../Media/Media";
import CreatePost from "../CreatePost/CreatePost";
import TopPosts from "../TopPosts/TopPosts";


const Home = () => {
  return (
    <div className="mx-5 md:mx-14 ">
      <CreatePost></CreatePost>
      <TopPosts></TopPosts>
    </div>
  );
};

export default Home;
