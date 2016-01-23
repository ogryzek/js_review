var Ghost = function() {};

Ghost.prototype.coloring = function() {
  var colors = ["red", "blue", "yellow"];
  var color = colors[Math.floor(Math.random()*colors.length)];
  this.color = color;
};
