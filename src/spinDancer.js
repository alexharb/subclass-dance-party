var makeSpinDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, limitTimeSpin(timeBetweenSteps));
  this.$node.attr('id', 'spinDancer');
  this.$node.append('<img src="res/peach.png" height="127" width="91" />');
};

makeSpinDancer.prototype = Object.create(makeDancer.prototype);

makeSpinDancer.prototype.constructor = makeSpinDancer;

makeSpinDancer.prototype.step = function() {
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var rotation = function() {
    this.$node.rotate({
      angle: 0,
      animateTo: 360
    });
  };
  rotation.call(this);
  makeDancer.prototype.step.call(this);
};


var limitTimeSpin = function(time) {
  if (time < 150) {
    return 150;
  } else if (time > 850) {
    return time * 1.25;
  } else {
    return time;
  }
};