import express from "express";
const router = express.Router();

// ✅ GET all events (test route)
router.get("/", async (req, res) => {
  try {
    res.json({ message: "Events API Working ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;