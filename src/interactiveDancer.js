var makeInteractiveDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id', 'interactiveDancer');
  this.$node.append('<img id="interactiveDancer" src="res/bowser.png" height="162" width="204" />');
  var falling = this.fall.bind(this);
  this.$node.mouseover(falling);
  this.alreadyCalled = false;
};

makeInteractiveDancer.prototype = Object.create(makeDancer.prototype);

makeInteractiveDancer.prototype.constructor = makeInteractiveDancer;

makeInteractiveDancer.prototype.step = function() {
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if (!this.alreadyCalled) {
    this.$node.addClass('animated tada infinite');
    this.alreadyCalled = true;
  }
  makeDancer.prototype.step.call(this);
};

makeInteractiveDancer.prototype.fall = function() {
  this.$node.css('transform', 'scale(-1)');
  this.$node.removeClass('infinite');
  this.$node.addClass('animated bounceOutDown');
  var deleteDancer = function() {
    this.$node.remove();
  };
  var boundedDeleteDancer = deleteDancer.bind(this);
  setTimeout(boundedDeleteDancer, 1000);
};