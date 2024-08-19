import React from 'react';
import { List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList({ todos, deleteTodo }) {
  return (
    <List>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={todo.task} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default TodoList;
