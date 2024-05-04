// const fs = require('fs'); //core modul
// const cetakNama = require("./coba"); //local modul
// const moment = require('moment'); // third party modul / npm modul / node_modules

// console.log("Hello Naxsyl");
// console.log(cetakNama("Naxsyl"));
// const cetakNama = require("./coba");

const coba = require("./coba"); // berbentuk objek
console.log(coba);

console.log(
  coba.cetakNama("Naxsyl"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);
