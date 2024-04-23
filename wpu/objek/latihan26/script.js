// Jquery
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=963bd148&s=naruto",
//   success: (movies) => console.log(movies),
// });

// Vanila Javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };

// xhr.open("get", "http://www.omdbapi.com/?apikey=963bd148&s=naruto");
// xhr.send();

// Javascript versi Moderen menggunakan metode fetch
// fetch("http://www.omdbapi.com/?apikey=963bd148&s=naruto")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchrounous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending )
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji telah ditepati!");
//   } else {
//     reject("inngkar janji..");
//   }
// });

// janji1
//   .then((Response) => console.log("OK! : " + Response))
//   .catch((Response) => console.log("NOT OK : " + Response));

// Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu!"))
//   .then((Response) => console.log("OK! : " + Response))
//   .catch((Response) => console.log("NOT OK : " + Response));
// console.log("selesai");

// Promise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "naruto",
        sutradara: "nasril",
        pemeran: "lele",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Jakarta",
        temp: 23,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

// film.then((Response) => console.log(Response));
// cuaca.then((Response) => console.log(Response));

Promise.all([film, cuaca])
  // .then((Response) => console.log(Response));
  .then((Response) => {
    const [film, cuaca] = Response;
    console.log(film);
    console.log(cuaca);
  });
