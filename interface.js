$( document ).ready(function() {

  $("#navbar").load("navbar.html");

  $(".dropdown-toggle").click(function(){
    $('.dropdown-toggle').attr('class', 'onclick');
  })

})
