const Mentor = require("../models/Mentor");

exports.createMentor = async (req, res) => {
  const mentor = await Mentor.create({ ...req.body, userId: req.user.id });
  res.json(mentor);
};

exports.getMentors = async (req, res) => {
  const mentors = await Mentor.find().populate("userId", "name email");
  res.json(mentors);
};

exports.getMentorById = async (req, res) => {
  const mentor = await Mentor.findById(req.params.id).populate("userId");
  res.json(mentor);
};
