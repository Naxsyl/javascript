const validator = require("validator");
const chalk = require("chalk");
// console.log(validator.isEmail("naxsyl@gmail.com")); //hasilnya true
// console.log(validator.isMobilePhone("0812345", "id-ID")); // hasilnya true
// console.log(validator.isNumeric("0812345")); // hasilnya true

const nama = "Naxsyl";
const pesan = chalk`{bgRed.black Lorem} ipsum dolor sit amet consectetur adipisicing {bgGreen.italic.black elit}. Porro, obcaecati?, Halo nama saya ${nama}.`;
console.log(pesan);
