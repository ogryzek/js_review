var Ghost = function(color){
  switch (color) {
    case "red":
      this.color = "red";
      break;
    case "pink":
      this.color = "pink";
      break;
    case "orange":
      this.color = "orange";
      break;
    case "yellow":
      this.color = "yellow";
      break;
    case undefined:
      this.color = "red";
      break;
    default:
      this.color = "red";
  }
  Ghost.prototype.color = function (color) {
    this.color = color;
  };
}

// var ghost1 = new Ghost();
// console.log(ghost1.color);
// var ghost2 = new Ghost("yellow");
// console.log(ghost2.color);
