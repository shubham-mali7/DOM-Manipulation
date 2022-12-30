const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// capturing

// child.addEventListener(
//   "click",
//   () => {
//     console.log("captured !!!!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("captured !!!!! parent");
//   },
//   true
// );
// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("captured !!!!! grandParent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("captured !!!!! body");
//   },
//   true
// );

// un captured events

// child.addEventListener("click", () => {
//   console.log("bubble !!!!! child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble !!!!! parent");
// });
// grandParent.addEventListener("click", () => {
//   console.log("bubble !!!!! grandParent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble !!!!! body");
// });

// event bubbling ---> aapne kisi ek event pai click kia agar uske parent pai bhi same event laga hua hai toh voh bhi call hojaega

// by adding true it captures the event

// ek click se kitne event trigger ho rahe hai yahi harshit bhai hamein samjhane ki koshish kar rahe hai

// event delegation --------->

// grandParent.addEventListener("click", () => {
//   console.log("you clicked something!!!!!");
// });

// use of event object 

// grandParent.addEventListener("click", (e) => {
//   console.log(e.target);
// });


// iska faydaa kya hai : aapko child, parent, grandparent inkelie alag alag event  add karne ki jaroorat nahi hai event delegation ki vajah se 