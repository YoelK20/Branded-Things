import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import { baseUrl } from "../utils/baseUrl";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      let { data } = await axios.post(`${baseUrl}/login`, { email, password }, {});
      // console.log(data);
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
      Toastify({
        text: "Success Login",
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
      {/* Login */}
      <div className="relative flex flex-col justify-center h-[85dvh] mt-10 overflow-hidden bg-base-100 shadow-2xl rounded-xl">
        <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-200">
          <h1 className="text-3xl font-semibold text-center text-accent-focus">
            Log In
          </h1>

          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full input input-bordered input-accent"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered input-accent"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button onClick={handleLogin} className="btn btn-accent">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
    </>
  );
}
