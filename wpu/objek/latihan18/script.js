// Destructuring variabel / Assignment

// Destructuring Array

// const perkenalan = ["halo", "nama", "saya", "Nasril"];
// const [salam, satu, dua, nama] = perkenalan;
// bisa di skip kek gini caranya
// const [salam, , , nama] = perkenalan; // skip items

// console.log(nama);

// swap item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//   nama: "Nasril Nufa",
//   umur: 19,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// Assigment tanpa deklarasi object
// ({ nama, umur } = { nama: "Nasril Nufa", umur: 19 });
// console.log(nama);

// Memberikan Default Value
// const mhs = {
//   nama: "Nasril Nufa",
//   umur: 19,
//   email: "nasrilnufa@gmail.com",
// };

// const { nama, umur, email = "default@gmail.com" } = mhs;
// console.log(email);

// Memberikan nilai default + assign ke variabel baru

// const mhs = {
//   nama: "Nasril Nufa",
//   umur: 19,
//   email: "nasrilnufa@gmail.com",
// };

// const { nama: n, umur: u, email: e = "default@gmail.com" } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//   nama: "Nasril Nufa",
//   umur: 19,
//   email: "nasrilnufa@gmail.com",
// };

// const { nama, ...values } = mhs;
// console.log(values);

// Mengambil Field pada Object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Nasril Nufa",
  umur: 19,
  email: "nasrilnufa@gmail.com",
};

function getId({ id }) {
  return id;
}

console.log(getId(mhs));
