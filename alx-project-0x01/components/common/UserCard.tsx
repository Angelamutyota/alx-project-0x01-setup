import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
        <span className="text-xs text-gray-500">{user.username}</span>
      </div>

      <p className="text-sm text-gray-600 mb-2">{user.email}</p>

      <div className="text-sm text-gray-500 mb-3">
        <div>{user.company?.name}</div>
        <div className="truncate">{user.company?.catchPhrase}</div>
      </div>

      <div className="mt-3 text-xs text-gray-400">
        <div>
          <span className="font-medium text-gray-600">Phone:</span> {user.phone}
        </div>
        <div>
          <span className="font-medium text-gray-600">Website:</span>{" "}
          <a
            href={`http://${user.website}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            {user.website}
          </a>
        </div>
        <div className="mt-2 text-xs text-gray-400">
          {user.address ? (
            <>
              <div>
                {user.address.suite}, {user.address.street}
              </div>
              <div>
                {user.address.city} • {user.address.zipcode}
              </div>
            </>
          ) : (
            <div>No address available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
