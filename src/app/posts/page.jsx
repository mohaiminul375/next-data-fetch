import React from "react";
import { getPosts } from "../services/postApi";

const page = async () => {
  const postsData = await getPosts();

  return (
    <div className="">
      <h5 className="my-10 text-center text-3xl">All Posts</h5>
      <div className="grid grid-cols-4 gap-6">
        {postsData?.slice(0, 10)?.map(({ title, userId, body }) => (
          <div key={userId} className="border-2 p-6">
            <h6>{title}</h6>
            <h6>{body}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
