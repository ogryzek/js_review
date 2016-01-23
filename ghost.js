var Ghost = function(){
  var randy = Math.floor(Math.random()*4 + 1);
  switch (randy){
    case 1:
    Ghost.color = "red";
    break;

    case 2:
    Ghost.color = "pink";
    break;

    case 3:
    Ghost.color = "white";
    break;

    default:
    Ghost.color = "yellow";
  }
}

Ghost.prototype.color = function(color){
  Ghost.color = color;
}
