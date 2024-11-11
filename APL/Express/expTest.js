const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Harsh!');
});

app.post('/show', (req, res) => {
    const data = req.body;
    res.send({
        message: 'Data received successfully',
        receivedData: data
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
