// append prepend after before and remove do nnot work in Internet Explrer

// some old methods to support poor IE :
// append child
// insert before
// replace child
// remove child

// appendChild ------------------>

// const todoList = document.querySelector('.todo-list');
// const li = document.createElement('li');
// li.textContent = 'Software Developer Shubham Mali';
// todoList.appendChild(li);
// // console.log(todoList);
// // console.log(li);

// inserBefore ---------------->

// const todoList = document.querySelector('.todo-list');
// const newTodo = document.createElement('li');
// newTodo.textContent = 'Software Developer Shubham Mali';
// const referenceNode = document.querySelector('.referenceNode');
// todoList.insertBefore(newTodo , referenceNode);

// replaceChild ----------------->

// const todoList = document.querySelector('.todo-list');

// // new element
// const li = document.createElement('li');
// li.textContent = 'Software Developer Shubham Mali';

// // first todo
// const referenceNode = document.querySelector('.referenceNode');

// // relaces the child
// todoList.replaceChild(li , referenceNode );

// removeChild ------------------>

// const todoList = document.querySelector('.todo-list');

// // new element
// const li = document.createElement('li');
// li.textContent = 'Software Developer Shubham Mali';

// // first todo
// const referenceNode = document.querySelector('.referenceNode');

// // relaces the child
// todoList.removeChild( referenceNode );
