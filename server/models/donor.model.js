import mongoose from "mongoose";

const donorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bloodGroup: { type: String, required: true },
    city: { type: String, required: true },
    contact: { type: String, required: true },
    lastDonationDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("Donor", donorSchema);
