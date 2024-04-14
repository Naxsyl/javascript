// Tagged Templates
// const nama = "Nasril";
// const umur = 19;

// function coba(strings, ...values) {
//   // strings berbentuk array yang di batasi oleh expresiion
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ""}`;
//   //   });
//   //   return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo, Nama saya ${nama}, saya ${umur} Tahun.`; //bisa jadi parameter
// console.log(str);

// Highlight

const nama = "Nasril";
const umur = 19;

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo, Nama saya ${nama}, saya ${umur} Tahun.`; //bisa jadi parameter
console.log(str);

document.body.innerHTML = str;
