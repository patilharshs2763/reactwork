require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

//Handling cors policy issues

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(express.json());

//Mount the router :To use the router in your main express app, you can mount it at a specific url
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

// app.get("/", (req, res) => {
//     res.status(200).send("Welcom Harshvardhan!");
// });

// app.get("/register", (req, res) => {
//     res.status(200).send("Welcom to register page.");
// });

connectDb().then(() => {
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`server is running at PORT: ${PORT}`);
    });

});