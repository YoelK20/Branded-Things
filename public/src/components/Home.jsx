import { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";


export default function Home({url}) {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  async function fetchProducts(){
    try {
      const {data} = await axios.get(`${url}/public/products?sort=createdAt&category=&author=&search=${search}&page[data]=&page[number]=`)
      setProducts(data.data)
      console.log(data.data);

    } catch (error) {
      console.log(error);
    }
  }

    useEffect(() =>{
      fetchProducts()
    },[search])

  return (
    <>
      {/*Home */}
      <div className="mt-8">
        <div>
          <form
            action=""
            method="get"
            className="flex justify-center items-center "
          >
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="input input-bordered  w-[85%] h-[50px] mx-1 input-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>

        <main className="grid grid-cols-2 gap-10 px-10 my-8">
          {products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </main>
      </div>
      <div>
        <div className="join">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
            defaultChecked
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div>
      </div>
    </>
  );
}
