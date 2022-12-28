// Clone node -----------> interesting

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New todo";
const li2 = li.cloneNode(true); // true over here signifies deep cloning // text node of li also gets cloned properly to li2
ul.append(li);
ul.prepend(li2);
console.log(li);
