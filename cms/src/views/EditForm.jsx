import AddForm from "../components/AddForm";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Toastify from "toastify-js";
import { baseUrl } from "../utils/baseUrl";
import { useState } from "react";
import { useEffect } from "react";

export default function EditForm() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  async function fetchProduct() {
    try {
      const { data } = await axios.get(`${baseUrl}/products/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.access_token}`
        }
      });
      setProduct(data.products);
    //   console.log(data.products, "<<<<<");
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.error,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
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
      fetchProduct();
    //   console.log(product, "<<<<<");
  }, []);

  async function handleSubmit(
    ev,
    name,
    description,
    price,
    imgUrl,
    stock,
    categoryId
  ) {
    ev.preventDefault();
    try {
      const editedData = {
        name,
        description,
        price: +price,
        imgUrl,
        stock: +stock,
        categoryId,
      };
      await axios.put(`${baseUrl}/products/${id}`, editedData, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Toastify({
        text: "Success edit product",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#00B29F",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();

      navigate("/");
    } catch (error) {
      Toastify({
        text: error.response.data.error,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
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

  return (
    <>
        <AddForm handleSubmit={handleSubmit} product={product} isEdit={true} />
    </>
  )
}
