import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

type Props = {
  users: UserProps[];
};

const Users: React.FC<Props> = ({ users }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto p-6 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-full">
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users?.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
