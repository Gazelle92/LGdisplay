history.scrollRestoration = "manual";
$(document).ready(function(){
  function winH(){ 
      document.getElementById("intro").style.height = window.innerHeight + "px";
  };
  winH();
  $(window).resize(winH);
});
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(
    selector,
    random(1.5, 2.5),
    {
      delay: random(0, delay),
      y: '5%', 
      repeat: -1, 
      yoyo: true, 
      ease: Power1.easeInOut
    }
  )
}
function processBalloon(){
    setTimeout(function() {
      floatingObject('.c1', .1, .15)
    }, 500);
    setTimeout(function() {
      floatingObject('.c2', .1, .15)
    }, 500);
    setTimeout(function() {
      floatingObject('.c3', .1, .15)
    }, 300);
    setTimeout(function() {
      floatingObject('.c4', .1, .15)
    }, 100);
}
floatingObject('.balloon', .1, .15);
processBalloon();

let introPopUp = true;
let topHeight = Number($('#about').css('height').replace('px', ""));
let top1 = Number($("#system").css('height').replace('px',''));
var offBottom = $("#system").offset().top;
var gallaryTop = $("#gallary").offset().top - $("#intro").css('height').replace('px','');

$(window).resize(function(){
  let topHeight = Number($('#about').css('height').replace('px', ""));
  let top1 = Number($("#system").css('height').replace('px',''));
  var offBottom = $("#system article").offset().top;
  var gallaryTop = $("#gallary").offset().top;
});

var Top = $(window).scrollTop();

$(window).scroll(function(){
	var Top = $(this).scrollTop();
 	if( 10 <= Top ){ 
    $("#intro").css('top','-130%');
	} else {
    $("#intro").css('top','0%');
  };
  let scroll = $(this).scrollTop(); 
  let topHeight = Number($('#about').css('height').replace('px', ""));
  let pinkScroll = (offBottom - Top) / 30;
  if(Top  < offBottom){
  } else if (Top  >= offBottom && gallaryTop > Top) {
  } else if(Top > gallaryTop){
    var yellowScroll = -(Top)/100;
    $('#gallary ul:nth-child(1)').css({'transform' : 'translate3d('+ yellowScroll +'%,0,0)'})
    $('#gallary ul:nth-child(2)').css({'transform' : 'translate3d('+ -yellowScroll +'%,0,0)'})
    $('#gallary ul:nth-child(3)').css({'transform' : 'translate3d('+ yellowScroll +'%,0,0)'})
  }

  if($("#middle").offset().top - 50 >= Top){
    if($(window).width() >= 800){
      $('nav .nav_bar').css('top','calc(50% - 215px)');
      $('nav .nav_bar').css('left','unset');
    } else {
      $('nav .nav_bar').css('left','8.3%');
      $('nav .nav_bar').css('top','unset');
    }
    $('nav ul li a').removeClass('navOn');
    $('nav ul li:nth-child(1) a').addClass('navOn');
  } else if( $("#middle").offset().top - 50 <= Top + 100 && $("#job").offset().top - 100 > Top ){
    if($(window).width() >= 800){
      $('nav .nav_bar').css('top','calc(50% - 122px)');
      $('nav .nav_bar').css('left','unset');
    } else {
      $('nav .nav_bar').css('left','25%');
      $('nav .nav_bar').css('top','unset');
    }
    $('nav ul li a').removeClass('navOn');
    $('nav ul li:nth-child(2) a').addClass('navOn');
  } else if( $("#job").offset().top - 150 <= Top + 100 && $("#guide").offset().top - 250 > Top ){
    if($(window).width() >= 800){
      $('nav .nav_bar').css('top','calc(50% - 30px)');
      $('nav .nav_bar').css('left','unset');
    } else {
      $('nav .nav_bar').css('left','41.6%');
      $('nav .nav_bar').css('top','unset');
    }
    $('nav ul li a').removeClass('navOn');
    $('nav ul li:nth-child(3) a').addClass('navOn');
  } else if( $("#guide").offset().top - 350 <= Top && $("#process").offset().top - 100 > Top ){
    if($(window).width() >= 800){
      $('nav .nav_bar').css('top','calc(50% + 60px)');
      $('nav .nav_bar').css('left','unset');
    } else {
      $('nav .nav_bar').css('left','58.4%');
      $('nav .nav_bar').css('top','unset');
    }
    $('nav ul li a').removeClass('navOn');
    $('nav ul li:nth-child(4) a').addClass('navOn');
  } else if( $("#process").offset().top - 100 <= Top + 100 && $("#faq").offset().top - 100 > Top ){
    if($(window).width() >= 800){
      $('nav .nav_bar').css('top','calc(50% + 152px)');
      $('nav .nav_bar').css('left','unset');
    } else {
      $('nav .nav_bar').css('left','75%');
      $('nav .nav_bar').css('top','unset');
    }
    $('nav ul li a').removeClass('navOn');
    $('nav ul li:nth-child(5) a').addClass('navOn');
  } else if( $("#faq").offset().top - 100 <= Top ){
    if($(window).width() >= 800){
      $('nav .nav_bar').css('top','calc(50% + 228px)');
      $('nav .nav_bar').css('left','unset');
    } else {
      $('nav .nav_bar').css('left','91.7%');
      $('nav .nav_bar').css('top','unset');
    }
    $('nav ul li a').removeClass('navOn');
    $('nav ul li:nth-child(6) a').addClass('navOn');
  }
  
  if(Top < 500){
    $('.aboutBg img').css('width',''+ Top / 5 +'%');
  } else{
    $('.aboutBg img').css('width','100%');
  };
  
//스르륵
  if($("#about").offset().top + 20 >= Top){
    $('#about .hide *').css('top','0');
    $('.mobAbout').css('top','0');
    $('.mobText').css('top','0');
    console.log("about");
  } else if($("#system").offset().top - window.innerHeight <= Top && $("#gallary").offset().top - window.innerHeight > Top){
    $('#system .hide *').css('top','0');
    console.log("system");
  } else if($("#job").offset().top - window.innerHeight + 300 <= Top && $("#guide").offset().top - window.innerHeight +300 > Top){
    $('#job .hide *').css('top','0');
    console.log("job");
  } else if($("#guide").offset().top - window.innerHeight +300 <= Top && $("#process").offset().top - window.innerHeight +300 > Top){
    $('#guide .hide *').css('top','0');
    console.log("guide");
  } else if($("#process").offset().top - window.innerHeight +300 <= Top && $("#faq").offset().top - window.innerHeight +300 > Top){
    $('#process .prAtc .hide *').css('top','0');
    $('#process .mob.hide *').css('top','0');
    $('#process .prTitle *').css('top','0');
    console.log("process");
  } else if($("#faq").offset().top - window.innerHeight +300 <= Top){
    $('#faq .hide *').css('top','0');
    console.log("faq");
  };
  if($('#process .prAtc2').offset().top - window.innerHeight <= Top && $("#faq").offset().top - 300 > Top){
    $('#process .prAtc2 .hide *').css('top','0');
  };
  //Table chart
  $('.popupPage').css('right','-100%');
  $('.ppBg').hide(300);
  $('.popupPage').removeClass('popupOn');
});

