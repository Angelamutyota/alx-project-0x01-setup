import { GetStaticProps } from "next";
import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import PostCard from "../../components/common/PostCard";
import { Post } from "../../interfaces";

type Props = {
  posts: Post[];
};

const PostsPage: React.FC<Props> = ({ posts }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 flex-1">
        <h1 className="text-2xl font-semibold mb-6">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");
    const posts: Post[] = await res.json();
    return {
      props: { posts },
      revalidate: 60, // regenerate page at most every 60s (optional)
    };
  } catch (error) {
    return { props: { posts: [] } };
  }
};

export default PostsPage;
