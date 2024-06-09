const p3 = document.querySelector(".p3");
const p2 = document.querySelector(".p2");

function ubahWarnaP2() {
  p2.style.backgroundColor = "salmon";
}

function ubahWarnaP3() {
  p3.style.backgroundColor = "skyblue";
}

p2.onclick = ubahWarnaP2;

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLIBaru = document.createTextNode("Item Baru");
  liBaru.appendChild(teksLIBaru);
  ul.appendChild(liBaru);
});
