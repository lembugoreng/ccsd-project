import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo(task);
    setTask('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2 }}>
      <TextField
        variant="outlined"
        label="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </Box>
  );
}

export default TodoForm;
