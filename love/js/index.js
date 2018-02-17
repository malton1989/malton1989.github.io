$(document).ready(function () {   
	$('.q1').delay(1000).fadeIn(300).delay(1500).fadeOut(300, function () {
		$('.q2').delay(1000).fadeIn(300 ).delay(1500).fadeOut(300, function () {
			$('.quotes').fadeOut(300);
          	$('.main-section').delay(1000).fadeIn(300).delay(1500).fadeOut(300, function () {
              $('.viewport').delay(1000).fadeIn(300, function(){
                $('.countup p').delay(300).fadeIn(300,function(){
                   upTime('dec,18,2014,00:00:00');
                  
                });
                
              });
            	
          	});
		});
	});
});

$("#top").lettering();
$("#bottom").lettering();

   var slideWidth = 750;  //Ширина одного слайда
    var slideTimer;        //Интервал смены кадров
 
    /*Устанавливаем ширину списка
    *равную произведению ширины одного слайда на общее кол-во слайдов
    *чтобы он вытянулся в одну строку*/
    $('.slidewrapper').width($('.slidewrapper').children().length * slideWidth);
    /*задаем временной интервал*/
    sliderTimer=setInterval(nextSlide,1000);
    
/*функция, сменяющая слайды каждую секунду*/
function nextSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));  //определяем текущий слайд
    currentSlide++;  //увеличиваем его значение
    if(currentSlide>=$('.slidewrapper').children().length) //перематываем к началу, если слайд последний
    {
        currentSlide=0;   
    }
    /*передвигаем список и сохраняем значение текущего слайда*/
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}
 $('.viewport').hover(function(){
    clearInterval(sliderTimer);
},function(){
    sliderTimer=setInterval(nextSlide,1000);
});
 

  // Month,Day,Year,Hour,Minute,Second
  upTime('dec,18,2014,00:00:00'); // ****** Change this line!

function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('hours').firstChild.nodeValue = hours;
  document.getElementById('minutes').firstChild.nodeValue = mins;
  document.getElementById('seconds').firstChild.nodeValue = secs;

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}