// Destructuring

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(3, 5)[0];
// const kali = penjumlahanPerkalian(3, 5)[1];

// const [jumlah, kali] = penjumlahanPerkalian(3, 5);
// console.log(jumlah);
// console.log(kali);

// const [jumlah, kurang, kali, bagi = "tidak ada"] = kalkulasi(3, 6);// harus berurut karena array
// console.log(bagi);

// function kalkulasi(a, b) {
//   return { tambah: a + b, kurang: a - b, kali: a * b, bagi: a / b };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(9, 8); //tidak berurut tidak apa apa karena object
// console.log(kurang);

//Destructuring function arguments

const mhs1 = {
  nama: "nasril nufa",
  umur: 19,
  email: "nasrilnufa@gmail.com",
  nilai: {
    tugas: 90,
    uts: 80,
    pts: 70,
  },
};
// cara 1
// function cetakMhs(nama, umur) {
//   return `Halo,nama saya ${nama}, Umur saya ${umur} tahun.`;
// }
// cara 2
// function cetakMhs(mhs) {
//   return `Halo,nama saya ${mhs.nama}, Umur saya ${mhs.umur} tahun.`;
// }
//cara 1
// console.log(cetakMhs(mhs1.nama, mhs1.umur));
// cara 2
// console.log(cetakMhs(mhs1));

// cara 3 destructuring
function cetakMhs({ nama, umur, nilai: { tugas, uts, pts } }) {
  return `Halo,nama saya ${nama}, Umur saya ${umur} tahun. dan nilai tugas saya ${tugas}`;
}

console.log(cetakMhs(mhs1));
