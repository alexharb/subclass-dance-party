$(document).ready(function() {
  window.dancers = [];
  
  $('.addDancerButton').on('click', function() {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });
  
  
  $('.lineUpButton').on('click', function() {
    var currentHeight = 50;
    window.dancers.forEach(function(dancer) {
      var styleSettings = {
        top: currentHeight,
        left: 20
      };
      dancer.css(styleSettings);
      currentHeight += dancer.height() + 10;
    });
  });
  
  
  //<a href="#" class="pairUpButton" data-dancer-make-pair-up="makePairUp">make the dancers pair up</a>
  $('.pairUpButton').on('click', function() {
    var pairUp = window.dancers.slice(0);
    for (let i = 0; i < window.dancers.length; i += 2) {
      var left = $('body').height() * Math.random();
      var top = $('body').height() * Math.random();
      //debugger;
      var partner = Math.floor(Math.random() * (pairUp.length));
      var right = pairUp[partner];
      pairUp.splice(partner, 1);
      
      var styleSettings = {
        top: top,
        left: left
      };
      right.css(styleSettings);
      
      if (pairUp.length > 0) {    
        left += right.width();
        partner = Math.floor(Math.random() * (pairUp.length));
        right = pairUp[partner];
        pairUp.splice(partner, 1);
        
        styleSettings = {
          top: top,
          left: left
        };
        right.css(styleSettings); 
      }
    }
  });
  
  /*
  button
  on click, do stuff
  make copy of dancers
  over each iteration, generate two random numbers within the array and slice them out
  generate a random location for first one
  second one would be to the right of it
  
  */

});


/// remove:


/*var removeInteractiveDancer = function (theDancer) {
  console.log('interactive dancer mouseover');
  console.log(theDancer);
  theDancer.addClass('animated bounceOutDown');
};*/