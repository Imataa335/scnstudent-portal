const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let studentResults = []; // This would typically be replaced with a database

app.post('/results', (req, res) => {
    const result = req.body;
    studentResults.push(result);
    res.status(201).send();
});

app.get('/results/:studentId', (req, res) => {
    const results = studentResults.filter(r => r.studentId === req.params.studentId);
    res.json(results);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});