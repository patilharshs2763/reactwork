const jwt = require("jsonwebtoken");
var secretKey = "login-application";

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        jwt.verify(req.token, secretKey, (err, authData) => {
            if (err) {
                return res.status(403).json({ message: "Invalid token" });
            } else {
                // req.authData = authData; // Store the authenticated user's data
                next();
            }
        })
    } else {
        return res.status(401).json({ message: "Token is required" });
    }

}

module.exports = verifyToken;