const Session = require("../models/Session");

exports.bookSession = async (req, res) => {
  const session = await Session.create({
    mentorId: req.body.mentorId,
    startupId: req.user.id,
    date: req.body.date
  });
  res.json(session);
};

exports.mySessions = async (req, res) => {
  const sessions = await Session.find({ startupId: req.user.id });
  res.json(sessions);
};
