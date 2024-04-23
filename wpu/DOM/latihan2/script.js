// dom colletion
// document.getElementById -> element
// document.getElementsByTagName -> HTMLColletion
// document.getElementsByClassName -> HTMLColletion

// document.querySelector() -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "skyblue";

// const p = document.querySelector("p"); // ini akan mengambil element pertama
// p.innerHTML = "ini diubah melalui javascript";

// document.querySelectorAll()-> NodeList
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "salmon";
// }

// Mengubah Node Root Agar mudah dalam seleksi
const sectionB = document.getElementById("b"); // section b menggantikan root
const p = sectionB.querySelector("p"); // section b menjadi root
p.style.fontSize = "120px";
