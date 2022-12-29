// This

const demoBtn = document.querySelector(".demoBtn");
// console.log(demoBtn);
console.log(this)
demoBtn.addEventListener("click", function () {
  console.log("you clicked me!!!!");
  console.log("value of this:");
  console.log(this);
//   alert("helooooo!!!");
});
