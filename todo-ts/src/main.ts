import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

const todosContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

function saveTodosToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: (Math.random() * 1000).toString(),
  };
  todos.push(todo);
  saveTodosToLocalStorage();
  renderTodos(todos);

  todoInput.value = "";
};
const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todoElement = document.createElement("div");
  todoElement.className = "todo";

  //creating checkbox
  const checkBox: HTMLInputElement = document.createElement("input");
  // checkBox.setAttribute("type", "checkbox");
  checkBox.type = "checkbox";
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  console.log(checkBox.checked);
  checkBox.onchange = () => {
    todos.find((item) => {
      item.id === id ? (item.isCompleted = checkBox.checked) : "";
    });
    // console.log('checkbox',checkBox.checked);
    // console.log('iscomplete',isCompleted);
    paragraph.className = checkBox.checked ? "textCut" : "";
    saveTodosToLocalStorage();
  };

  //creating p tag for title
  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.innerText = title;
  paragraph.className = isCompleted ? "textCut" : "";

  //creating delete button
  const btn: HTMLButtonElement = document.createElement("button");
  btn.className = "deleteBtn";
  btn.innerText = "X";
  btn.onclick = () => {
    deleteTodo(id);
  };

  //Appending all Elements in TodoItem
  todoElement.append(checkBox, paragraph, btn);

  todosContainer.append(todoElement);
};
const renderTodos = (todos: Todo[]) => {
  todosContainer.innerHTML = "";
  todos.forEach((item) => {
    generateTodoItem(item.title, item.isCompleted, item.id);
  });
};

const deleteTodo = (id: string) => {
  const idx = todos.findIndex((item) => item.id === id);

  todos.splice(idx, 1);
  saveTodosToLocalStorage();
  renderTodos(todos);
};

// Initial render
renderTodos(todos);
