/* Twitter feed code
 *
 */
!(function (d, s, id) {
  var js = d.getElementsByTagName(s)[0]
  var fjs = d.getElementsByTagName(s)[0]
  var p = /^http:/.test(d.location) ? 'http' : 'https'
  if (!d.getElementById(id)) {
    js = d.createElement(s)
    js.id = id
    js.src = p + '://platform.twitter.com/widgets.js'
    fjs.parentNode.insertBefore(js, fjs)
  }
})(document, 'script', 'twitter-wjs');
//Smooth Anthor
function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 40
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();