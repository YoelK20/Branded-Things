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
         
        </div>
        <div className="navbar-end">
          <a className="text-2xl font-bold px-6">
            {/* <span className="text-red-500"></span> */}
          </a>
        </div>
      </nav>
    </>
  );
}
