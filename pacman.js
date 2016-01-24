var Pacman = function () {
  this.extraLives = 2;
  this.points = 0;
  this.superTime = 0;
};

Pacman.prototype = {

  eat: function(ball_or_ghost) {
    if (ball_or_ghost instanceof Ghost) {
      return this.eatGhost(ball_or_ghost);
    }
    else {
      return this.eatBall(ball_or_ghost);
    }
  },
  eatBall: function(ball) {
      this.superTime -= 1;
       if (ball.ballType == "regular") {
        return this.points += 1000;
       } else {
         this.superTime = 10;
       }
     },
  eatGhost: function(ghost) {
       if (this.superTime > 0 ) {
         return points += 2500000;
       } else {
         return this.die();
       }
     },
  die: function() {
       --this.extraLives;
       if (this.extraLives < 0 ) {
         return this.gameOver();
       }
     },
  gameOver: function() {
       return console.log("GAME OVER!!! YOU GOT " + this.points + " POINTS!");
     }
};
