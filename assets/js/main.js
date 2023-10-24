//Declaration les variables ===================

let burgerMenu = document.getElementById("burgerMenu");
let navLinks = document.querySelector(".navbar-items");
let getStyle = document.querySelector("#style");
const getRange = document.querySelectorAll(".range_input input");
const progress = document.querySelector(".progress")
const btnAccordian = document.querySelectorAll(".btn_accordian");
const response = document.querySelectorAll('.response');
console.log(response);
// ============ Navbar Collapse ===============
burgerMenu.addEventListener("click", () => {
  if (burgerMenu.classList.contains("burger-menu")) {
    navLinks.classList.toggle("collapse");
    burgerMenu.classList.toggle("collapse");
  }
});

// ============ Navbar Collapse ===============
// ============ Accordian  ===============

btnAccordian.forEach((e) => {
  e.addEventListener('click', () => {
      e.classList.toggle("active");
      

      })






  })


// ============ Accordian  ===============