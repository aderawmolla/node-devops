const express = require('express');
const app = express();
const port = process.env.PORT || 2000;



app.get('/', (req, res) => {
    res.send('Hello, World! This is my Node.js app running in a Docker container.');
});

app.get('/test', (req, res) => {
    res.send('Hello, World! this the test project');
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
