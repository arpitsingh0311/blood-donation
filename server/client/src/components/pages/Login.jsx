import React, { useState } from "react";
import Navbar from "../usercomponents/Navbar";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { USER_API_ENDPOINT } from "../utils/data";

const Login = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    role: "User", // default role
  });

  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message, toastOptions);
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error.response
        ? error.response.data.message
        : "Server error";
      toast.error(errorMessage, toastOptions);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="main">
        <form onSubmit={submitHandler} className="form">
          <h1 className="heading">Login</h1>

          <div className="form-item">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={input.email}
              placeholder="JohnDoe@gmail.com"
              onChange={changeEventHandler}
              className="input"
            />
          </div>

          <div className="form-item">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              value={input.password}
              placeholder="******"
              onChange={changeEventHandler}
              className="input"
            />
          </div>

          <div className="form-item role">
            <label className="label">Role</label>
            <div className="radio-group">
              <div className="radio-item">
                <input
                  type="radio"
                  name="role"
                  value="User"
                  checked={input.role === "User"}
                  onChange={changeEventHandler}
                  className="input"
                />
                <label className="radio-label">User</label>
              </div>
              <div className="radio-item">
                <input
                  type="radio"
                  name="role"
                  value="Admin"
                  checked={input.role === "Admin"}
                  onChange={changeEventHandler}
                  className="input"
                />
                <label className="radio-label">Admin</label>
              </div>
            </div>
          </div>

          <div>
            <button type="submit" className="submit-btn">
              Login
            </button>
          </div>

          <div className="end-text">
            Don't have an account?{" "}
            <Link to="/signup" className="link">
              Sign up
            </Link>{" "}
            instead.
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
