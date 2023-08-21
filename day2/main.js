const content = document.querySelector(".menuIcon");

content.addEventListener("click", function () {
  if (content.classList.contains("active")) {
    content.classList.remove("active");
    content.classList.add("close");
    console.log(content);
  } else {
    content.classList.add("active");
    content.classList.remove("close");
    console.log(content);
  }
});
