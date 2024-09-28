import React from "react";
import { getPosts } from "../services/postApi";
import Link from "next/link";

const page = async () => {
  const postsData = await getPosts();

  return (
    <div className="">
      <h5 className="my-10 text-center text-3xl">All Posts</h5>
      <div className="grid grid-cols-4 gap-6">
        {postsData?.slice(0, 10)?.map(({ title, userId, body,id }) => (
          <div key={userId} className="border-2 p-6">
            <h6>{title}</h6>
            <h6>{body}</h6>
            <button className="mt-2 border-2 white p-2 rounded-sm">
              <Link href={`/posts/${id}`}>Post Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
