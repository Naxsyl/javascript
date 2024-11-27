const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");

container.addEventListener("click", (e) => {
  // cek apakah yang di-klik adalah thumb
  if (e.target.classList.contains("thumb")) {
    const newSrc = e.target.src
      .replace(/196/, "600")
      .replace(/\?random=\d+/, "");
    jumbo.src = newSrc;
  }
});
