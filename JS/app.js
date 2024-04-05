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

var mobileMenu = document.querySelector(".mobileMenu");
var mobileMenuOpened = document.querySelector(".mobileMenuOpened");

mobileMenu.addEventListener("click", function () {
  if(!mobileMenuOpened.classList.contains("visible")){
    mobileMenuOpened.classList.add("visible");
    document.body.classList.add("overflowHidden");
  } else{
    mobileMenuOpened.classList.remove("visible");
    document.body.classList.remove("overflowHidden");
  }
});