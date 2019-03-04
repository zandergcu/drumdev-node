
$( document ).ready(function() {


  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
    $(".nav-items").toggleClass("is-active");
    $("nav").toggleClass("is-active");
  });

  $(".smooth-scroll").click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000);
       return false;
     }
   }
  });


  $('.our-work-slick').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

    $('.latest-news-slick').slick({
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: true
        }
      },
        {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      }
    ]
  });


});
