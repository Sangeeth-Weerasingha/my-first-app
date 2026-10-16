const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: "API is 100% Working! Aluthen patan gatta!" });
});

module.exports = app;