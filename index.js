const mongoose = require("mongoose"); 1
const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const bodyParser = require("body-parser");
const { incomingRequestLogger } = require("./middleware/index.js");
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const jobRouter = require("./routes/job");
const { mongo } = require("mongoose");
const urlencoded = require("body-parser/lib/types/urlencoded.js");
app.use(incomingRequestLogger);
app.use("/api/v1", indexRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
    mongoose.connect(process.env.MONGOOSE_URI_STRING, {

    });
    mongoose.connection.on("error", (err) => {
        console.log(err);
    });
});



