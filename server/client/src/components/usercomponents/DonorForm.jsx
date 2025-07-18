import React, { useState } from "react";
import Navbar from "./Navbar";
import "../pages/Signup.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DONOR_API_ENDPOINT } from "../utils/data"; 
import "./DonorForm.css"

const DonorForm = ({ setOpen }) => {
  const [input, setInput] = useState({
    bloodGroup: "",
    city: "",
    contact: "",
    lastDonationDate: "",
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
      const res = await axios.post(`${DONOR_API_ENDPOINT}/register`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success("Registered as a donor!", toastOptions);
        navigate("/");
        setOpen(false);
      } else {
        toast.error(res.data.message, toastOptions);
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "Server error";
      toast.error(errorMessage, toastOptions);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="donor-modal-wrapper">
        <div className="donor-modal">
          <form onSubmit={submitHandler} className="donor-form">
            <h2 className="donor-title">Donor Registration</h2>

            <div className="form-group">
              <label>Blood Group</label>
              <input
                type="text"
                name="bloodGroup"
                value={input.bloodGroup}
                onChange={changeEventHandler}
                placeholder="e.g. A+"
                required
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={input.city}
                onChange={changeEventHandler}
                placeholder="Enter your city"
                required
              />
            </div>

            <div className="form-group">
              <label>Contact</label>
              <input
                type="text"
                name="contact"
                value={input.contact}
                onChange={changeEventHandler}
                placeholder="Phone number"
                required
              />
            </div>

            <div className="form-group">
              <label>Last Donation Date</label>
              <input
                type="date"
                name="lastDonationDate"
                value={input.lastDonationDate}
                onChange={changeEventHandler}
              />
            </div>

            <button type="submit" className="donor-save-btn">
              Register as Donor
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonorForm;
