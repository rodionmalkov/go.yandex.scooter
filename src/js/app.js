import "../../node_modules/focus-visible/dist/focus-visible";
import "../scss/main.scss";
import "../index.html";
import Swiper, { Pagination } from "swiper";
import "../../node_modules/swiper/swiper-bundle.esm";

// ---- SWIPER ----

const swiper = new Swiper(".gently__slider", {
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ---- MODAL ERROR ----

const modalPopup = document.querySelector(".app__popup");
const modalTelephone = document.querySelector(".app__input");
const modalBtnSend = document.querySelector(".app__button");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("input-phone");
} catch (err) {
  isStorageSupport = false;
}

modalBtnSend.addEventListener("click", function (evt) {
  if (!modalTelephone.value) {
    modalPopup.classList.add("app__popup-error");
  } else if (isStorageSupport) {
    localStorage.setItem("input-phone", modalTelephone.value);
  }
});
