// $(document).ready(function(){
//   $('.carousel__inner').slick({
//   speed: 1000,
//   // slidesToShow: 1,
//   // centerMode: true,
//   // variableWidth: true,
//   // autoplay: true,
//   // autoplaySpeed: 3000,
//   // fade: true,
//   // cssEase: 'linear',
//   // adaptiveHeight: true,
//   prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg></button>',
//   nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg></button>',
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         dots: true
//       }
//     },
//     // {
//     //   breakpoint: 600,
//     //   settings: {
//     //     slidesToShow: 2,
//     //     slidesToScroll: 2
//     //   }
//     // },
//     // {
//     //   breakpoint: 480,
//     //   settings: {
//     //     slidesToShow: 1,
//     //     slidesToScroll: 1
//     //   }
//     // }
//   ]
// });
// });

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     // controlText: [
//     //   '<img src="../icons/left.svg>',
//     //   '<img src="../icons/right.svg>'
//     // ]
//     controls: false,
//     nav: false,
//     responsive: {
//       640: {
//         edgePadding: 20,
//         gutter: 20,
//         items: 2
//       },
//       700: {
//         gutter: 30
//       },
//       900: {
//         items: 3
//       }
//     }
// });
  
// document.querySelector('.prev').addEventListener('click', function () {
//   slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function () {
//   slider.goTo('next');
// });


$(document).ready(function () {
    // $('.carousel__inner').slick({
    //     speed: 1200,
    //     adaptiveHeight: true,
    //     prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    //     nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    //     responsive: [
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 dots: true,
    //                 arrows: false
    //             }
    //         }
    //     ]
    // });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order, .modal_descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    $('.feed-form').validate();
    $('#consultation').validate();
    $('#order').validate();
});