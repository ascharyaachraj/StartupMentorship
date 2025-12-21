const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  skills: [String],
  experience: Number,
  pricePerSession: Number,
  rating: { type: Number, default: 0 }
});

module.exports = mongoose.model("Mentor", mentorSchema);
