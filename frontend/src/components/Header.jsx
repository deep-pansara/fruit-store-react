import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Header = () => {

  let handleLogout = () => {
    localStorage.removeItem("fruitstore_token")
    window.location.assign("/")
  }

  let getUserDetails = () => {
    let token = localStorage.getItem("fruitstore_token")
    if (token === null) {
      return null;
    } else {
      try {
        let data = jwt_decode(token);
        setUser(data.name)
        return data
      } catch (error) {
        return null;
      }
    }
  }

  const [user, setUser] = useState("Guest")

  useEffect(() => {
    getUserDetails()
  }, [])
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary mt-1 rounded">
        <div className="container-fluid">
          {/* <p className="navbar-brand p-0 m-0"> */}
          <Link to="/" className="text-decoration-none text-dark">
            Fruit Store
          </Link>
          {/* </p> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse ms-5 "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu-items gap-5">
              <li className="nav-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"products"}>Products</Link>
              </li>
              <li className="nav-item">
                <Link to={"About"}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link to={"contact"}>Contact Us</Link>
              </li>
            </ul>
            <div className="text-dark d-flex justify-content-center align-items-center">
              {/* <div>
                <div className="cart-item-count">0</div>
              </div> */}
              {/* <button
                type="button"
                className="btn btn-light position-relative me-4"
              >
                <i className="fa-solid fa-cart-shopping fa-lg me-1 cart-icon cursor-pointer"></i>{" "}
                <span className="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-secondary">
                  10
                </span>
              </button> */}
              <div className="dropdown me-5">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user}
                </button>
                <ul className="dropdown-menu shadow">
                  {/* <li>
                    <a className="dropdown-item" href=".">
                      Add New Product
                    </a>
                  </li> */}
                  <li>
                    {user === "Guest" ?
                      <Link to="login" className="dropdown-item">
                        Login
                      </Link> : <button onClick={handleLogout} className="dropdown-item">
                        Logout
                      </button>
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
