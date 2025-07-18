import React, { useEffect, useState } from "react";
import axios from "axios";
import { DONOR_API_ENDPOINT} from "../utils/data";
import Navbar from "../usercomponents/Navbar";
import "./DonorList.css";

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDonors = async () => {
    try {
      const res = await axios.get(`${DONOR_API_ENDPOINT}/list`, {
        withCredentials: true,
      });
      setDonors(res.data.donors);
    } catch (error) {
      console.error("Error fetching donors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="donor-list-container">
        <h2 className="title">Available Donors</h2>
        {loading ? (
          <p>Loading...</p>
        ) : donors.length === 0 ? (
          <p>No donors registered yet.</p>
        ) : (
          <table className="donor-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Blood Group</th>
                <th>City</th>
                <th>Contact</th>
                <th className="right">Last Donation</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor) => (
                <tr key={donor._id}>
                  <td>{donor?.userId?.name}</td>
                  <td>{donor?.bloodGroup}</td>
                  <td>{donor?.city}</td>
                  <td>{donor?.contact}</td>
                  <td className="right">
                    {donor?.lastDonationDate
                      ? new Date(donor.lastDonationDate).toLocaleDateString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DonorList;
