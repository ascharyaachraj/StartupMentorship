const router = require("express").Router();
const { protect } = require("../middleware/authMiddleware");
const { bookSession, mySessions } = require("../controllers/sessionController");

router.post("/book", protect, bookSession);
router.get("/my", protect, mySessions);

module.exports = router;
