import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import DonorForm from "./DonorForm";
import RequestForm from "./RequestForm";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/data";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openR, setOpenR] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get(`${USER_API_ENDPOINT}/getUser`, { withCredentials: true });
        if (res.data.success) {
          setIsLoggedIn(true);
          setUser(res.data.user);
        }
      } catch (err) {
        setIsLoggedIn(false);
        setUser(null);
      }
    };
    checkLogin();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(`${USER_API_ENDPOINT}/logout`, {}, { withCredentials: true });
      setIsLoggedIn(false);
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="header">
        <a href="#" className="logo">
          Vital Drops
        </a>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link to="/" className="main-nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/donor/list" className="main-nav-item">
                Donor List
              </Link>
            </li>
            <li>
              <button className="main-nav-item" onClick={() => setOpen(!open)}>
                Become a Donor
              </button>
            </li>
            <li>
              <button
                className="main-nav-item"
                onClick={() => setOpenR(!openR)}
              >
                Request
              </button>
            </li>
            <li>
              <Link to="/request/list" className="main-nav-item">
                Request List
              </Link>
            </li>

            {!isLoggedIn ? (
              <>
                <li>
                  <Link to="/login" className="main-nav-item sign-up">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="main-nav-item sign-up">
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span className="main-nav-item">Hi, {user?.name}</span>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="main-nav-item sign-up"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      <div className={`form-popup-container ${open ? "visible" : "hidden"}`}>
        <DonorForm setOpen={setOpen} />
      </div>
      <div className={`form-popup-container ${openR ? "visible" : "hidden"}`}>
        <RequestForm setOpenR={setOpenR} />
      </div>
    </div>
  );
};

export default Navbar;
