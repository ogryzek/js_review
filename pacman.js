function Pacman() {
  this.livesLeft = 2;
  this.points = 0;
  this.powerTimeLeft = 0;
}

Pacman.prototype = {
  eat: function(food) {
    if (food instanceof Ball) {
      this.eatBall(food);
    } else if (food instanceof Ghost) {
      this.eatGhost(food);
    } else {
      console.log("Food error");
    }
  },

  eatGhost: function(ghost) {
    // console.log("Encountered ghost"); // test message
    return (this.powerTimeLeft > 0) ? this.points += 1000 : this.die();
  },

  eatBall: function(ball) {
    this.powerTimeLeft -= 1;
    if (ball.type === "super") {
      // console.log("Encountered super ball"); // test message
      this.powerTimeLeft = 10;
    } else {
      // console.log("Encountered regular ball"); // test message
      this.points += 1;
    }
  },

  die: function() {
    this.livesLeft -= 1;
    if (this.livesLeft < 0) {
      this.gameOver();
    }
  },

  gameOver: function() {
    console.log("Game over!");
  }
};
