function Ball(ballType) {
  if (ballType !== "regular" && ballType !== "super") {
    this.ballType = "regular";
  } else {
    this.ballType = ballType;
  }
}
