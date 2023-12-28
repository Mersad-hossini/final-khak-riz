// owl Carousel


$(".owl-one").owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: false,
  autoplay: false,
  // autoplayTimeout: 3000,
  stagePadding: 50,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

$(".owl-two").owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: false,
  autoplay: false,
  // autoplayTimeout: 3000,
  stagePadding: 50,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

$(".owl-three").owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  stagePadding: 50,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});