$(document).ready(function(){
    $(".submenu").mouseover(function() {
      $(".submenu ul").addClass("showMegamenu");

    });
    $(".submenu").mouseout(function() {
      $(".submenu ul").removeClass("showMegamenu");
    });

    //SCROLL MENU
    $(window).on('scroll', function(){
       if($(window).scrollTop()> 60){
           $('.nav').addClass('scrollnav');
       }
       else{
           $('.nav').removeClass('scrollnav');

       }
   })
});
