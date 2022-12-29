// event object ------------>

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function (info) {
//   console.log(info);
// });

// jab bhi kisi element pai event listener add hoga
// js Engine line by line execute karta hai
// browser ---- js Engine + extra features
// browser ------ js Engine + webAPIs

// jab browser ko pata chala ki user ne event perform kia
// jo hum listen kar rahe hai
// browser ----- 2
// 1 call back function hai vo js Engine ko dega ----
// 2 call back function browser jo event hua hai uski information bhi dega
// ye info hame ek object ke form mai milegi

const allButtons = document.querySelectorAll("button");

for (let button of allButtons) {
  button.addEventListener("click", function (e) {
    console.log(e.currentTarget);
  });
}

// event object is displayed on console
// > In eventObject 2 properties are important --> target and current target

// event bubbling
// event capturing
