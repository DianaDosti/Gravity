// очень важна чтоб дже куери не запускался до страницы
// $(function() {
//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:30,   // был изменен на 30 т.к рассст между слайдами было 30 пикселеЙ, ИЗМЕРЕНО БЫЛО В ФИГМА
//     nav:true,
//     responsive:{
//         0:{
//             items:1  // на расширениях больше 0пикс и меньше 600пикс будет виден 1 слайд
//         },
//         600:{
//             items:1   // на расширениях больше 600пикс и меньше 1000 600пикс будет виден 1 слайд
//         },
//         1000:{
//             items:2     // на расширениях больше 1000пикс будет виден 2 слайда
//
//         }
//     }
// });
// });
$(function() {
	$('.works-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
	    startPosition: 1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
  $('.contributor-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots: false,
      navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
      // startPosition: 1,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });


  $('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
    e.preventDefault();
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  });


	
