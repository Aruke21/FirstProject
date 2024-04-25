// console.log("Hello world!");

// console.log(1 + 2); //number
// console.log("1"+"2"); //sstring
// console.log("Hello " + "world");
// console.log(4 + "apple");
// console.log(10 - "4");

// var myVar = 10;
// var b = myVar * 21;
// console.log(b);

// var myName = "Aruke"
// console.log("Hello ")

// alert("look its alert");
// var myName = promt("tell me your name");

// console.log(myName);

// if (myName === "Aruke") {
//     console.log("Even better!!!");
// }

// if (underfined) {
//   console.log("true");
// } else {
//     console.log("false");
// }

// // '', 0, undefined, null - falsy
// // "hello", 1 - truly

// // console.log(0 === -0);

// function myFunc(arg) {
//     console.log("Its a function");
//     if (a === 4) {
//         console.log("its 4");
//     } else {
//         console.log("its not 4")
//     }
// }

// var button = document.querySelector("#btn");
// console.log(button);

// button.addEventListener("click", function () {
//     myFunc
// });


// function checkColorAndDisplayMessage(){
// const userInput = prompt("Введите цвет (красный, желтый, зеленый):");
// let message;

// switch (userInput.toLowerCase()) {
//   case "красный":
//     message = "Стоп!";
//     break;
//   case "желтый":
//     message = "Подожди";
//     break;
//   case "зеленый":
//     message = "Иди";
//     break;
//   default:
//     message = "Неверный цвет";
//     break;
//   }

// alert(message);
// }

// checkColorAndDisplayMessage();


var mobileMenu = document.querySelector(".mobileMenu");
var mobileMenuOpened = document.querySelector(".mobileMenuOpened");
var mobileMenuClose = document.querySelector(".mobileMenuClose")

mobileMenu.addEventListener("click", function () {
  mobileMenuOpened.classList.add("visible");
  document.body.classList.add("overflowHidden");
  });

mobileMenuClose.addEventListener("click", function(){
  mobileMenuOpened.classList.remove("visible");
  document.body.classList.remove("overflowHidden");
});



var serviceItems = document.querySelector(".serviceItems")
var serviceArr = [
  {
    img: "assets/ic-construction.png",
    text: "Construction"
  },
  {
    img: "assets/ic-plan.svg",
    text: "Project Development"
  },
  {
    img: "assets/Vector.svg",
    text: "Interior Design"
  },
  {
    img: "assets/ic-painting.svg",
    text: "Repairs"
  }
]
  serviceArr.forEach(function(item){
  var service = document.createElement("div")
  var img = document.createElement("img")
  var text = document.createElement("p")

  img.setAttribute("src", item.img)
  text.textContent = item.text
  service.append(img)
  service.append(text)

  service.classList.add("service")

  serviceItems.append(service)
});