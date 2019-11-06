$('.box').submit(function(event){
  let yname = $('input#name').val();
  let mail = $('input#email').val();
  let msg = $('textarea#msg').val();

  $('.name').text(yname);
  $('.email').text(mail);
  $('.msg').text(yname);

  if(yname == ""){
    alert("Enter your name");
  }else if (mail == "") {
    alert("Enter your Email");
  }else if (msg == "") {
    alert("Enter your message");
  }
  else{
    alert("Thank you "+yname+" for reaching out");
  }

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

$('.col-md-3 #w1').hover(function(){
  $('#hd1').fadeToggle(1000);
 },function(){
  $('#hd1').fadeOut(1000);
});
$('.col-md-3 #w2').hover(function(){
  $('#hd2').fadeIn(1000);
},function(){
  $('#hd2').fadeOut(1000);
});
$('.col-md-3 #w3').hover(function(){
  $('#hd3').fadeIn(1000);
},function(){
  $('#hd3').fadeOut(1000);
});
$('.col-md-3 #w4').hover(function(){
  $('#hd4').fadeIn(1000);
},function(){
  $('#hd4').fadeOut(1000);
});
$('.col-md-3 #w5').hover(function(){
  $('#hd5').fadeIn(1000);
},function(){
  $('#hd5').fadeOut(1000);
});
$('.col-md-3 #w6').hover(function(){
  $('#hd6').fadeIn(1000);
},function(){
  $('#hd6').fadeOut(1000);
});
$('.col-md-3 #w7').hover(function(){
  $('#hd7').fadeIn(1000);
},function(){
  $('#hd7').fadeOut(1000);
});
$('.col-md-3 #w8').hover(function(){
  $('#hd8').fadeIn(1000);
},function(){
  $('#hd8').fadeOut(1000);
});
