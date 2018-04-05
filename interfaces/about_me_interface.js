$( document ).ready(function() {

  $(".back-end").click(function(){
    $(".back-end").text('Ruby, Rails, Node.js, Sequelize');
  });

  $(".databases").click(function(){
    $(".databases").text('SQL, Postgres');
  });

  $(".front-end").click(function(){
    $(".front-end").text('HTML, CSS, Javascript, jQuery, Bootstrap, EaselJS');
  });

  $(".hosting").click(function(){
    $(".hosting").text('Amazon Cloud Services, Heroku, Sinatra');
  });

  $(".testing").click(function(){
    $(".testing").text('RSpec, Jasmine, Mocha, Zombie, Capybara ');
  });

  $(".agile").click(function(){
    $(".agile").text('In my previous job as a lawyer I used to be responsible for drafting software development contracts suited for agile working. This helps me a lot to work as an software developer, as I fully understand what is expected of an agile team.');
  });

  $(".tdd").click(function(){
    $(".tdd").text("I'm sticking to TDD as much as possible, which helps me to produce a fully-working, clean and easy to read code. In a vast majority of cases, my test coverate is > 95%.");
  });

  $(".solid").click(function(){
    $(".solid").text("Everyday I learn more about practical implementations of SOLID principles, that are quickly becoming cornerstones of my projects, expecially the separation of concerns and keeping the code open for extensions.");
  });


})
