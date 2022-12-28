// loop

// get multiple elements using get elements by class name
// get multiple element items using queryselector all
// array like object ---> indexing , length property

// const navItem = document.getElementsByTagName("a"); // HTML Collections
// console.log(navItem.length);
// console.log(typeof navItem[1]);

//We cannot use forEach loop to iterate through HTML Collections
// simple for loop
// for of loop
// forEach loop

// for (let i = 0; i < navItem.length; i++) {
// //   console.log(navItem[i]);
// const navItems = navItem[i];
// navItems.style.backgroundColor = '#ffff'
// navItems.style.color = 'black';
// navItems.style.fontWeight = 'bold';
// }

// console.log(Array.isArray(navItem));
// let navItemss = Array.from(navItem);
// console.log(navItemss);
// console.log(Array.isArray(navItemss));

// for (let item of navItem) {
//   console.log(item);
//   item.style.backgroundColor = "#ffff";
//   item.style.color = "black";
//   item.style.fontWeight = "bold";
// }

// const navItem = document.querySelectorAll(".navItem"); // Node List
// console.log(navItem);

// Node List --------------query Selector

let navItems = document.querySelectorAll("a");
navItems = Array.from(navItems);
console.log(Array.isArray(navItems)); 
console.log(navItems);

// All 3 can be used ti iterate
// simple for loop
// for of loop
// forEach loop

// for(let i=0; i<navItem.length; i++){
//     const navItems = navItems[i];
//     navItems.style.backgroundColor = '#ffff';
//     navItems.style.color = 'black';
//     navItems.style.fontWeight = 'bold';

// }

// for (let navItem of navItems) {
//   console.log(navItem);
//   navItem.style.backgroundColor = "#ffff";
//   navItem.style.color = "black";
//   navItem.style.fontWeight = "bold";
// }

// navItems.forEach((navItem) => {
//   console.log(navItem);
//   navItem.style.backgroundColor = "#ffff";
//   navItem.style.color = "black";
//   navItem.style.fontWeight = "bold";
// });
