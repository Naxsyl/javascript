// const pertanyaan2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan Email anda : ", (email) => {
//       resolve(email);
//     });
//   });
// };
// const contacts = require('./contacts'); // cara 1 biasa
const { pertanyaan, simpanContact } = require("./contacts"); // cara 2 menggunakan objek descrution
const main = async () => {
  const nama = await pertanyaan("Masukkan Nama Anda :");
  const email = await pertanyaan("Masukkan Email Anda :");
  const noHP = await pertanyaan("Masukkan No Hp Anda :");

  simpanContact(nama, email, noHP);
};

main();

// rl.question("Masukkan Nama anda : ", (nama) => {
//   rl.question("Masukkan No Handphone : ", (noHP) => {
//     const contact = { nama, noHP };
//     const file = fs.readFileSync("data/contacts.json", "utf-8");
//     const contacts = JSON.parse(file);

//     contacts.push(contact);

//     fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

//     console.log("Terima Kasih Telah memasukan data.");

//     rl.close();
//   });
// });
