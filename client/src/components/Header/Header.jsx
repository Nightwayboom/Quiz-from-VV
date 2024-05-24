// Заголовок приветсвия или че тут забыли]
import React from 'react'
// import { useState } from 'react'



function Header() {
  // const [count, setCount] = useState(0)

  return (
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={
        {color: "green",
        fontSize: "35px"}
        }>
      <img src='../../../public/iconPage.svg' alt="Logo" width="52" height="52" className="d-inline-block align-text-top"/>
      Quiz from VV
    </a>
  </div>
</nav>
  )
}

export default Header
