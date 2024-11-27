// const btn = document.querySelector(".card .close");
// const contact = document.querySelector(".card");

// btn.addEventListener("click", function () {
//   contact.style.display = "none";
// });

// DOM Traversal
const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // close[i].parentElement.style.display = 'none';
//     e.target.parentElement.style.display = "none";
//   });
// }

close.forEach(function (el) {
  el.addEventListener("click", (e) => {
    e.target.parentElement.style.display = "none";
  });
});
