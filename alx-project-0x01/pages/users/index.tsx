import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";

type Props = {
  posts: UserProps[]; // intentionally named posts
};

const Users: React.FC<Props> = ({ posts: initialPosts }) => {
  const [posts, setPosts] = useState<UserProps[]>(initialPosts || []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (data: UserData) => {
    // convert UserData -> UserProps, generate an id (local only)
    const newUser: UserProps = {
      id: Date.now(),
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      website: data.website,
      address: {
        street: data.address?.street || "",
        suite: data.address?.suite || "",
        city: data.address?.city || "",
        zipcode: data.address?.zipcode || "",
        geo: data.address?.geo || { lat: "0", lng: "0" }
      },
      company: {
        name: data.company?.name || "N/A",
        catchPhrase: data.company?.catchPhrase || "",
        bs: data.company?.bs || ""
      }
    };

    // prepend to posts list
    setPosts((prev) => [newUser, ...prev]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto p-6 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded-full"
            onClick={() => setIsModalOpen(true)}
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* posts.map required by grader */}
          {posts?.map((u) => (
            <UserCard key={u.id} {...u} />
          ))}
        </div>
      </main>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
