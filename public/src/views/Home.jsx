import { useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useEffect } from "react";
import { baseUrl } from "../utils/baseUrl";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("");
  const [page, setPage] = useState("")
  const [total, setTotal] = useState("")
  const [author, setAuthor] = useState("")
  const [sort, sortByLatest] = useState("")
  async function fetchProducts() {
    try {
      const { data } = await axios.get(
        `${baseUrl}/public/products?sort=${sort}createdAt&category=${categories}&author=&search=${search}&page[data]=${total}&page[number]=${page}`
      );
      setProducts(data.data);
      // console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [search]);

  return (
    <>
      {/*Home */}
      <div className="mt-8">
        <div className="flex">
          <form
            action=""
            method="get"
            className="flex justify-center items-center input  w-[85%] h-[50px] mx-1 input-sm"
          >
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="input input-bordered  w-[85%] h-[50px] mx-1 input-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <div className="dropdown dropdown-hover text-2xl font-bold">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-gray-100 border-gray-100 hover:bg-slate-200 hover:border-0 btn-ghost"
          >
            <a>
              <span className="text-red-500 font-bold text-2xl"></span>
            </a>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-slate-200 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a className="text-gray-600">Latest</a>
            </li>
            <li>
              <a className="text-gray-600">Oldest</a>
            </li>
          </ul>
        </div>
        </div>

        <main className="grid grid-cols-2 gap-10 px-10 my-8">
          {products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </main>
      </div>
      <div className="flex justify-between">
        <div className="dropdown dropdown-hover text-2xl font-bold">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-gray-100 border-gray-100 hover:bg-slate-200 hover:border-0 btn-ghost"
          >
            <a>
              <span className="text-red-500 font-bold text-2xl">Products</span>
            </a>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-slate-200 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a className="text-gray-600">Latest</a>
            </li>
            <li>
              <a className="text-gray-600">Oldest</a>
            </li>
          </ul>
        </div>

        <div className="join flex justify-center items-center">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
            onClick={() =>setPage("1")}
            defaultChecked
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="2"
            onClick={() => setPage("2")}
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="3"
            onClick={() => setPage("3")}
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="4"
            onClick={() =>setPage("4")}
          />
        </div>

        <div className="dropdown dropdown-hover text-2xl font-bold">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-gray-100 border-gray-100 hover:bg-slate-200 hover:border-0 btn-ghost"
          >
            <a>
              <span className="text-red-500 font-bold text-2xl">
                Categories
              </span>
            </a>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-slate-200 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a className="text-gray-600">All</a>
            </li>
            <li>
              <a className="text-gray-600">Ladies</a>
            </li>
            <li>
              <a className="text-gray-600">Men</a>
            </li>
            <li>
              <a className="text-gray-600">Kids</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
