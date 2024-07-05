import AddForm from "../components/AddForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import { baseUrl } from "../utils/baseUrl";

export default function AddProduct() {
  const navigate = useNavigate();
  async function handleSubmit(ev, name, description, price, imgUrl, stock, categoryId ) {
    ev.preventDefault();
    const newData = {
      name,
      description,
      price: Number(price),
      stock: Number(stock),
      imgUrl,
      categoryId,
    };
    // console.log(newData);
    try {
      const { data } = await axios.post(`${baseUrl}/products`, newData, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
    });

      Toastify({
        text: "Success add new data",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
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
      console.log(error);
      Toastify({
        text: "error",
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

  return (
    <>
        <AddForm handleSubmit={handleSubmit} isEdit={false}/>
    </>
  )
}
