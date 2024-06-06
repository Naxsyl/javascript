const fs = require("fs");
const chalk = require("chalk");
const valdiator = require("validator");

// membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  // const file = fs.readFileSync("data/contacts.json", "utf-8");
  // const contacts = JSON.parse(file);
  const contacts = loadContact();

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!")
    );
    return false;
  }

  // cek email
  if (email) {
    if (!valdiator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email Tidak Valid"));
      return false;
    }
  }

  // cek noHP
  if (!valdiator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomer HP Tidak Valid"));
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

  console.log(chalk.green.inverse.bold("Terima Kasih Telah memasukan data."));
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold("Daftar kontak : "));

  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} pengguna tidak terdaftar`));
    return false;
  }

  console.log(chalk.cyan.inverse.bold(contact.nama));
  console.log(contact.noHP);
  if (contact.email) {
    console.log(contact.email);
  }
};

// cara menghapus menggunakan filter
// const deleteContact = (nama) => {
//   const contacts = loadContact();

//   const newContacts = contacts.filter(
//     (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
//   );

//   if (contacts.length === newContacts.length) {
//     console.log(chalk.red.inverse.bold(`${nama} pengguna tidak terdaftar`));
//     return false;
//   }

//   fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts, null, 2));

//   console.log(
//     chalk.green.inverse.bold(`data contact ${nama} Berhasil dihapus!`)
//   );
// };

// menggunakan find index : method dari metode array pada js
const deleteContact = (nama) => {
  const contacts = loadContact();
  const indexDel = contacts.findIndex(
    (x) => x.nama.toLowerCase() === nama.toLowerCase()
  );
  console.log(indexDel);
  if (indexDel === -1) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
    return false;
  }
  contacts.splice(indexDel, 1);
  fs.writeFileSync("data/contact.json", JSON.stringify(contacts, null, 4));
  console.log(chalk.green.inverse.bold(` data ${nama} berhasil dihapus`));
};

module.exports = { simpanContact, listContact, detailContact, deleteContact };
