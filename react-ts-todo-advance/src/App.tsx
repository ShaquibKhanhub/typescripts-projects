import {
  AppBar,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";
import { getTodos, saveLocal } from "./utils/features";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos());
  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const handleSubmit = (): void => {
    const newTodo: TodoItemType = {
      title,
      isCompleted: false,
      id: Math.floor(Math.random() * 1000)
        .toString()
        .padStart(1, "0"),
    };
    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };

  const handleComplete = (id: TodoItemType["id"]): void => {
    const newTodo: TodoItemType[] = todos.map((i) => {
      i.id === id ? (i.isCompleted = !i.isCompleted) : null;
      return i;
    });
    setTodos(newTodo);
  };
  const handleDelete = (id: TodoItemType["id"]): void => {
    const newTodo: TodoItemType[] = todos.filter((i) => i.id !== id);
    setTodos(newTodo);
  };
  const handleUpadte = (
    id: TodoItemType["id"],
    newTitle: TodoItemType["title"]
  ): void => {
    const newTodo: TodoItemType[] = todos.map((i) => {
      i.id === id ? (i.title = newTitle) : null;
      return i;
    });
    setTodos(newTodo);
  };


  useEffect(() => {
   saveLocal(todos) 
  }, [todos]);
  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>
      <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            handleUpadte={handleUpadte}
            key={i.id}
            todo={i}
          />
        ))}
      </Stack>

      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        label={"New Task"}
        onKeyDown={(e) => {
          if (e.key === "Enter" && title !== "") handleSubmit();
        }}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{ margin: "1rem 0" }}
        onClick={handleSubmit}
        disabled={!title}
      >
        ADD
      </Button>
    </Container>
  );
}

export default App;
