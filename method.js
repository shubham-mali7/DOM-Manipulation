// Method

// Select elelment using get element by id

// const mainHeading = document.getElementById('main-heading');
// console.log(typeof heading);
// console.log(mainHeading);

// Select element using querySelector

const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");
const navItem = document.querySelectorAll(".navItem");
// console.log(mainHeading);
// console.log(header);
// console.log(navItem);

console.log(mainHeading.textContent); // we can use textContent or innerText
// console.log(mainHeading.innerText) // but there is one difference between both of them

// const newText = (mainHeading.innerText = "This is the new Text!");
// console.log(newText);
