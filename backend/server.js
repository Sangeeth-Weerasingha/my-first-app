require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

/// MongoDB Connect - Vercel walata hari vidiya
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("MongoDB Connect Wela! 🔥");
  } catch (err) {
    console.log("Mongo Error:", err);
  }
}

// Eka request ekakma enna kalin DB connect karanna
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

const todoSchema = new mongoose.Schema({
  text: String
});

const Todo = mongoose.model('Todo', todoSchema);

app.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/api/todos', async (req, res) => {
  const newTodo = new Todo({ text: req.body.text });
  await newTodo.save();
  res.json(newTodo);
});

// Vercel ekata ona eka
module.exports = app;

const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
}