const express = require("express");
const router = express.Router();
const { Job } = require("../schema/job.schema");
const authMiddleware = require("../middleware/auth");

router.post("/create", authMiddleware, async (req, res) => {
    try {
        const { name, logo, position, salary, jobType, remote, location, description, about, skills, information } = req.body;
        const { user } = req;
        const jobs = skills.split(",").map(skill => skill.trim());
        const job = new Job({ name, logo, position, salary, jobType, remote, location, description, about, skills: jobs, information, creator: user });
        await job.save();
        res.status(200).json({ message: "Job created successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "Job not created" });
    }
})
router.get("/", async (req, res) => {
    const jobs = await Job.find().select("-_id -creator");
    res.status(200).json(jobs);
})

module.exports = router;
