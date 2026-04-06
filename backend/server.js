import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import eventRoutes from "./src/routes/eventRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ ROOT route (fix for Render)
app.all("/", (req, res) => {
  res.send("API Running...");
});

// ✅ routes
app.use("/api/events", eventRoutes);

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ✅ PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});