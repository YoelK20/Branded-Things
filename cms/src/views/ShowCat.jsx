import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
import { useEffect, useState } from "react";

export default function ShowCat() {
  const [categories, setCategories] = useState([]);
  async function fetchCategories() {
    try {
      const { data } = await axios.get(`${baseUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="relative flex flex-col justify-center h-[85dvh] mt-10 overflow-hidden bg-base-100 shadow-2xl rounded-xl">
        <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-200">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Category Name</th>
                <th className="px-4 py-2 ">CreatedAt</th>
                <th className="px-4 py-2">UpdatedAt</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((el) => {
                return (
                  <tr key={el.id}>
                    <td className="border px-10 py-2">{el.id}</td>
                    <td className="border px-10 py-2">{el.name}</td>
                    <td className="border px-10 py-2 ">
                      {el.createdAt.split("T")[0]}
                    </td>
                    <td className="border px-4 py-2">
                      {el.updatedAt.split("T")[0]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
