import React from "react";

const User = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users Dashboard</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <input
              type="search"
              placeholder="Search users..."
              className="px-4 py-2 border rounded-lg"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Add User
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-6 py-4">John Doe</td>
              <td className="px-6 py-4">john@example.com</td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4">
                <button className="text-blue-500 mr-2">Edit</button>
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
