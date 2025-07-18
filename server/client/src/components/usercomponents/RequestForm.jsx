import React, { useState } from "react";
import axios from "axios";
import { REQUEST_API_ENDPOINT } from "../utils/data";
import "./RequestForm.css";
import { toast, ToastContainer } from "react-toastify";

const RequestForm = ({ setOpenR }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    hospitalName: "",
    reason: "",
    bloodGroup: "",
    city: "",
    contact: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${REQUEST_API_ENDPOINT}/create`, formData, {
        withCredentials: true,
      });
      toast.success("Registered as a donor!", toastOptions);
      setOpenR(false);
    } catch (error) {
      console.error(error);
      const errorMessage = error.response
        ? error.response.data.message
        : "Server error";
      toast.error(errorMessage, toastOptions);
    }
  };

  return (
    <div className="request-modal-wrapper">
      <div className="request-modal">
        <form onSubmit={handleSubmit} className="request-form">
          <h2 className="request-title">Blood Request Form</h2>

          {[
            "hospitalName",
            "reason",
            "bloodGroup",
            "city",
            "contact",
          ].map((field) => (
            <div className="form-group" key={field}>
              <label>{field.replace(/([A-Z])/g, " $1")}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                required
              />
            </div>
          ))}

          <button type="submit" className="request-submit-btn">
            Submit Request
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RequestForm;
