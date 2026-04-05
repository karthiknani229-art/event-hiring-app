import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  console.log("ROUTE HIT");
  console.log("BODY:", req.body);

  res.json({ success: true });
});

export default router;