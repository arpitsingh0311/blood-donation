import express from "express";
import {
  createRequest,
  getAllRequests,
  updateRequestStatus,
} from "../controllers/request.controller.js";
import authenticateToken from "../middleware/isAuthentication.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();


router.post("/create", authenticateToken, createRequest);
router.get("/all", authenticateToken, getAllRequests);
router.put("/update/:id", authenticateToken, isAdmin, updateRequestStatus);

export default router;