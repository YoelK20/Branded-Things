import { useEffect, useState } from "react";
import Table from "../components/Table"
import axios from "axios";
import Toastify from 'toastify-js'
import { baseUrl } from "../utils/baseUrl";

export default function Home() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  async function fetchProducts (){
    try {
      const { data } = await axios.get(`${baseUrl}/products?sort=createdAt&category=&author=&search=${search}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`
        }
      })
      // console.log(data.products);
      setProducts(data.products)

    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.error,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold"
        }
    }).showToast();
    }
  }

    useEffect(() => {
      fetchProducts()
    }, [search])

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
      </div>
      <main className="flex items-center justify-center gap-10 my-8">
        <Table products={products} fetchProducts={fetchProducts}/>
      </main>
    </>
  );
}
