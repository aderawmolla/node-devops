const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World! This is my Node.js app running in a Docker container after opensearch3.');
});

app.get('/test', (req, res) => {
    res.send('Hello, World! This is the test project after open search3.');
});

// Update the log statement to reflect the correct URL
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
});
