//  for..of
// const mhs = ["Nasril", "Ismi", "Raya"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// String
// const nama = "Nasril";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["Nasril", "Ismi", "Raya"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah Mahasiswa ke-${i + 1}.`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah Mahasiswa ke-${i + 1}.`);
// }

// NodeList
const liNama = document.querySelectorAll(".nama");

// liNama.forEach((n) => console.log(n.innerHTML));

// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// Arguments
// function jumlahkanAngka() {
//   // return arguments.reduce((a,i) => a + i); // kaga bisa pake high order funtiom
//   // arguments.forEach(a => jumlah += a); // tidak bisa pake foreach
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
const mhs = {
  nama: "nasril",
  umur: 19,
  email: "nasril@gmail.com",
};

for (const m in mhs) {
  console.log(mhs[m]);
}
