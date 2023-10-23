//Declaration les variables ===================

let burgerMenu = document.getElementById("burgerMenu");
let navLinks = document.querySelector(".navbar-items");
let getStyle = document.querySelector("#style");
const getRange = document.querySelectorAll(".range_input input");
const progress = document.querySelector(".progress")
console.log(progress);
// ============ Navbar Collapse ===============
burgerMenu.addEventListener("click", () => {
  if (burgerMenu.classList.contains("burger-menu")) {
    navLinks.classList.toggle("collapse");
    burgerMenu.classList.toggle("collapse");
  }
});

// ============ Navbar Collapse ===============

getRange.forEach((input) => {
  input.addEventListener("input", () => {
    let minVal = parseInt(getRange[0].value),
      maxVal = parseInt(getRange[1].value);
    ;
    progress.style.left = (minVal / getRange[0].max) * 100 + "%";
    progress.style.right =100 - (maxVal / getRange[1].max) * 100 + "%";
    console.log(100 - (maxVal / getRange[1].max) * 100 + "%")
  });
});
