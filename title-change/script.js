$(document).ready(function(){

var posOne = $('.one').position().top,
    posTwo = $('.two').position().top,
    posThree = $('.three').position().top,
    rangeHome = posTwo - 1,// for the bottom of first section
    rangeAbout = posThree -1;//for the bottom of the second section

  $(window).scroll(function(){
    var winTop = $(this).scrollTop();


    if(winTop == posOne || winTop <= posTwo ){
      $('#title').text('Home');
    }
    if (winTop >= posTwo && winTop <= posThree) {
      $('#title').text('About');
    }
    if (winTop == posThree) {

      $('#title').text('Work');

    }
  });
});
