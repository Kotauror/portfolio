$( document ).ready(function() {

  $("#navbar").load("navbar.html");

  $(".simple_link").click(function(){
    console.log("hehe")
    $(".simple_link").toggleClass('onclick');
  });

})
