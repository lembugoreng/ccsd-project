import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Paper } from '@mui/material';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:5001/todos');
    setTodos(response.data);
  };

  const addTodo = async (task) => {
    const response = await axios.post('http://localhost:5001/todos', { task });
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5001/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          To-Do List
        </Typography>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
