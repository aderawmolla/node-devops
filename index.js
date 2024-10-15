const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello, World! This is my Node.js app running in a Docker container.');
});

app.get('/test', (req, res) => {
    res.send('Hello, World! this the test project');
});


app.listen(port,'0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${port}`);
});
