// Rest parameter

// didalam argumen terdapat variabel argumenst yg bisa menangkap seluruh isi parameter
// function myFun(...myArgs) { //
//   //   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//   // return myArgs; // pake rest parameter
//   //   return Array.from(arguments); // bisa menggunakan method dari array
//   return [...arguments]; // pake spread operator
// }

// console.log(myFun(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;

//   return angka.reduce((a, b) => a + b); // menggunakan high order function reduce
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// Array destructuring
// const kelompok1 = ["nasril", "ismi", "raya", "ica", "reza"];
// const [ketua, wakil, ...anggota] = kelompok1;

// console.log(anggota);

// object destructuring
// const team = {
//   pm: "nasril",
//   pepe: "bela",
//   lele: "reza",
//   ikan: "ica",
//   orang: "raya",
// };

// const { pm, ...myteam } = team;
// console.log(myteam);

// Filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, "nasril", false, true, "lele"));
