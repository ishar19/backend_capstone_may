const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { User } = require("./user.schema");
const jobSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    jobType: {
        type: String,
        required: true,
        enum: ["full-time", "part-time", "contract", "internship"]
    },
    remote: {
        type: Boolean,
        required: true,
        default: false
    }, location: {
        type: String,
        required: true
    }, description: {
        type: String,
        required: true
    }, about: {
        type: String,
        required: true
    },
    skills: {
        type: [Array],
        required: true
    }, information: {
        type: String,
        required: true
    }, creator: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }
})

const Job = mongoose.model("Job", jobSchema);

module.exports = {
    Job
}