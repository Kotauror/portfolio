$( document ).ready(function() {

  $(".boris").click(function(){
    $(".description").load('projects/boris.html');
  });

  $(".oyster").click(function(){
    $(".description").load('projects/oystercard.html');
  });

  $(".navbar-brand").click(function(){
    $(".description").text('thank you!');
  });

})
