$('.box').submit(function(event){
  let yname = $('input#name').val();
  let mail = $('input#email').val();
  let msg = $('textarea#msg').val();

  $('.name').text(yname);
  $('.email').text(mail);
  $('.msg').text(yname);

    event.preventDefault();
});



$('#design').click(function(){
$('#design p').toggle();
$('#design img').toggle();
});
$('#devt').click(function(){
$('#devt p').toggle();
$('#devt img').toggle();
});
$('#ptm').click(function(){
$('#ptm p').toggle();
$('#ptm img').toggle();
});
$('.content #w1').hover(function(){
  $('#hd1').toggle();
});
$('.content #w2').hover(function(){
  $('#hd2').toggle();
});
$('.content #w3').hover(function(){
  $('#hd3').toggle();
});
$('.content #w4').hover(function(){
  $('#hd4').toggle();
});
$('.content #w5').hover(function(){
  $('#hd5').toggle();
});
$('.content #w6').hover(function(){
  $('#hd6').toggle();
});
$('.content #w7').hover(function(){
  $('#hd7').toggle();
});
$('.content #w8').hover(function(){
  $('#hd8').toggle();
});
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
