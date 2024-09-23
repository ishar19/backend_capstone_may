const express = require("express");
const router = express.Router();

router.get("/ping", (req, res) => {
    res.send("Hello from recruity");
});



module.exports = router;

// :3000/
// :3000/api/v1/ping