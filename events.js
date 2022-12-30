// intro to events
// click
// event add karneke 3 tarike hain

const btnHeadline = document.querySelector(".btn-headLine");
// console.log(btn);
// btn.onclick = function () {
//   console.log("you clicked me!!!!");
// };                  ------------> Dont know why bit its not working

// method --------> addEventListener

// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!!!!!!");
//   });

btnHeadline.addEventListener("click", () => {
  alert("hellooooo");
  console.log('you clicked me !')
}); // explore more

//--------------------------------------------->
const demoBtn = document.querySelector(".demoBtn");
// console.log(demoBtn);

demoBtn.addEventListener("click", () => {
  console.log("you clicked me!!!!");
//   alert("helloooooooo!!!!");
}); // add todo
