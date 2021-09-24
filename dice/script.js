const roll = (dice) => {
  let id = "#" + dice;
  console.log(id);
  let diceFace = document.querySelector(id);
  let rolled = Math.floor(Math.random() * 6 + 1);
  diceFace.className = dice + "-" + String(rolled);
  return rolled;
};

const play = () => {
  let bet = Number(document.querySelector("#bet").value);
  let moneyPot = Number(document.querySelector("#money-pot").innerHTML);
  let userBet = document.querySelector("#guess").value;
  let dice1Roll = roll("dice1");
  let dice2Roll = roll("dice2");

  let total = dice1Roll + dice2Roll;

  if (bet > moneyPot) {
    alert("Slow your horses high-roller - you don't got that cash!");
  } else {
    let winnings;
    if (total === 7 && userBet === "same") {
      winnings = bet * 4;
      document.querySelector("#result").textContent =
        "You win! That's a winning of " + String(winnings) + "!";
      moneyPot += winnings;
    } else if (total < 7 && userBet === "less") {
      winnings = bet * 2;
      document.querySelector("#result").textContent =
        "You win! That's a winning of " + String(winnings) + "!";
      moneyPot += winnings;
    } else if (total > 7 && userBet === "more") {
      winnings = bet * 2;
      document.querySelector("#result").textContent =
        "You win! That's a winning of " + String(winnings) + "!";
      moneyPot += winnings;
    } else {
      moneyPot -= bet;
      document.querySelector("#result").textContent =
        "Thanks for the money loser. That's " + String(bet) + " for me!";
    }
    document.querySelector("#money-pot").textContent = String(moneyPot);
  }
};
