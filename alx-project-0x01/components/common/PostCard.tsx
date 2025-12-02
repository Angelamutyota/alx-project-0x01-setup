import React from "react";
import { Post } from "../../interfaces";

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-sm text-gray-700">{post.body}</p>
    </div>
  );
};

export default PostCard;
