const express = require("express");
const router = express.Router();
const authcontrollers = require("../controller/auth-controller");
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
// app.use();
// router.get("/", (req, res) => {
//     res.status(200).send("Welcom to register page using router.");
// });


router.route("/").get(authcontrollers.home);

// router.route("/").get((req, res) => {
//     res
//         .status(200)
//         .send("Welcom to mern using router.");
// });


//validation
router
    .route("/register")
    .post(validate(signupSchema), authcontrollers.register);
// router.post('/register', validate(signupSchema), authcontrollers.register);


//validation for login
router.route("/login").post(validate(loginSchema), authcontrollers.login);
// router.route("/login").post(authcontrollers.login);


// router.route("/register").get((req, res) => {
//     res
//         .status(200)
//         .send("Welcom to register page using router.");
// });
module.exports = router;