import { Delete, Done, Edit } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  handleComplete: (id: TodoItemType["id"]) => void;
  handleDelete: (id: TodoItemType["id"]) => void;
  handleUpadte: (
    id: TodoItemType["id"],
    newTitle: TodoItemType["title"]
  ) => void;
};

const TodoItem = ({
  todo,
  handleComplete,
  handleDelete,
  handleUpadte,
}: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [textVal, setTextVal] = useState<string>(todo.title);

  return (
    <Paper
      sx={{
        padding: "1rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        {editActive ? (
          <TextField
            value={textVal}
            onChange={(e) => setTextVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && textVal !== "") {
                handleUpadte(todo.id, textVal);
                setEditActive(false);
              }
            }}
          />
        ) : (
          <Typography marginRight={"auto"}>{todo.title}</Typography>
        )}
        <Checkbox
          checked={todo.isCompleted}
          onChange={() => handleComplete(todo.id)}
        />
        <Button
          onClick={() => handleDelete(todo.id)}
          sx={{ opacity: 0.5, color: "black" }}
        >
          <Delete />
        </Button>
        <Button
          sx={{
            fontWeight: "600",
          }}
          onClick={() => setEditActive((prev) => !prev)}
        >
          {
            editActive?
          <Done/>: <Edit />
          }
        </Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
