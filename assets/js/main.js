//Declaration les variables ===================

let burgerMenu = document.getElementById("burgerMenu");
let navLinks = document.querySelector(".navbar-items");
let getStyle = document.querySelector("#style");
const btnAccordian = document.querySelectorAll(".btn_accordian");
const response = document.querySelectorAll(".response");

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
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});

// ============ Accordian  ===============
// ============ Validation form  ============

const btnSubmit = document.getElementById("submitBtn");
const fieldName = document.getElementById("name");
const fieldEmail = document.getElementById("email");
const fieldPhone = document.getElementById("phone");

btnSubmit.addEventListener("click", (e) => {
  validateName();
  validateEmail();
  validatePhone();
  console.log("onclick");
  e.preventDefault();
});

btnSubmit.addEventListener("keyup", () => {});

function validateName() {
  const errorName = document.getElementById("errorName");

  if (fieldName.value == "" || fieldName.value.length == null) {
    errorName.innerHTML = "Please enter yout name";
    fieldName.parentElement.classList.add("error");
  } else {
    errorName.innerHTML = "";
    fieldName.parentElement.classList.remove("error");
  }
}

function validateEmail() {
  const errorEmail = document.getElementById("errorEmail");
  const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,3}$/;

  if (fieldEmail.value == "" || fieldEmail.value.length == null) {
    errorEmail.innerHTML = "Please enter your email";
    fieldEmail.parentElement.classList.add("error");
  } else if (!regex.test(fieldEmail.value)) {
    errorEmail.innerHTML = "Please enter a valid email";
    fieldEmail.parentElement.classList.add("error");
    console.log("am here");
  } else {
    errorEmail.innerHTML = "";
    fieldEmail.parentElement.classList.remove("error");
  }
}
function validatePhone() {
  const errorPhone = document.getElementById("errorPhone");
  const regex =
    /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/;
  if (fieldPhone.value == "" || fieldPhone.value.length == null) {
    errorPhone.innerHTML = "Please Entre your phone";
    fieldPhone.parentElement.classList.add("error");
  } else if (!regex.test(fieldPhone.value)) {
    errorPhone.innerHTML = "Please Entre correct phone";
    fieldPhone.parentElement.classList.add("error");
  } else {
    errorPhone.innerHTML = "";
    fieldPhone.parentElement.classList.remove("error");
  }
}

function validateTextArea() {
  const erroArea = document.getElementById("errorTextArea");
  const textArea = document.getElementById("textArea");
  let minWords = 30;
  let diff = minWords - textArea.value.length;
  if (diff < 30 && diff > 0 ) {
    erroArea.innerHTML = `${diff} more character requierd`;
    textArea.parentElement.classList.add("error");
  }else {
    erroArea.innerHTML = "";
    textArea.parentElement.classList.remove("error");
  }



}
validateTextArea();
// ============ Validation form  ============
// ============ Drop Down ============

function displayDropdown() {
  const dropMenu = document.getElementById("dropdownList");
  dropMenu.classList.toggle("active");
}
