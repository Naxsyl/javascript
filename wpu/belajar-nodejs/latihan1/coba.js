function cetakNama(nama) {
  return `Halo nama saya ${nama}.`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "Naxsyl",
  umur: 19,
  cetakMhs() {
    return `Halo Nama saya ${this.nama}, Umur saya ${this.umur} Tahun.`;
  },
};

class Orang {
  constructor() {
    console.log("Objek orang telah dibuat");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;

// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

module.exports = { cetakNama, PI, mahasiswa, Orang };
