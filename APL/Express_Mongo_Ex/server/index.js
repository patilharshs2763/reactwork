const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/User');  // Import user routes
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.use('/users', userRoutes);  // Route for user-related operations

app.get("/", async (req, res) => {
    res.send("Hello Harshvardhan!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
