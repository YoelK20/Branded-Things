import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../utils/baseUrl";
import axios from "axios";

export default function ProductDetails() {
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  async function fetchDetails() {
    const { data } = await axios.get(`${baseUrl}/public/products/${id}`);
    setProduct(data.products);
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <main className="px-10 my-8">
        <div className="flex flex-col my-6 items-center p-20 bg-gray-100 shadow">
          <img
            src={products.imgUrl}
            className="max-w-sm rounded-lg shadow mb-5"
          />
          <div className="flex-col">
            <div>
              <div className="texts">
                <h1 className="text-5xl font-bold text-accent-focus">
                  {products.name}
                </h1>
                <div className="py-6">
                  <p>{products.description}</p>
                  <br></br>
                  <p>Stock: {products.stock}</p>
                  <p>Price: {products.price}</p>
                </div>
              </div>
              <div className="buttons">
                <button
                  onClick={() => navigate("/")}
                  className= "btn btn-error"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
