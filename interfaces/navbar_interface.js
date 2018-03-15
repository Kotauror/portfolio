$( document ).ready(function() {

  $(".boris").click(function(){
    $(".description").load('projects/boris.html');
  });

  $(".oyster").click(function(){
    $(".description").load('projects/oystercard.html');
  });

  $(".battle").click(function(){
    $(".description").load('projects/battle.html');
  });

  $(".rpg").click(function(){
    $(".description").load('projects/rpg.html');
  });

  $(".bookmark").click(function(){
    $(".description").load('projects/bookmark.html');
  });

  $(".navbar-brand").click(function(){
    $(".description").text('thank you!');
  });

})
