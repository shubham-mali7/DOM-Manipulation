
const todoSection = document.querySelector('.todo-section');
// console.log(todoSection.classList);  //DOMTokenList(2) ['todo-section', 'container', value: 'todo-section container']

// todoSection.classList.add('bgDark');  // can add any class
// todoSection.classList.remove('container'); // can remove any class 
// const answer = todoSection.classList.contains('container');  //True
// const answer = todoSection.classList.contains('checkClass'); //False
// console.log(answer);
// todoSection.classList.toggle('bgDark'); // toggle: agar class hai toh usse remove karta hai , agar nahi hai toh add karta hai 
// todoSection.classList.toggle('bgDark');


const header = document.querySelector('.header');
console.log(header.classList);
header.classList.add('bgWhite');
header.classList.remove('bgWhite');
header.classList.toggle('bgWhite');
header.classList.toggle('bgWhite');
