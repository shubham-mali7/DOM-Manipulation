// change the styles of element

const mainHeading = document.getElementById("main-heading");
// const mainDiv = document.querySelector('div');
const mainDiv = document.querySelector("div.headLine h2");
// const mainDiv = document.querySelectorAll('div')[4];
console.log(mainDiv.style);

mainHeading.textContent = "ShaktiMan";
mainHeading.style.color = "yellow";
mainHeading.style.backgroundColor = "black";
mainHeading.style.padding = "0.785rem";
mainHeading.style.borderTop = "2px solid yellow";
mainHeading.style.borderLeft = "2px solid yellow";
