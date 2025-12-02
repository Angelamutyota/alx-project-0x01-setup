import { GetStaticProps } from "next";
import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { User } from "../../interfaces";

type Props = {
  users: User[];
};

const UsersPage: React.FC<Props> = ({ users }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 flex-1">
        <h1 className="text-2xl font-semibold mb-6">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((u) => (
            <div key={u.id} className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium">{u.name}</h3>
              <p className="text-sm text-gray-600">{u.email}</p>
              <p className="text-sm text-gray-600">{u.company?.name}</p>
              <p className="text-xs text-gray-500 mt-2">
                {u.address?.city}, {u.address?.street}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();
    return {
      props: { users },
      revalidate: 60,
    };
  } catch (error) {
    return { props: { users: [] } };
  }
};

export default UsersPage;
