$( document ).ready(function() {

  $(".back-end").click(function(){
    $(".back-end").text('Ruby, Rails, Javascript, Node.js, Sequelize');
  });

  $(".databases").click(function(){
    $(".databases").text('SQL, Postgres');
  });

  $(".front-end").click(function(){
    $(".front-end").text('HTML, CSS, Javascript, Bootstrap, EaselJS');
  });

  $(".hosting").click(function(){
    $(".hosting").text('Amazon Cloud Services, Heroku, Sinatra');
  });

  $(".testing").click(function(){
    $(".testing").text('RSpec, Jasmine, Mocha, Zombie, Capybara ');
  });

})
