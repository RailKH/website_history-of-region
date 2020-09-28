var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,

  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

const links = document.querySelectorAll(".header_links li");
const wrapperLink = document.querySelectorAll(".wrapper-link");
const closeButton = document.querySelectorAll(".close");

links.forEach((item) => {
  item.addEventListener("click", (e) => {
    document
      .querySelector(`.${e.target.dataset.link}`)
      .classList.toggle("disabled");
    // console.log(document.querySelector(`.${e.target.dataset.link}`));
  });
});

closeButton.forEach((item) => {
  item.addEventListener("click", (e) => {
    wrapperLink.forEach((item) => {
      item.classList.add("disabled");
    });
  });
});

function test() {
  document
    .querySelector(`.${e.target.dataset.link}`)
    .classList.toggle("disabled");
}
