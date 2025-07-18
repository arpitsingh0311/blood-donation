import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.routes.js";
import donorRoute from "./routes/donor.routes.js";
import requestRoute from "./routes/request.routes.js";
import path from "path";

dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;


// api 
app.use("/api/users", userRoute);
app.use("/api/donor", donorRoute);
app.use("/api/request", requestRoute);

// ------------ Code For Deployment -------------

if(process.env.NODE_ENV === "production") {
  const dirpath = path.resolve();
  app.use(express.static('./client/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(dirpath, './client/dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});