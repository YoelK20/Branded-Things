import { useEffect, useState } from "react";
import reactLogo from "./components/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import AddForm from "./components/AddForm";
import AddUser from "./components/AddUser";

function App() {
  const [page, setPage] = useState("home");
  const url = "https://server.yoelk20.tech";
  let token = localStorage.access_token;

  useEffect(() => {
    if (token) {
      setPage("home");
    } else {
      setPage("login");
    }
  }, []);

  return (
    <>
      {page !== "login" && <Nav setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} url={url} />}
      {page === "home" && <Home url={url}/>}
      {page === "form" && <AddForm setPage={setPage} url={url}/>}
      {page === "UserForm" && <AddUser setPage={setPage} url={url}/>}
    </>
  );
}

export default App;
