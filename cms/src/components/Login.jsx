import axios from "axios"
import { useState } from "react";
import Toastify from "toastify-js"

export default function Login({setPage, url}) {
  const[email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  async function handleLogin(event){
    event.preventDefault();
    try {
      let { data } = await axios.post(`${url}/login`, {email, password}, {})
      console.log(data);
      localStorage.setItem("access_token", data.access_token)
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
            fontWeight: "bold"
        }
    }).showToast();
    setPage('home')
    } catch (error) {
      console.log(error)
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
              <button onClick={handleLogin} className="btn btn-accent">Log In</button>
            </div>
          </form>
        </div>
      </div>
      <br />
    </>
  );
}
