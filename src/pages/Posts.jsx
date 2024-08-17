import React, { useEffect, useState } from "react";
import Post from "../Components/Post";
import { handelApi } from "../JS/handelApi";

function Posts() {
  const [posts,setPosts] = useState(null);
  const getData = async()=>{
     const data = await handelApi.getallData("posts");
     setPosts(data.posts);
  }
  useEffect(()=>{
   getData();
  },[])
  return (
    <div className="py-24 h-screen p-4 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          posts && posts.map((post, index) => <Post key={post.id} post={post}/>)
        }
      </div>
    </div>
  );
}

export default Posts;
