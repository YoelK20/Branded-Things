import axios from "axios";
import { useState } from "react";
import Toastify from "toastify-js";
import { baseUrl } from "../utils/baseUrl";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate()

  async function handleAdd(e) {
    e.preventDefault();
    const newUser = { username, email, password, phoneNumber, address };
    try {
      const { data } = await axios.post(`${baseUrl}/add-user`, newUser, {
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });

    //   console.log(newUser);
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
      navigate("home");
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.message,
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
    <div className="relative flex flex-col justify-center h-[85dvh] overflow-hidden bg-base-100 shadow-2xl rounded-xl">
    <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-200">
        <h1 className="text-3xl font-semibold text-center text-accent-focus">
            Add New User
            </h1>
      <form onSubmit={handleAdd}>
        <div className=" grid grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="Email"
              placeholder="Enter your Email"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Your Password"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Phonenumber</span>
            </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="Enter Your Phone Number"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Address</span>
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Enter Your Address"
              className="w-full input input-bordered input-primary"
            />
            {/* <a href="" class="text-xs ml-1 text-gray-600 hover:text-primary">Want to upload a file instead?</a> */}
          </div>
        </div>
        <div>
          <button className="btn btn-accent mt-10 w-full">
            Add New User
          </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
}