$('#job .table li').click(function(){
  setTimeout(function() {
  $('.popupPage').css('right','0%');
$('.ppBg').show(300);
  $('.popupPage').addClass('popupOn');
},1);
});
$("#job .table li").click(function() {
  var chartNum = $("#job .table li").index( this ) + 2;

  $('.popupWrap').css('display','none');
  $(".popupWrap:nth-of-type(" + chartNum + ")").css('display','flex');
});
$('.popupPage .exit').click(function(){
  $('.popupPage').css('right','-100%');
$('.ppBg').hide(300);
});

$('#intro .hide *').css('top','0');

// 네비게이션
$('nav ul li a').click(function(){
  $('nav ul li a').removeClass('navOn');
  $(this).addClass('navOn');
});
$('section').click(function(){
  if( $('.popupPage').hasClass('popupOn') == true ){
    $('.popupPage').css('right','-100%');
$('.ppBg').hide(300);
    $('.popupPage').removeClass('popupOn')
  }
});
$('.tableLink li').click(function(){
  $('#job .table').css('display','none');
  $('.tableLink li').css('color','#7f8697');
  $(this).css('color','#fff');
});
$('.tableLink .tl1').click(function(){
  $('#job #table1').css('display','grid');
});
$('.tableLink .tl2').click(function(){
  $('#job #table2').css('display','grid');
});
$('.tableLink .tl3').click(function(){
  $('#job #table3').css('display','grid');
});
$('.tableLink .tl4').click(function(){
  $('#job #table4').css('display','grid');
});
$('.tableLink .tl5').click(function(){
  $('#job #table5').css('display','grid');
});
$('.tableLink .tl6').click(function(){
  $('#job #table6').css('display','grid');
});

$('#faq .faqContainer .faqBox .headBox').click(function(){  
  //$("#faq .faqContainer .faqBox p").toggle(200);
  $('#faq .faqContainer .faqBox .headBox .cross div:last-child').show(200);
  $('#faq .faqContainer .faqBox p').hide(200);
  if($(this).hasClass('boxOn') == true){
    $('#faq .faqContainer .faqBox .headBox').removeClass('boxOn');
    $(this).find(".cross div:last-child").show(200);
    $(this).siblings("#faq .faqContainer .faqBox p").hide(200);
    $(this).removeClass('boxOn');
  } else {
    $('#faq .faqContainer .faqBox .headBox').removeClass('boxOn');
    $(this).find(".cross div:last-child").hide(200);
    $(this).siblings("#faq .faqContainer .faqBox p").show(200);
    $(this).addClass('boxOn'); 
  }
});


