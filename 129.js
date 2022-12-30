const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type = 'text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiinnerHTML = `
  <span class="text">${newTodoText}</span>
  <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
  </div>`;
  newLi.innerHTML = newLiinnerHTML;
  todoList.append(newLi);
  todoInput.value = "";
});

// Event delegation yaha kaam agaya na bhidu
// todoList.addEventListener("click", (e) => {
//   console.log(e.target);
// });

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  // console.log(e.target.classList);
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
});
