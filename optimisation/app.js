console.log("Hello");

//log the image selected on page load based on window width
window.addEventListener("load", () => {
  const box = document.querySelector(".box");
  const image = box.querySelector("img");
  console.log(image.currentSrc);
});
