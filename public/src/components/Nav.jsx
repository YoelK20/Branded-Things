import img from "./assets/HM-Logo.png";

export default function Nav({ setPage }) {
  return (
    <>
      {/*Navbar*/}
      <nav className="navbar sticky top-0 z-10 p-3 bg-gray-100 rounded-md shadow-lg shadow-slate-600 hover:scale-105 transition-transform">
        <div className="navbar-start">
          <a onClick={() => setPage("home")} className="text-2xl font-bold px-6">
            <img src={img} alt="" className="w-[12.5%]" />
          </a>
        </div>
        <div className="navbar-center">
          <div className="dropdown dropdown-hover text-2xl font-bold">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-gray-100 border-gray-100 hover:bg-slate-200 hover:border-0 btn-ghost"
            >
              <a> 
                <span className="text-red-500 font-bold text-2xl">Products</span>
              </a>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-slate-200 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a className="text-gray-600">Cheapest</a>
              </li>
              <li>
                <a className="text-gray-600">Most Expensive</a>
              </li>
              <li>
                <a className="text-gray-600">Latest</a>
              </li>
              <li>
                <a className="text-gray-600">Oldest</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover text-2xl font-bold">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-gray-100 border-gray-100 hover:bg-slate-200 hover:border-0 btn-ghost"
            >
              <a> 
                <span className="text-red-500 font-bold text-2xl">Categories</span>
              </a>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-slate-200 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a className="text-gray-600">Ladies</a>
              </li>
              <li>
                <a className="text-gray-600">Men</a>
              </li>
              <li>
                <a className="text-gray-600">Kids</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <a className="text-2xl font-bold px-6">
            <span className="text-red-500">Logout</span>
          </a>
        </div>
      </nav>
    </>
  );
}
