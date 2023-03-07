import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  useEffect(() => {
    if (localStorage.getItem('email')) {
      handleLoggedIn()
    }
  }, [])

  return (
    <div className="container">
      <div className="row">
        <NavBar isLoggedIn={isLoggedIn} handleLoggedIn={handleLoggedIn} />
      </div>
    </div>
  )
}

export default App