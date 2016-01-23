class Ball {
  constructor(ballType) {
    if (ballType !== "regular" && ballType !== "super") {
      this.ballType = "regular";
    } else {
      this.ballType = ballType;
    }
  }
}
