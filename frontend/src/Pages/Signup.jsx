import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data);


  let handleonSuccess = (credentialResponse) => {
    let token = credentialResponse.credential;
    try {
      let data = jwt_decode(token);
      console.log(data);
      localStorage.setItem("fruitstore_token", token)
      toast("SignUp successfully")
      window.location.assign("/")
    } catch (error) {
      console.log(error);
      localStorage.removeItem("fruitstore_token")
    }
    console.log(credentialResponse.credential);
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = async (e) => {
    const URL = "http://localhost:5000/signup";
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await axios.post(URL, data)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
              toast("Successfully Register");
              navigate("/login");
            }
          }).catch((err) => {
            console.log(err);
            toast(err.response.data);
          })

      } else {
        toast("Password Not Match");
      }
    } else {
      toast("Fill Require Fields");
    }

  };
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded mt-5">
              <div className="card-body p-4 p-sm-5">
                <h2 className="card-title text-center mb-4 fw-light  fw-bold">
                  Sign up
                </h2>
                <p className="text-danger">Signup with email is currently disabled</p>
                <form onSubmit={handleOnSubmit}>
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={data.firstName}
                      onChange={handleOnChange}
                      placeholder="First Name"
                      disabled
                    />
                    <label htmlFor="floatingInput">First Name</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={data.lastName}
                      onChange={handleOnChange}
                      placeholder="Last Name"
                      disabled
                    />
                    <label htmlFor="floatingInput">Last Name</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={handleOnChange}
                      placeholder="name@example.com"
                      disabled
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={data.password}
                      onChange={handleOnChange}
                      placeholder="Password"
                      disabled
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={data.confirmPassword}
                      onChange={handleOnChange}
                      placeholder="Confirm Password"
                      disabled
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                  </div>
                  <div className=" mb-3">
                    <label htmlFor="login">Already have an account? </label>
                    <Link to="/login"> Log in</Link>
                  </div>
                  <GoogleOAuthProvider clientId="353249366738-1mb47tih30tvn3uub8qmgbfirgemev44.apps.googleusercontent.com">

                    <div className="d-grid">
                      <button
                        className="btn-login text-uppercase fw-bold"
                        type="submit"
                        disabled
                      >
                        Sign Up
                      </button>
                    </div>
                    <hr className="my-4" />
                    <div className="d-grid justify-content-center">
                      {/* <button
                        className="btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        <i className="fab fa-google me-2"></i>Sign up with Google
                      </button> */}


                      <GoogleLogin
                        onSuccess={handleonSuccess}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                      />
                    </div>
                  </GoogleOAuthProvider>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
