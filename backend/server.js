const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('PASINDU GE BACKEND WEDA KARANAWAAA! 🔥');
});

app.get('/api/todos', (req, res) => {
  res.json([{ id: 1, text: "Day 4 Backend Igena gannawa" }]);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});