import React from "react";
import "./Header.css";
import homeImg from "../../assets/home-img2.jpg";

const Header = () => {
  return (
    <div className="section">
      <div className="home">
        <div className="home-text-box">
          <p className="text-slogan">
            Every Drop Counts, and Every Life Matters.
          </p>
          <p className="text">
            At Vital Drops, we believe every drop of blood can save a life. Our
            mission is to connect donors with those in urgent need, making blood
            donation easy, accessible, and life-saving.
          </p>
          <div className="home-btn">
            <button className="btn btn-donate">Donate Now</button>
            <button className="btn btn-find">Find a Donor</button>
          </div>
          <p className="home-info">
            <span>50,000+</span> donations since last year!
          </p>
        </div>
        <div className="home-img-box">
          <img src={homeImg} alt="image" className="home-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
