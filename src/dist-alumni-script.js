$(document).ready(function(){
    $('.slidercontent').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        speed: 800,
        touchMove:true,
        pauseOnHover: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
            {
                breakpoint: 666,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  prevArrow: false,
                  nextArrow: false,
                }
              }
        ]
      });
});