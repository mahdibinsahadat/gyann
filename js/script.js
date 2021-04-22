$('.banner-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<i class="fas fa-angle-left prev"></i>',
  nextArrow:'<i class="fas fa-angle-right next"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false,
          dots:true,
      }
    },
         {
        
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
          arrows:false,
        dots: true,
      }
    },
    {
        
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
          arrows:false,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false,
          dots:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false,
          dots:true,
      }
    }
  ]
});






var rev = $('.rev_slider');
rev.on('init', function (event, slick, currentSlide) {
    var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        next2 = cur.next().next(),
        prev = cur.prev(),
        prev2 = cur.prev().prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev2.addClass('slick-sprev2');
    next2.addClass('slick-snext2');
    cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
    slick.$prev = prev;
    slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var
        cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    slick.$prev.prev().removeClass('slick-sprev2');
    slick.$next.next().removeClass('slick-snext2');
    next = cur.next(),
        prev = cur.prev();
    //prev2.prev().prev();
    //next2.next().next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev.prev().addClass('slick-sprev2');
    next.next().addClass('slick-snext2');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
    speed: 1000,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    prevArrow: '<button> prev</button>',
    nextArrow: '<button> next</button>',
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    centerPadding: '0',
    swipe: true,
    customPaging: function (slider, i) {
        return '';
    },
    /*infinite: false,*/
});





$('.counter').counterUp({
    delay: 10,
    time: 1000,
});






$('.course-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    centerMode: true,
    centerPadding: "0",
      responsive: [
              {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
          arrows:true,
          centerMode: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
          arrows:true,
          centerMode: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          dots: true,
          arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false,
          dots: true,
          
      }
    }
  ]

});




//====================================
var rev = $('.test_slider');
rev.on('init', function (event, slick, currentSlide) {
    var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        next2 = cur.next().next(),
        prev = cur.prev(),
        prev2 = cur.prev().prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev2.addClass('slick-sprev2');
    next2.addClass('slick-snext2');
    cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
    slick.$prev = prev;
    slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var
        cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    slick.$prev.prev().removeClass('slick-sprev2');
    slick.$next.next().removeClass('slick-snext2');
    next = cur.next(),
        prev = cur.prev();
    //prev2.prev().prev();
    //next2.next().next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev.prev().addClass('slick-sprev2');
    next.next().addClass('slick-snext2');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
    speed: 1000,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    prevArrow: '<button> prev</button>',
    nextArrow: '<button> next</button>',
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
        prevArrow: '<i class="fas fa-angle-left prev"></i>',
        nextArrow: '<i class="fas fa-angle-right next"></i>',
    centerPadding: '0',
    swipe: true,
    customPaging: function (slider, i) {
        return '';
    },
    asNavFor: '.text-slider'
});


$('.text-slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
      asNavFor: '.test_slider'
});


$('.teacher-slider').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
      responsive: [
              {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          dots: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


$('.end-slider').slick({
    dots: false,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding: "20px",
      responsive: [
            {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
});



