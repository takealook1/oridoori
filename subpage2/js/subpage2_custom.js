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
// 
let time = document.querySelector('.respon_menu>a');
time.addEventListener('click', function(e){
  back.style.display = 'none';
  menu.style.transform = 'translateX(100%)';
  menu.style.display = 'none';
  // document.body.style.overflow = "hidden";
  document.body.style.position = 'relative';
});
// 
$(window).on('load resize', function(){
  if($(window).width() > 767 ) {
    menu.style.display = 'none';
    back.style.display = 'none';
  } else{
    document.body.style.position = 'relative';
  }
});