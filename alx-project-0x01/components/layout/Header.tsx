import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-semibold">ALX Project</a>
        </Link>

        <nav className="space-x-4">
          <Link href="/"><a className="hover:underline">Home</a></Link>
          <Link href="/posts"><a className="hover:underline">Posts</a></Link>
          <Link href="/users"><a className="hover:underline">Users</a></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
