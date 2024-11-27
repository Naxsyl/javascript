// const btn = document.querySelector(".card .close");
// const contact = document.querySelector(".card");

// btn.addEventListener("click", function () {
//   contact.style.display = "none";
// });

// DOM Traversal
// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // close[i].parentElement.style.display = 'none';
//     e.target.parentElement.style.display = "none";
//   });
// }

// close.forEach(function (el) {
//   el.addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach((card) => {
//   card.addEventListener("click", (e) => alert("ok"));
// });

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
