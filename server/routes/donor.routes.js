import express from "express";
import { getAllDonors, registerDonor } from "../controllers/donor.controller.js";
import authenticateToken from "../middleware/isAuthentication.js"; 

const router = express.Router();

router.post("/register", authenticateToken, registerDonor);
router.get("/list", authenticateToken, getAllDonors);


export default router;
