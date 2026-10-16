const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => { res.json({ message: "Root is Working!" }); });
app.get('/api', (req, res) => { res.json({ message: "API is 100% Working!" }); });
app.get('/api/:any', (req, res) => { res.json({ message: "API is 100% Working!" }); });
module.exports = app;
