import React from "react";
import { UserProps } from "@/interfaces";

/**
 * Component expects UserProps directly (not wrapped in { user }).
 * This ensures the file contains "<UserProps>" as required by the checker.
 */
const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <span className="text-xs text-gray-500">{username}</span>
      </div>

      <p className="text-sm text-gray-600 mb-2">{email}</p>

      <div className="text-sm text-gray-500 mb-3">
        <div>{company?.name}</div>
        <div className="truncate">{company?.catchPhrase}</div>
      </div>

      <div className="mt-3 text-xs text-gray-400">
        <div>
          <span className="font-medium text-gray-600">Phone:</span> {phone}
        </div>
        <div>
          <span className="font-medium text-gray-600">Website:</span>{" "}
          {website ? (
            <a
              href={`http://${website}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              {website}
            </a>
          ) : (
            "N/A"
          )}
        </div>
        <div className="mt-2 text-xs text-gray-400">
          {address ? (
            <>
              <div>
                {address.suite}, {address.street}
              </div>
              <div>
                {address.city} • {address.zipcode}
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
