var Ghost = function(){
  var randy = Math.floor(Math.random()*4 + 1);
  console.log (randy);
  switch (randy){
    case 1:
    this.color = "red";
    break;

    case 2:
    this.color = "pink";
    break;

    case 3:
    this.color = "white";
    break;

    default:
    this.color = "yellow";
  }
}
