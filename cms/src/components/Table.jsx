import { useState } from "react";
export default function Table({products}) {
  // console.log(products, "ini products table");

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2 w-[100%]">Description</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Categories</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2 ">CreatedAt</th>
            <th className="px-4 py-2">UpdatedAt</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((el) => {
            return (
              <tr key={el.id}>
                <td className="border px-4 py-2">{el.id}</td>
                <td className="border px-4 py-2">{el.name}</td>
                <td className="border px-4 py-2">{el.description}</td>
                <td className="border px-4 py-2">{el.User.username}</td>
                <td className="border px-4 py-2">{el.Category.name}</td>
                <td className="border px-4 py-2">{el.price}</td>
                <td className="border px-4 py-2 ">
                  {el.createdAt.split("T")[0]}
                </td>
                <td className="border px-4 py-2">
                  {el.updatedAt.split("T")[0]}
                </td>
                <td className="border px-4 py-2">
                  <a>
                    <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                      Edit
                    </button>
                  </a>
                  <a>
                    <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                      Delete
                    </button>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
