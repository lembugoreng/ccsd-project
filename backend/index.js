const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

// Configure CORS to allow requests from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// Routes
app.get('/todos', async (req, res) => {
  console.log("Todos is all good!")
  const { rows } = await pool.query('SELECT * FROM todos ORDER BY id ASC');
  res.json(rows);
});

app.post('/todos', async (req, res) => {
  const { task } = req.body;
  const result = await pool.query(
    'INSERT INTO todos (task) VALUES ($1) RETURNING *',
    [task]
  );
  res.json(result.rows[0]);
});

app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM todos WHERE id = $1', [id]);
  res.json({ message: 'Todo deleted' });
});

app.get('/test', (req, res) => {
  res.send('Server is running');
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
