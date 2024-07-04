import { useState } from 'react'
import reactLogo from "./components/assets/react.svg";
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./components/Nav"
import Home from "./components/Home"

function App() {
  const [page, setPage] = useState("home")

  return (
    <>
      <Nav setPage={setPage} />
      {page === "home" && <Home />}
    </>
  )
}

export default App
