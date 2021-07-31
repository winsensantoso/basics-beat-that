// have a loop, to take 4 inputs
var guess1 = [];
var guess2 = [];
var DiceMode = "dice";
var ChooseMode = "choose";
var NowMode = "dice";
var player1Dice = [];
var PlayerMode = "player1";
var NowPlayer1 = "player1";
var NowPlayer2 = "player2";
var Player1WinningHistory = [];
var Player2WinningHistory = [];
var whowon = "";

var main = function (input) {
  var myOutputValue = "Initialize";

  if (NowMode == DiceMode) {
    if (PlayerMode == NowPlayer1) {
      while (guess1.length != 2) {
        guess1.push(rollDice());
      }
      NowMode = ChooseMode;
      myOutputValue =
        "Welcome Player 1 <br>" +
        " You rolled " +
        guess1[0] +
        " for dice 1 " +
        " and " +
        guess1[1] +
        " for dice 2" +
        " <br> Choose the order of the dice, <br>dice 1 first or dice 2 first";
      return myOutputValue;
    } else {
      while (guess2.length != 2) {
        guess2.push(rollDice());
      }
      NowMode = ChooseMode;
      myOutputValue =
        "Welcome Player 2 <br>" +
        " You rolled " +
        guess2[0] +
        " for dice 1 " +
        " and " +
        guess2[1] +
        " for dice 2" +
        " <br> Choose the order of the dice, <br> dice 1 first or dice 2 first";
      return myOutputValue;
    }
  }

  if (NowMode == ChooseMode) {
    if (PlayerMode == NowPlayer1) {
      player1Dice = playerpref(input, guess1);
      myOutputValue =
        "Player 1, you chose Dice " +
        input +
        " first <br>" +
        "Your number is " +
        player1Dice +
        "<br> It is now player 2's turn ";
      PlayerMode = NowPlayer2;
      NowMode = DiceMode;
    } else {
      player2Dice = playerpref(input, guess2);
      if (player2Dice > player1Dice) {
        whowon = "You won";
        Player2WinningHistory += 1;
      } else {
        whowon = "Player 1 won";
        Player1WinningHistory += 1;
      }

      myOutputValue =
        "Player 2, you chose Dice " +
        input +
        " first <br>" +
        "Your number is " +
        player2Dice +
        "<br> " +
        "as Player 1 choose " +
        player1Dice +
        " , " +
        whowon;

      //resetting the game
      PlayerMode = NowPlayer1;
      NowMode = DiceMode;
      guess1 = [];
      guess2 = [];
    }

    return myOutputValue;
  }
};

var playerpref = function (playerchoice, dice) {
  if (playerchoice == 1) {
    return String(dice[0]) + String(dice[1]);
  } else {
    return String(dice[1]) + String(dice[0]);
  }
};

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
