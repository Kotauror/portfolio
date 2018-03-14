$( document ).ready(function() {

  $(".boris").click(function(){
    $(".description").load('projects/boris.html');
  });

  $(".navbar-brand").click(function(){
    $(".description").text('thank you!');
  });

})
