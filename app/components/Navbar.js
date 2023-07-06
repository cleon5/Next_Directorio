import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark border-bottom border-bottom-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/Home">
          Direct
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/Home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="./list">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                a
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Perfil">
                You
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar