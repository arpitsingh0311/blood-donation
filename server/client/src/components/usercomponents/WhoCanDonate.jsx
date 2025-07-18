import React from "react";
import "./WhoCanDonate.css";

const WhoCanDonate = () => {
  return (
    <div>
        <h2 className="section-heading">Become a Donor</h2>
      <section className="section-donor container">
        <div className="donor-container">
          {/* Section 1 - Eligibility */}
          <div className="donor-grid">
            <div className="donor-grid-heading">
              Who Can Donate? <br />
              (Eligibility Criteria)
            </div>
            <div className="donor-grid-content">
              <ul className="donor-list">
                <li className="donor-list-item">
                  <span>Age:</span> 18–65
                </li>
                <li className="donor-list-item">
                  <span>Weight:</span> Minimum 50 kg
                </li>
                <li className="donor-list-item">Good overall health</li>
                <li className="donor-list-item">
                  No recent illnesses or infections
                </li>
                <li className="donor-list-item">
                  No history of chronic diseases
                </li>
                <li className="donor-list-item">
                  Haven’t donated blood in the last 3 months (for men) and 4
                  months (for women)
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 - Donation Process */}
          <div className="donor-grid donor-grid-reverse">
            <div className="donor-grid-heading">
              How to Donate? <br />
              (Donation Process)
            </div>
            <div className="donor-grid-content">
              <ul className="donor-list">
                <li className="donor-list-item">
                  <span>Register:</span> Fill out the form
                </li>
                <li className="donor-list-item">
                  <span>Health Check-up:</span> Blood pressure, hemoglobin
                  levels, and general fitness will be checked.
                </li>
                <li className="donor-list-item">
                  <span>Donate Blood:</span> The process takes about 10–15
                  minutes.
                </li>
                <li className="donor-list-item">
                  <span>Post-Donation Care:</span> Rest for a while and stay
                  hydrated
                </li>
                <li className="donor-list-item">
                  Feel proud of saving a life!
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 - Benefits */}
          <div className="donor-grid">
            <div className="donor-grid-heading">Benefits of Donating Blood</div>
            <div className="donor-grid-content">
              <ul className="donor-list">
                <li className="donor-list-item">Boosts heart health</li>
                <li className="donor-list-item">Reduces iron levels</li>
                <li className="donor-list-item">
                  Helpful in preventing certain diseases
                </li>
                <li className="donor-list-item">
                  Stimulates blood cell production
                </li>
                <li className="donor-list-item">
                  Gives you a sense of fulfillment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoCanDonate;
