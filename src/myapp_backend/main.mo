actor {
  private stable var targetNumber : Int = Random.randRange(1, 100);

  public query func getNumberRange() : async (Int, Int) {
    return (1, 100);
  }

  public func guessNumber(guess: Int) : async Text {
    if (guess == targetNumber) {
      let response = "Congratulations! You guessed the right number!";
      // Reset game
      targetNumber := Random.randRange(1, 100);
      return response;
    } else if (guess < targetNumber) {
      return "Your guess is too low. Try again!";
    } else {
      return "Your guess is too high. Try again!";
    }
  }
}
