var navStatus = false; //This is the state of the navbar (horizontal/vertical)

$(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() != 0 && !navStatus){
      navStatus = true;
      $("nav").hide(150, function(){
        $("nav").css({
          "flexDirection":"column",
          "top":"50%",
          "transform":"translateY(-50%)",
          "left":"auto",
          "right":"-18vmin",
          "bottom":"initial",
          "height":"40vmin",
          "width":"18vmin"
        }); //Set CSS before reappearing
        $("nav a").css({"fontSize":"4vmin"});
        $("nav").show(100).animate({
          "right":"5vw"
        },200);
      });
    } else if ($(this).scrollTop() == 0){
      navStatus = false;
      $("nav").hide(150, function(){
        $("nav").css({
          "flexDirection":"row",
          "transform":"translateX(-50%)",
          "top":"auto",
          "left":"50%",
          "right":"auto",
          "bottom":"-14vmin",
          "height":"14vmin",
          "width":"80vw"
        }); //Set CSS before reappearing
        $("nav a").css({"fontSize":"4vmin"});
        $("nav").show(100).animate({
          "bottom":"0"
        },200);
      });
    }
  });
});
