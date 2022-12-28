// Dom traversing

const rootNode = document.getRootNode();
// console.log(rootNode);
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes); // NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];
const textNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(headElementNode.childNodes);

// console.log(headElementNode);
// console.log(bodyElementNode);
// console.log(textNode);

const headParentNode = headElementNode.parentNode;
// console.log(headParentNode);
const textParentNode = textNode.parentNode;
// console.log(textParentNode);

// Sibling relation

const headnextSibling = headElementNode.nextSibling;
// const headnextSibling = headElementNode.nextElementSibling; // this will ignore newline and spaces
console.log(headnextSibling);


