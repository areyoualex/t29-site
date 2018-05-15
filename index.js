var navStatus = false; //This is the state of the navbar (horizontal/vertical)

$(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() != 0 && !navStatus){
      navStatus = true;
      //TODO Change style + do stuff
    } else if ($(this).scrollTop() == 0){
      navStatus = false;
      //TODO Change style + do stuff
    }
  });
});
