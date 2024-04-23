// dom colletion
//  document.getElementById -> element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#cccc";
// judul.innerHTML = "Nasril Nufa";

// document.getElementsByTagName -> HTMLColletion
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "skyblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName -> HTMLColletion
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini di ubah oleh javascript";
