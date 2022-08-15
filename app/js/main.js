$(function() {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left slider-arrows__left-1" src="./app/img/arrows-left.svg" alt=""></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right slider-arrows__right-2" src="./app/img/arrows-right.svg" alt=""></img>',
    asNavFor: ".slider-dotshead",
    autoplay: true,
    autoplaySpeed: 2500
  });
  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider"
  });
  $(".website-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./app/img/arrows-left.svg" alt=""></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./app/img/arrows-right.svg" alt=""></img>',
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 678, settings: { slidesToShow: 2 } },
      { breakpoint: 336, settings: { slidesToShow: 1 } }
    ]
  });
  $(".menu-btn").on("click", function() {
    $(".menu").toggleClass("active");
  });
  $(".nav-btn").on("click", function() {
    $(".nav-bar__item").toggleClass("active");
  });
  $(".btn").on("click", function() {
    $(".modal").show();
  });
  $(".close").on("click", function() {
    $(".modal").hide();
  });

  $(".menu__list-drop").hover(function() {
    $(".menu__drop").toggleClass('menu__drop-active'); 
  });

  window.onclick = function(event) {
    if (event.target == modal) {
      $(".modal").hide();
    }
  };
});
