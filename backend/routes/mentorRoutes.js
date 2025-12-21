const router = require("express").Router();
const { protect } = require("../middleware/authMiddleware");
const { createMentor, getMentors, getMentorById } = require("../controllers/mentorController");

router.get("/", getMentors);
router.get("/:id", getMentorById);
router.post("/", protect, createMentor);

module.exports = router;