$(window).resize(function(){
  processBalloon();
  if($("#middle").offset().top - 50 >= Top){
    if($(window).width() >= 800){
      $('nav .nav_bar').css('top','calc(50% - 215px)');
      $('nav .nav_bar').css('left','unset');
    } else {
      $('nav .nav_bar').css('left','8.3%');
      $('nav .nav_bar').css('top','unset');
    }
    $('nav ul li a').removeClass('navOn');
    $('nav ul li:nth-child(1) a').addClass('navOn');
  } else if( $("#middle").offset().top - 50 <= Top + 100 && $("#job").offset().top - 100 > Top ){
    if($(window).width() >= 800){
      $('nav .nav_bar').css('top','calc(50% - 97px)');
      $('nav .nav_bar').css('left','unset');
    } else {
      $('nav .nav_bar').css('left','30%');
      $('nav .nav_bar').css('top','unset');
    }
    $('nav ul li a').removeClass('navOn');
    $('nav ul li:nth-child(2) a').addClass('navOn');
  } else if( $("#job").offset().top - 150 <= Top + 100 && $("#process").offset().top - 100 > Top ){
    if($(window).width() >= 800){
      $('nav .nav_bar').css('top','calc(50% + 15px)');
      $('nav .nav_bar').css('left','unset');
    } else {
      $('nav .nav_bar').css('left','50%');
      $('nav .nav_bar').css('top','unset');
    }
    $('nav ul li a').removeClass('navOn');
    $('nav ul li:nth-child(3) a').addClass('navOn');
  } else if( $("#process").offset().top - 50 <= Top + 100 && $("#faq").offset().top - 100 > Top ){
    if($(window).width() >= 800){
      $('nav .nav_bar').css('top','calc(50% + 126px)');
      $('nav .nav_bar').css('left','unset');
    } else {
      $('nav .nav_bar').css('left','70%');
      $('nav .nav_bar').css('top','unset');
    }
    $('nav ul li a').removeClass('navOn');
    $('nav ul li:nth-child(4) a').addClass('navOn');
  } else if( $("#faq").offset().top - 150 <= Top - 100){
    if($(window).width() >= 800){
      $('nav .nav_bar').css('top','calc(50% + 228px)');
      $('nav .nav_bar').css('left','unset');
    } else {
      $('nav .nav_bar').css('left','90%');
      $('nav .nav_bar').css('top','unset');
    }
    $('nav ul li a').removeClass('navOn');
    $('nav ul li:nth-child(5) a').addClass('navOn');
  }
});

$('#process .c1').hover(function(){
  $('#process .textBox span').css('display','none');
  $('#process .textBox span:nth-child(1)').css('display','block');
});
$('#process .c2').hover(function(){
  $('#process .textBox span').css('display','none');
  $('#process .textBox span:nth-child(2)').css('display','block');
});
$('#process .c3').hover(function(){
  $('#process .textBox span').css('display','none');
  $('#process .textBox span:nth-child(3)').css('display','block');
});
$('#process .c4').hover(function(){
  $('#process .textBox span').css('display','none');
  $('#process .textBox span:nth-child(4)').css('display','block');
});
$('#process .c5').hover(function(){
  $('#process .textBox span').css('display','none');
  $('#process .textBox span:nth-child(5)').css('display','block');
});



$('.logos img:nth-child(1)').click(function (){
  window.open('https://www.lgdisplay.com/kor');
});
$('.logos img:nth-child(2)').click(function (){
  window.open('https://news.lgdisplay.com/kr/');
});
$('.logos img:nth-child(3)').click(function (){
  window.open('https://kr.oledspace.com/#');
});
$('.logos img:nth-child(4)').click(function (){
  window.open('https://m.blog.naver.com/PostList.naver?blogId=youngdisplay');
});
$('.logos img:nth-child(5)').click(function (){
  window.open('https://www.youtube.com/user/mylgdisplay');
});
$('#system .slide div').click(function (){
  //$(this).addClass('slideOn');
});

$('.closeBtn').click(function (){
  //$(this).addClass('slideOn');
  $('#interviewPage').hide(500);
  $('.interviewWrap').css('display','none');
});

$('#system .slide div:nth-child(1)').click(function(){
  $('#interviewPage').show(500);
  $('.interviewWrap:nth-child(1)').css('display','block');
});
$('#system .slide div:nth-child(2)').click(function(){
  $('#interviewPage').show(500);
  $('.interviewWrap:nth-child(2)').css('display','block');
});
$('#system .slide div:nth-child(3)').click(function(){
  $('#interviewPage').show(500);
  $('.interviewWrap:nth-child(3)').css('display','block');
});
$('#system .slide div:nth-child(4)').click(function(){
  $('#interviewPage').show(500);
  $('.interviewWrap:nth-child(4)').css('display','block');
});
$('#system .slide div:nth-child(5)').click(function(){
  $('#interviewPage').show(500);
  $('.interviewWrap:nth-child(5)').css('display','block');
});
