import Request from "../models/request.model.js";

// CREATE a new blood request
export const createRequest = async (req, res) => {
  try {
    const { bloodGroup, reason, contact, city } = req.body;
    const userId = req.id; 

    const newRequest = new Request({
      userId,
      bloodGroup,
      reason,
      contact,
      city,
    });

    await newRequest.save();

    res.status(201).json({
      success: true,
      message: "Blood request created successfully",
      request: newRequest,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET all blood requests (admin view)
export const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find()
      .populate("userId", "name")
      .sort({ createdAt: -1 }); // Optional
    res.status(200).json({ success: true, requests });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE request status (approve/reject)
export const updateRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await Request.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Request not found" });
    }

    res.status(200).json({
      success: true,
      message: "Request status updated",
      request: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
