import React, { useEffect, useState } from "react";
import Post from "../Components/Post/Post";
import { handelApi } from "../JS/handelApi";
import Loading from "../Components/Loading/Loading";
import Pagination from "../Components/Pagination/Pagintaion";

function Posts() {
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  const getData = async () => {
    const data = await handelApi.getallData(
      "posts",
      () => {},
      () => {},
      () => setLoading(true),
      () => setLoading(false),
      `?limit=12&skip=${12 * pageNum}`
    );
    setPosts(data.posts);
  };

  useEffect(() => {
    getData();
  }, [pageNum]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Pagination skips={pageNum} setSkips={setPageNum} />
          <div className=" h-screen p-4 bg-main-color cursor-default">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {posts &&
                posts.map((post, index) => <Post key={post.id} post={post} />)}
            </div>
            <Pagination skips={pageNum} setSkips={setPageNum} />
          </div>
        </>
      )}
    </>
  );
}

export default Posts;
