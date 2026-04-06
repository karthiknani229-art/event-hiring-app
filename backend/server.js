import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import eventRoutes from "./src/routes/eventRoutes.js";
import Event from "./src/models/Event.js"; // ✅ ADD THIS

dotenv.config(); // ✅ ONLY THIS (remove require)

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// logging middleware (move up for better debugging)
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

// routes
app.use("/api/events", eventRoutes);

// test route
app.all("/", (req, res) => {
  res.send("API Running...");
});

// create event route
app.post("/api/events", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    const event = new Event(req.body);
    await event.save();

    res.status(201).json(event);
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// start server
const PORT = process.env.PORT || 5000;
console.log("MONGO_URI:", process.env.MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});