import React, { useState } from "react";
import Navbar from "../usercomponents/Navbar";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_ENDPOINT } from "../utils/data";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Signup = () => {

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    role: "", 
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
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    try{
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message, toastOptions);
      }
    }catch(error){
      console.error(error);
      const errorMessage = error.response
        ? error.response.data.message
        : "Server error";
      toast.error(errorMessage, toastOptions);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="main">
        <form onSubmit={submitHandler} className="form">
          <h1 className="heading">Sign Up</h1>
          <div className="form-item">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={input.name}
              placeholder="John Doe"
              onChange={changeEventHandler}
              className="input"
            />
          </div>
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
              {" "}
              <div className="radio-item">
                <input
                  type="radio"
                  name="role"
                  className="input"
                  value="User"
                  checked={input.role === "User"}
                  onChange={changeEventHandler}
                />
                <label className="radio-label">User</label>
              </div>{" "}
              <div className="radio-item">
                <input
                  type="radio"
                  name="role"
                  className="input"
                  value="Admin"
                  checked={input.role === "Admin"}
                  onChange={changeEventHandler}
                />
                <label className="radio-label">Admin</label>
              </div>
            </div>
          </div>
          <div>
            <button type="submit" className="submit-btn">
              SignUp
            </button>
          </div>
          <div className="end-text">
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login
            </Link>{" "}
            instead.
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
