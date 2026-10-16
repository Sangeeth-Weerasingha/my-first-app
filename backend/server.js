require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

const todoSchema = new mongoose.Schema({ text: String });
const Todo = mongoose.model('Todo', todoSchema);

// MEKA ALUTHEN ADD KARA - HEALTH CHECK
app.get('/api/health', (req, res) => {
  res.json({ status: "ok", database: isConnected ? "connected" : "connecting" });
});

app.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});
app.post('/api/todos', async (req, res) => {
  const newTodo = new Todo({ text: req.body.text });
  await newTodo.save();
  res.json(newTodo);
});

app.delete('/api/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}
