// ab hum bath karenge behind the scenes kaise kaam hota hai

// jum hum kisi element pai kisi event ko listen karte hai toh browser kya karta hai uske baare mai bath karenge

// Important from interview perspective

console.log("script start !!!!!!!!");
const allButtons = document.querySelectorAll(".myButtons button");
// console.log(allButtons);

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let num = 0;
    for (let i = 0; i <= 1000000000; i++) {
      num += i;
    }
    console.log(e.currentTarget.textContent, num);
  });
});

let outerVar = 0;
for (let i = 0; i <= 100000000; i++) {
  outerVar += i;
}
console.log("value of outerVar is", outerVar);
console.log("script end !!!!!!!!");

// theek se observe karna output aate vakt delay aaraha hai usko

// Behind the scene pura kaam ekdam organised form mai chal raha hota hai

// Many important concepts
// eventloop , eventObject , Call stack , webAPI, Global execution Context , Queue etc ---------

// Understanding this behind the scene process is important

// 6:51 -------> recording explanation timing
