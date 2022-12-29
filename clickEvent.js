const allButtons = document.querySelectorAll("button");
// console.log(allButtons);
// firstButton.addEventListener("click", function () {
//   console.log("you clicked me !!!!!!!");
// });

//same task using for of ------------>

// for (let button of allButtons) {
//   button.addEventListener("click", function () {
//     console.log(this.textContent);
//   });

// }

//same task using traditional for ------------>

// for(let i = 0 ; i < allButtons.length ; i++){
//     allButtons[i].addEventListener("click", ()=>{
//         console.log(allButtons[i].textContent);
//     })
// }

//same task using for each ------------>

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
  });
});
