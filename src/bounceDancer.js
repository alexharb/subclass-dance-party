var makeBounceDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, limitTimeBounce(timeBetweenSteps));
  this.$node.attr('id', 'bounceDancer');
  this.$node.append('<img src="res/marioPeace.png" height="144" width="87" />');
};

makeBounceDancer.prototype = Object.create(makeDancer.prototype);

makeBounceDancer.prototype.constructor = makeBounceDancer;

makeBounceDancer.prototype.step = function() {
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.addClass('animated bounce infinite');
  makeDancer.prototype.step.call(this);
};


var limitTimeBounce = function (time) {
  return time + 1000;
};