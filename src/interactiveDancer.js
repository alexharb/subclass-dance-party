var interactiveDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, limitTimeInteractive(timeBetweenSteps));
  this.$node.attr('id', 'interactiveDancer');
  this.$node.append('<img src="res/bowser.png" height="144" width="87" />');
};

interactiveDancer.prototype = Object.create(makeDancer.prototype);

interactiveDancer.prototype.constructor = interactiveDancer;

interactiveDancer.prototype.step = function() {
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.addClass('animated bounce infinite');
  makeDancer.prototype.step.call(this);
};


var limitTimeInteractive = function limitTime(time) {
  //note: edit later
  return time + 1000;
};