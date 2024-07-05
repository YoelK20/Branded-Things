import axios from "axios";
import { useEffect, useState } from "react";
import Toastify from "toastify-js";
import { baseUrl } from "../utils/baseUrl";
import { useNavigate } from "react-router-dom";

export default function AddForm({ handleSubmit, product, isEdit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [stock, setStock] = useState(0);
  const [categoryId, setCategoryId] = useState(1);
  const [categories, setCategories] = useState([]);
  
  // console.log(name, "ini add++");
  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setImgUrl(product.imgUrl);
      setStock(product.stock);
      setCategoryId(product.categoryId);
    }
  }, [product]);

  //Fetching data Categories
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
      Toastify({
        text: error.response.data.message.map((el) => el),
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
          fontWeight: "bold",
        },
      }).showToast();
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      {/* Add Product Form */}
      <div className="relative flex flex-col justify-center h-[85dvh] overflow-hidden bg-base-100 shadow-2xl rounded-xl">
        <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-200">
          <h1 className="text-3xl font-semibold text-center text-accent-focus pb-4">
            {isEdit ? 'Edit Product' : 'Add New Product'}
          </h1>
          <form
            onSubmit={(ev) =>
              handleSubmit(
                ev,
                name,
                description,
                price,
                imgUrl,
                stock,
                categoryId
              )
            }
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="text-base label-text">Name</span>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full input input-bordered input-primary"
                  value={name}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Description</span>
                </label>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  placeholder="Enter Description"
                  className="w-full input input-bordered input-primary"
                  value={description}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Price</span>
                </label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="Enter Price"
                  className="w-full input input-bordered input-primary"
                  value={price}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Stock</span>
                </label>
                <input
                  onChange={(e) => setStock(e.target.value)}
                  type="number"
                  placeholder="Enter Stock"
                  className="w-full input input-bordered input-primary"
                  value={stock}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Image (URL)</span>
                </label>
                <input
                  onChange={(e) => setImgUrl(e.target.value)}
                  type="text"
                  placeholder="Image URL"
                  className="w-full input input-bordered input-primary"
                  value={imgUrl}
                />
                {/* <a href="" class="text-xs ml-1 text-gray-600 hover:text-primary">Want to upload a file instead?</a> */}
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Category</span>
                </label>
                <select
                  className="w-full input input-bordered input-primary"
                  name="category"
                  id=""
                  onChange={(el) => setCategoryId(el.target.value)}
                  value={categoryId}
                >
                  {categories.map((c) => {
                    return (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-accent mt-5 ml-[155px]">
              {isEdit ? 'Edit Product' : 'Add New Product'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
