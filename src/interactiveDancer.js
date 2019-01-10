var makeInteractiveDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id', 'interactiveDancer');
  this.$node.append('<img id="interactiveDancer" src="res/bowser.png" height="162" width="204" />');
};

makeInteractiveDancer.prototype = Object.create(makeDancer.prototype);

makeInteractiveDancer.prototype.constructor = makeInteractiveDancer;

makeInteractiveDancer.prototype.step = function() {
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.addClass('animated tada infinite');
  makeDancer.prototype.step.call(this);
};

