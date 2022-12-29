// How to get dimension of an element 
// height and width 

const sectionTodo = document.querySelector('.todo-section')
const info = sectionTodo.getBoundingClientRect();
// const info = sectionTodo.getBoundingClientRect().width;
// const info = sectionTodo.getBoundingClientRect().height;
console.log(info);