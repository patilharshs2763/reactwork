const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("Welcom to register page using router.");
    }
    catch (error) {
        next(error);
        // console.log(error);
    }
}

// user registration
const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "Email olready exist" });

        }
        //hash the pass
        //can rewrite as bellow
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password,
            // password: hash_password,
        });
        res
            .status(201).json({
                // msg:userCreated,
                msg: "User created successfully",
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString(),
            });
        // .json({ data });
    }
    catch (error) {
        next(error);
        // res
        //     .status(401)
        //     .json({ msg: "internal server error" });
    }
}

//user login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ msg: "Invalid credentials!" });
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);
        if (user) {
            res
                .status(200).json({
                    // msg:userCreated,
                    msg: "Login successfully",
                    token: await userExist.generateToken(),
                    userId: userExist._id.toString(),
                });
        }
        else {
            res
                .status(401)
                .json({ msg: "Invalid email or password" });
        }
    } catch (error) {
        next(error);
        // res
        //     .status(500)
        //     .json({ msg: "internal server error" });
    }
}

module.exports = { home, register, login };