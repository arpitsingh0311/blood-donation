import Donor from "../models/donor.model.js";

export const registerDonor = async (req, res) => {
  try {
    const { bloodGroup, city, contact, lastDonationDate } = req.body;
    const userId = req.id; 

    // console.log("Request body:", req.body); 
    // console.log("User ID from token:", userId);

    const existing = await Donor.findOne({ userId });
    if (existing) {
      return res
        .status(400)
        .json({ message: "User already registered as donor" });
    }

    const donor = new Donor({
      userId,
      bloodGroup,
      city,
      contact,
      lastDonationDate,
    });

    await donor.save();

    res.status(201).json({
      message: "Donor registered successfully",
      donor,
    });
  } catch (err) {
    console.error("Error in registerDonor:", err);
    res.status(500).json({ error: err.message });
  }
};

export const getAllDonors = async (req, res) => {
  try {
    const donors = await Donor.find().populate("userId", "name email");
    res.status(200).json({ success: true, donors });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};