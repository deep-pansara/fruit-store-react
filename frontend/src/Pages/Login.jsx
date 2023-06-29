import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { toast } from "react-hot-toast";
import jwt_decode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();


  const [data, setData] = useState({
    email: "",
    password: "",
  });

  let handleonSuccess = (credentialResponse) => {
    let token = credentialResponse.credential;
    try {
      let data = jwt_decode(token);
      console.log(data);
      localStorage.setItem("fruitstore_token", token)
      toast("Login successfully")
      window.location.assign("/")
    } catch (error) {
      console.log(error);
      localStorage.removeItem("fruitstore_token")
    }
    console.log(credentialResponse.credential);
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:5000/login";
    const { email, password } = data;

    if (email && password) {
      const sendData = await axios
        .post(URL, data)
        .then((result) => {
          const { data } = result;
          toast(data.message);
          if (data.message === 'Login successfully') {
            setTimeout(() => {
              navigate("/");
            }, 1200);
          }

        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please Enter Require Fields");
    }
  };
  return (
    <>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h2 className="card-title text-center mb-5 fw-light  fw-bold">
                  Log in
                </h2>
                <p className="text-danger">Login with email is currently disabled</p>
                <form onSubmit={handleOnSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      name="email"
                      value={data.email}
                      onChange={handleOnChange}
                      placeholder="name@example.com"
                      disabled
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      name="password"
                      value={data.password}
                      onChange={handleOnChange}
                      placeholder="Password"
                      disabled
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className=" mb-3">
                    <label htmlFor="signup">Don't have an account?</label>
                    <Link to="/signup"> sign up</Link>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn-login text-uppercase fw-bold"
                      type="submit"
                      disabled
                    >
                      Log in
                    </button>
                  </div>
                </form>
                <hr className="my-4" />
                <GoogleOAuthProvider clientId="353249366738-1mb47tih30tvn3uub8qmgbfirgemev44.apps.googleusercontent.com">
                  <div className="d-grid justify-content-center">
                    {/* <button
                      className="btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      <i className="fab fa-google me-2"></i> Log in with Google
                    </button> */}
                    <GoogleLogin
                      onSuccess={handleonSuccess}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                  </div>
                </GoogleOAuthProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
