$(document).ready(function() {
  window.dancers = [];


  $('.addDancerButton').on('click', function(event) {
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
  
  
  $('.lineUpButton').on('click', function(event) {
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
  
});

