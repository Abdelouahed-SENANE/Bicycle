let burgerMenu = document.querySelector(".burger-menu");
let navLinks = document.querySelector(".navbar-items");
let getStyle = document.querySelector("#style");
let xsMedia = window.matchMedia("(max-width : 575px)");
let smMedia = window.matchMedia("(max-width : 767px)");
let mdMedia = window.matchMedia("(max-width : 991px)");
let lgMedia = window.matchMedia("(max-width : 1999px)");

document.addEventListener("DOMContentLoaded", responsive);

// Responsive Function
function responsive() {
  //=========== Start Media Max[575px]================
  if (xsMedia.matches) {
    getStyle.innerHTML += `
    .navbar-items {
      display: none;
    }
    .search {
      display: none;
    }
    .burger-menu {
      display: block;
    }
    .hero .row {
      grid-template-columns: repeat(1, minmax(250px, auto));
    }
    .hero .hero_title  {
      font-size :3rem;
      text-align : center;
      margin-top :10px;
    }
    .hero_desc {
      text-align:center;
      font-size: 1rem;
    }
    .hero .content_txt {
      text-align : center;
      margin-bottom : 15px;
    }

    .hero .img-box {
      width :100%;
      padding-top : 20px;
    }
    .hero .shape {
      height :  140px;
    }
    
    .banner .row {
      grid-template-columns: repeat(1, minmax(250px, auto));

    }
    .container {
      width : 90%;
      padding : 0px;
    }
    .banner .scroll {
      justify-content : center;
    }
    
    .find_section{
      margin-bottom : 400px;
    }
    .find_section .row {
      flex-wrap: wrap;
    }
    .find_section .button
    {
      width : 100%;
    }
    .find_section .btn-border
    {
      width : 100%;
    }
    .title-1 {
      font-size :1.5rem; 
    }

    .news_section .row {
      grid-template-columns: repeat(1, minmax(250px, auto));

    }

    .brans_content .brands {
      flex-wrap: wrap;
    }
    .brans_content img {
      width : 324px;
    }
    .pubs_wrapper .row {
      grid-template-columns: repeat(1, minmax(250px, auto));
    }
    .pubs_wrapper .pub_title {
      font-size :3rem !important;

    }
    .pubs_wrapper img {
      display : none;
    }

    .sales .row {
      grid-template-columns: repeat(1, minmax(250px, auto));

    }
    .provides .row {
      grid-template-columns: repeat(2, minmax(250px, auto));
      gap : 5px;

    }
    .provides .container {
      width : 100%;
    }
    .newsletter {
      padding-top : 40px;
    }
    .newsletter_title {
      font-size : 2.2rem !important;
    }
    .newsletter .desc {
      line-height: 2;
    }
    .newsletter .search_box {
      flex-wrap : wrap;
      width : 400px;
    }
    .newsletter .input_box {
      min-width : 100%;
      margin-bottom : 20px;
      margin-right : 0;
    }
    .newsletter .btn-full {
      min-width : 100%;
    }
    .images .row {
      grid-template-columns: repeat(2, minmax(250px, auto));

    }
    .images .col:last-child {
      display : none;
    }
    footer .row {
      grid-template-columns: repeat(1, minmax(250px, auto));
      gap : 20px;
    }
    footer .title_footer {
      margin-bottom: 30px;
    }
    .copyright {
      padding: 20px 0;
    }
    .copyright p {
      font-size: 1rem;
    }







    
    `;
  } // ======== Media MAX-575 ===========
  else if (smMedia.matches) {
    getStyle.innerHTML += `
    .navbar-items {
      display: none;
    }
    .search {
      display: none;
    }
    .burger-menu {
      display: block;
    }
    `;
  } else if (mdMedia.matches) {
    getStyle.innerHTML += `
    .navbar-items {
      display: none;
    }
    .search {
      display: none;
    }
    .burger-menu {
      display: block;
    }
    `;
  } else if (lgMedia.matches) {
    getStyle.innerHTML += `
    .navbar-items {
      display: block;
    }
    .search {
      display: block;
    }
    .burger-menu {
      display: none;
    }
    `;
  }
}
