import { useNavigate } from "react-router-dom";
import img from "./assets/HM-Logo.png";
import Toastify from "toastify-js";
export default function Nav() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    Toastify({
      text: "Success Logout",
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
    navigate("login");
  }

  return (
    <>
      {/*Navbar*/}
      <nav className="navbar sticky top-0 z-10 p-3 bg-gray-100 rounded-md shadow-lg shadow-slate-600 hover:scale-105 transition-transform">
        <div className="navbar-start">
          <a
            onClick={() => navigate("/")}
            className="text-2xl font-bold px-6"
          >
            <img src={img} alt="" className="w-[12.5%]" />
          </a>
        </div>
        <div className="dropdown dropdown-hover text-2xl font-bold">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-gray-100 border-gray-100 hover:bg-slate-200 hover:border-0 btn-ghost"
          >
            <a onClick={() => navigate("/")}>
              <span className="text-red-500 font-bold text-2xl">Home</span>
            </a>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-slate-200 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => navigate("/add")} className="text-gray-600">
                Add Product
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/add-user")} className="text-gray-600">
                Add User
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/categories")} className="text-gray-600">
                Categories
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <a className="text-2xl font-bold px-6">
            <button onClick={handleLogout}>
              <span className="text-red-500">Logout</span>
            </button>
          </a>
        </div>
      </nav>
    </>
  );
}
