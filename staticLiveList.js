// static list vs live list

// queryselectorAll hamein statis list degi

// getElementsbySomething hamein live list degi

// const listItems = document.querySelectorAll(".todo-list li");
// const newLi = document.createElement("li");
// newLi.textContent = "Hello new Li here !";
// const ul = document.querySelector(".todo-list");
// const newLi2 = newLi.cloneNode(true);
// newLi2.textContent = "Hello new Li-2 here !";
// ul.append(newLi);
// ul.prepend(newLi2);
// console.log(newLi);
// console.log(listItems);

// NodeList(5) [li, li, li, li, li]

// 2 more lists are added then too only 5 lists are shown in nodelist in console ,which says that it is static list

const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
const newLi = document.createElement("li");
newLi.textContent = "Hello NewLi here";
const newLi2 = newLi.cloneNode();
newLi2.textContent = "Hello NewLi-2 here";
ul.append(newLi2);
ul.prepend(newLi);
console.log(listItems);

// Live List : HTMLCollection(7) [li, li, li, li, li, li, li]

//  2 more lists are added and 7 lists are shown in HTML Collection in console ,which says that it is Live list
