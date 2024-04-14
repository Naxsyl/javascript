// 1. Html Fragments
// const mhs = {
//   nama: "Nasril",
//   umur: 19,
//   nrp: "12345",
//   email: "Nasril@gmail",
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el);

// 2.Looping
// const mhs = [
//   {
//     nama: "Nasril",
//     email: "Nasril@gmail.com",
//   },
//   {
//     nama: "Ismi",
//     email: "Ismi@gmail.com",
//   },
//   {
//     nama: "Raya",
//     email: "Raya@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
//   ${mhs
//     .map(
//       (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//   </ul>`
//     )
//     .join("")}
// </div>`;

// 3. Conditionals
// const lagu = {
//   judul: "Cincin",
//   penyanyi: "Hidia",
//   feat: "cuki",
// };

// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//   </ul>
// </div>`;

// 4.Nested

const mhs = {
  nama: "nasril",
  kelas: 11,
  mataPelajaran: ["Mtk", "Bahasa Indonesia", "Html"],
};

function cetakMataPelajaran(mataPelajaran) {
  return `
  <ol>
    ${mataPelajaran.map((mp) => `<li>${mp}</li>`).join("")}
  </ol>
  `;
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="kelas">Kelas : ${mhs.kelas}</span>
  <h4>Mata Pelajaran :</h4>
  ${cetakMataPelajaran(mhs.mataPelajaran)}
</div>`;

document.body.innerHTML = el;
