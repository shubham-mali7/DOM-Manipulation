// Add new HTML elements to page

// Inner HTML to add html element

const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);

// todoList.innerHTML = '<li>Hello this page is build by Shubham Mali!</li>'
// todoList.innerHTML = todoList.innerHTML + '<li>Hello this page is build by Shubham Mali!</li>'
todoList.innerHTML += "<li>Hello this page is build by Shubham Mali!</li>";
todoList.innerHTML +=
  "<li>Shubham Mali is a professional Software Engineer </li>";

// When you should use it , when you should not

// -----> Performance issues are occured with the use of inner html

// -----> We can use innerHTML to edit small changes in html but not to add whole new elements
