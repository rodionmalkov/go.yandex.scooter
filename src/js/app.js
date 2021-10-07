import "../../node_modules/focus-visible/dist/focus-visible";
import "../scss/main.scss";
import "../index.html";
import Swiper, { Pagination } from "swiper";
import "../../node_modules/swiper/swiper-bundle.esm";

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
