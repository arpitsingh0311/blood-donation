import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../usercomponents/Navbar";
import { REQUEST_API_ENDPOINT } from "../utils/data";
import "./RequestList.css";

const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${REQUEST_API_ENDPOINT}/all`, {
        withCredentials: true,
      });
      setRequests(res.data.requests);
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="donor-list-container">
        <h2 className="title">All Blood Requests</h2>
        {loading ? (
          <p>Loading...</p>
        ) : requests.length === 0 ? (
          <p>No blood requests available.</p>
        ) : (
          <table className="donor-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Blood Group</th>
                <th>City</th>
                <th>Contact</th>
                <th className="right">Date</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req._id}>
                  <td>{req.userId?.name || "Unknown"}</td>
                  <td>{req.bloodGroup}</td>
                  <td>{req.city}</td>
                  <td>{req.contact}</td>
                  <td className="right">
                    {new Date(req.createdAt).toLocaleDateString()}
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

export default RequestList;
