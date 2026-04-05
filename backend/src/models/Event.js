import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: String,
  eventType: String,
  startDate: Date,
  endDate: Date,
  location: String,
  venue: String,

  category: {
    type: String,
    enum: ["planner", "performer", "crew"],
    required: true
  },

  details: {
    type: Object // dynamic fields
  }

}, { timestamps: true });

export default mongoose.model("Event", eventSchema);