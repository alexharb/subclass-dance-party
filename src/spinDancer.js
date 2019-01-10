var makeSpinDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, limitTime(timeBetweenSteps));
  //this.time = timeBetweenSteps;
  this.$node.attr('id', 'spinDancer');
  this.$node.append('<img src="res/dancingQueen.png" />');
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
      animateTo: 360,
      callback: rotation
    });
  };
  rotation.call(this);
  makeDancer.prototype.step.call(this);
};


var limitTime = function limitTime(time) {
  if (time < 500) {
    return 500;
  } else {
    return time;
  }
};