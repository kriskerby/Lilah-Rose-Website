window.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".image");

  async function imageLoad () {
      const res = fetch("LilahRose COLOR1.JPG")
      console.log(res);
  }
imageLoad();
});
