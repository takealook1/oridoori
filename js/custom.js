// tab button
    $('.butbox button:first-child').click(function(){
      $('.tab1').show();
      $('.tab2').hide();
      $(this).addClass('active')
      $(this).siblings().removeClass('active')
       $('.tab1').slick('setPosition');
    })
    $('.butbox button:last-child').click(function(){
      $('.tab2').show();
      $('.tab1').hide();
      $(this).addClass('active')
      $(this).siblings().removeClass('active')
      $('.tab2').css('display','grid');
      $('.tab2').slick('setPosition');
    })
    // inputsearch reset
    function inreset(){
      let search2 = document.getElementById('search1');
      let key = event.key || event.keyCode;
      if (key === 'Enter' || key === 13){
        search2.value = '';
      }
    } 
// responsive slick
		var slider = $('.tab1');
		var slider2 = $('.tab2');
		var slickOptions = {
		    slide: 'div',
		    setPosition: 0,
		    infinite: false,
		    slidesToShow: 3,
		    slidesToScroll: 3,
		    dots:true,
		    arrows:false,
		  };
		var slickOptions2 = {
		    slide: 'div',
		    setPosition: 0,
		    infinite: false,
		    slidesToShow: 3,
		    slidesToScroll: 3,
		    dots:true,
		    arrows:false,
		  };
		$(window).on('load resize', function(){
			if($(window).width() > 767 ) {
        if($(slider).hasClass('slick-initialized') || $(slider2).hasClass('slick-initialized') ){
				slider.slick('unslick');
        slider2.slick('unslick');
      }				
        menu.style.display = 'none';
        back.style.display = 'none';
        // document.body.style.overflow ='unset';
			} else {
				slider.not('.slick-initialized').slick(slickOptions);
        slider2.not('.slick-initialized').slick(slickOptions2);
			}
		})
// slick
$(function(){
  $('.text_all').slick({
    infinite : true,
    slidesToShow : 2,
    slidesToScroll : 1,
    speed : 500,
    autoplay : false,
    vertical : false,
    draggable : true,
    arrows: false,
    dots: true
  });
});
// hamburger
let ham = document.querySelector('.hamburger');
let back = document.querySelector('.respon_back');
let menu = document.querySelector('.respon_menu');
ham.addEventListener('click', function(){
  back.style.display = 'block';
  menu.style.display = 'block';
  menu.style.transform = 'translateX(-100%)';
  // document.body.style.overflow = "hidden";
  document.body.style.position = 'fixed';
});
let time = document.querySelector('.respon_menu>a');
time.addEventListener('click', function(e){
  back.style.display = 'none';
  menu.style.transform = 'translateX(100%)';
  menu.style.display = 'none';
  // document.body.style.overflow = "hidden";
  document.body.style.position = 'relative';
});
// mobil slick
/*
var slider = $('.tab1');
var slider2 = $('.tab2');
var slickOptions = {
    slide: 'div',
    setPositin: 0,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:true,
    arrows:false,
  };
var slickOptions2 = {
    slide: 'div',
    setPositin: 0,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:true,
    arrows:false,
  };
$(window).on('load resize', function() {
    if($(window).width() > 767 ) {
        slider.slick('unslick');
        slider2.slick('unslick');
        $('.butbox button:last-child').click(function(){
          $('.tab2').show();
          $('.tab1').hide();
          $(this).addClass('active')
          $(this).siblings().removeClass('active')
          $('.tab2').css('display','grid');
        })
    }else{
        slider.not('.slick-initialized').slick(slickOptions);
        slider2.not('.slick-initialized').slick(slickOptions2);
        $('.butbox button:first-child').click(function(){
          $('.tab1').show();
          $('.tab2').hide();
          $(this).addClass('active')
          $(this).siblings().removeClass('active')
          $('.tab1').slick('setPosition');
          $('.tab2').slick('setPosition');
        })
        $('.butbox button:last-child').click(function(){
          $('.tab2').show();
          $('.tab1').hide();
          $(this).addClass('active')
          $(this).siblings().removeClass('active')
          $('.tab2').css('display','flex');
          $('.tab1').slick('setPosition');
          $('.tab2').slick('setPosition');
        })
        $('..butbox button:last-child').hassClass('active').css('display',
        'flex');
    }
});
*/
