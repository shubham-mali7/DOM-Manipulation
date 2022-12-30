// Little Practise with click event

// For firstButton only :---------->

// const firstButton = document.querySelector("#one");
// const body = document.querySelector("body");
// firstButton.addEventListener("click", () => {
//   //   console.log(e.currentTarget.textContent);
//   body.style.backgroundColor = "yellow";
//   firstButton.style.backgroundColor = "grey";
//   firstButton.style.color = "yellow";
// });
// console.log(firstButton);

// for all buttons ----------->

const allButtons = document.querySelectorAll(".myButtons button");
const body = document.querySelector("body");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target.textContent);
    body.style.backgroundColor = "beige";
    e.target.style.backgroundColor = "yellow";
  });
});
// console.log(allButtons);
