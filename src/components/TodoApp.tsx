import { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { useTodoStore } from "../store/todoStore";

const myStyles = makeStyles((theme) => ({
  headerTextStyles: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  textBoxStyles: {
    marginBottom: theme.spacing(1),
  },
  addButtonStyles: {
    marginBottom: theme.spacing(2),
  },
  completedTodoStyles: {
    textDecoration: "line-through",
  },
}));

const TodoApp = () => {
  const [todoText, setTodoText] = useState("");
  const { addTodo, todos, removeTodo, toggleCompletedState } = useTodoStore();

  const { addButtonStyles, headerTextStyles, textBoxStyles, completedTodoStyles } = myStyles();

  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h3" className={headerTextStyles}>
          To-Do's
        </Typography>
        <TextField
          label="Todo Desription"
          className={textBoxStyles}
          required
          variant="outlined"
          fullWidth
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <Button
          fullWidth
          className={addButtonStyles}
          variant="outlined"
          color="primary"
          onClick={() => {
            if (todoText.length) {
              addTodo(todoText);
              setTodoText("");
            }
          }}
        >
          Add Item
        </Button>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  onChange={() => toggleCompletedState(todo.id)}
                />
              </ListItemIcon>
              <ListItemText
              className={todo.completed ? completedTodoStyles : ""}
              key={todo.id}
            >
              {todo.description}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  removeTodo(todo.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
            </ListItem>
            // <p>{ todo.id }</p>
          ))}
        </List>
      </Container>
    </>
  );
};

export default TodoApp;
