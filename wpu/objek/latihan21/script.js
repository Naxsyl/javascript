// Spread Operator
// Memecah iterables menjadi single elemet

// const mhs = ["Nasril", "Raya", "Ismi"];

// console.log(...mhs);

// Menggabungkan 2 array
// const mhs = ["Nasril", "Raya", "Ismi"];
// const dosen = ["reza", "ica", "efa"];
// const orang = [...mhs, "kamu", ...dosen]; // bisa menambahkan elemet sesuka hati
// bisa menggunakan fungsi concat namun kurang flexsibel jika kita ingin menambahkan elemet
// const orang = mhs.concat(dosen); // kurang flexsibel
// console.log(orang);

// Mengcopy Array
// const mhs = ["Nasril", "Raya", "Ismi"];
// const mhs1 = mhs; // kalau cara ini bukan copy tapi refensi dari nilai mhs
// const mhs1 = [...mhs]; // ini baru copy ketika di timpa dengan nilai baru mhs tidak akan berubah
// mhs1[0] = "lele";
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");
// Menggunakan for biasa
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }

// console.log(mhs);

// ini menggunakan spread operator dan juga high order function
// const mhs = [...liMhs].map((m) => m.textContent);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);
nama.innerHTML = huruf;
