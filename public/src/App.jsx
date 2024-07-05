import { useState } from 'react'
import reactLogo from "./components/assets/react.svg";
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./components/Nav"
import Home from "./components/Home"

function App() {
  const [page, setPage] = useState("home")
  const url = "https://server.yoelk20.tech"

  return (
    <>
      <Nav setPage={setPage} url={url} />
      {page === "home" && <Home url={url} />}
    </>
  )
}

export default App
