// Dom traversing application

const heading = document.getElementsByTagName("h1")[0];
// console.log(heading);

const headParentNode = heading.parentNode;
const bodyElementNode = headParentNode.parentNode;

headParentNode.style.color = "#ffff";
headParentNode.style.backgroundColor = "black";
headParentNode.style.padding = "1rem";
headParentNode.style.borderRadius = "2rem";
bodyElementNode.style.backgroundColor = "grey";

// extra info

// const body = document.body;
// console.log(body);

const head = document.querySelector("head");
// console.log(head);

const title = head.querySelector("title");
// console.log(title);
// console.log(title.childNodes);

const div = document.querySelector("div");
console.log(div.childNodes);
console.log(div.children); // ignores text node
