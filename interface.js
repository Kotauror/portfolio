$( document ).ready(function() {

  $("#navbar").load("navbar.html").ready(function() {

    $(".content").click(function(){
      console.log('hehe')
      $(".content").text('boris');
    });

  })


})
