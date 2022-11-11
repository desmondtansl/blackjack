let deck = []; //only values of cards with suits
let deckValue = []; //deck of cards with no suits
let playerHand = []; //initial 2 cards that player gets
let dealerHand = []; //initial 2 cards that dealer gets
let dealerAce = 0; //checks for dealer's ace count
let playerAce = 0; //checks for player's ace count
let newPlayerSum = 0; //sum of all player cards
let newRound = []; //new "deck" of cards after a win condition has been fulfilled
let message = "";

const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']

const blackJack = {
  page: 'Come Play Blackjack'
};

const renderPage1 = () => {
  document.getElementsByClassName("pages")[1].style.display = 'none';
}
renderPage1();

const renderPage2 = () => {
  document.getElementsByClassName("pages")[0].style.display = 'none';
  document.getElementsByClassName("pages")[1].style.display = 'inline';
}
document.getElementById("startButton").addEventListener('click', function() {renderPage2()});

const createDeck = () => {
    deck = [];
    for (let j = 0; j < values.length; j++) {
    for (let i = 0; i < suits.length; i++) {
      let value = 0;
      if (values[j] === 'Jack' || values[j] === 'Queen' || values[j] === 'King'){
      value = 10;}
      else if (values[j] === 'Ace'){
      value = 11;}
      else {
      value = values[j]
      }
    deck.push(value + '-' + suits[i]);   
    }
  }
}
createDeck();

const playerCheckAce = () => {
  while (playerHand.indexOf('11') >= 0 && updatedPlayerSum > 21) {
    updatedPlayerSum = updatedPlayerSum - 10 
  }
  return updatedPlayerSum;
}

const dealerCheckAce = () => {
  while (dealerHand.indexOf('11') >= 0 && updatedDealerSum < 17 && updatedDealerSum < updatedPlayerSum) {
    updatedDealerSum = updatedDealerSum - 10
  }
  return updatedDealerSum;
}

const getDeckValues = () => {
  deckValue = [];
  for (let h = 0 ; h < deck.length ; h ++) {
    let tempCard = deck[h].split("-")
    let tempValue = tempCard[0]
    deckValue.push(tempValue)
  }
};
getDeckValues();

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
shuffle(deckValue);

const drawCard = (hand) => { 
  let last = deckValue.length-1
  hand.push(deckValue.splice(last, 1)[0]);
} 
drawCard(playerHand);
drawCard(dealerHand);
drawCard(playerHand);
drawCard(dealerHand);

const hit = () => {
  if (playerHand.length >= 2) {
    drawCard(playerHand);
}
let updatedPlayerSum = eval(playerHand.join('+'));
// console.log('player: ' + updatedPlayerSum)
document.getElementById("your-sum").innerText = updatedPlayerSum;
}

document.getElementById("Hit").addEventListener('click', function() {hit()})
let updatedPlayerSum = eval(playerHand.join('+'));
playerCheckAce();
let updatedDealerSum = eval(dealerHand.join('+'));
console.log('player: ' + updatedPlayerSum);
console.log('dealer: ' + updatedDealerSum);
dealerCheckAce();

const playerDraw = () => {
  updatedPlayerSum = eval(playerHand.join('+'))
  playerCheckAce();
  // console.log('player: ' + updatedPlayerSum);
  document.getElementById("your-sum").innerText = updatedPlayerSum;
  console.log('player: ' + updatedPlayerSum);
}
playerDraw();

const dealerDraw = () => {
  updatedDealerSum = eval(dealerHand.join('+'))
  dealerCheckAce();
  if (updatedPlayerSum > 21) {
    console.log("You Lose")
    message = "You Lose"
    return;
  } else {
  while (updatedDealerSum < 17 && updatedPlayerSum < 22 && updatedDealerSum <= updatedPlayerSum) {
    drawCard(dealerHand);
    updatedDealerSum = eval(dealerHand.join('+'));
    dealerCheckAce();  
    console.log('dealer sum: ' + updatedDealerSum)
    } 
  }
  document.getElementById("dealer-sum").innerText = updatedDealerSum;
  document.getElementById("results").innerText = message;
}
document.getElementById("Stand").addEventListener('click', function()
{
  if (updatedPlayerSum > 21)
  {console.log("You Lose");
  message = "You Lose"
  return}
  playerDraw();
  dealerDraw();
  winConditions();
  document.getElementById("results").innerText = message;
});

const initialWinConditions = () => {
  if (updatedPlayerSum === updatedDealerSum) {
    console.log("It's a tie!");
    message = "It's a tie!"
  } else if 
    (updatedPlayerSum === 21) {
    console.log("You win with Blackjack!!");
    message = "You win with Blackjack!!"
  } else if 
    (updatedDealerSum === 21) {
    console.log("You Lose! Dealer has Blackjack!");
    message = "You Lose! Dealer has Blackjack!"
  };
  console.log(message)
  document.getElementById("dealer-sum").innerText = updatedDealerSum;
  document.getElementById("your-sum").innerText = updatedPlayerSum;
  document.getElementById("results").innerText = message;
}
initialWinConditions();

const winConditions = () => {
  if (updatedPlayerSum === updatedDealerSum) {
    console.log("It's a tie!");
    message = "It's a tie!"
  } else if 
    (updatedPlayerSum > updatedDealerSum && updatedPlayerSum <= 21)
    {console.log("You Win");
    message = "You Win"
  } else if
    (updatedDealerSum > 21)
    {console.log("You Win");
    message = "You Win"
  } else {
    console.log("You Lose")
    message = "You Lose"
  }
  document.getElementById("dealer-sum").innerText = updatedDealerSum;
  document.getElementById("your-sum").innerText = updatedPlayerSum;
  document.getElementById("results").innerText = message;
}
winConditions();

const newGame = () => {
  createDeck();
  playerCheckAce();
  dealerCheckAce();
  getDeckValues();
  shuffle(deckValue);
  playerHand = [];
  dealerHand = [];
  const drawCard = (hand) => { 
    let last = deckValue.length-1
    hand.push(deckValue.splice(last, 1)[0]);
  } 
  drawCard(playerHand);
  drawCard(dealerHand);
  drawCard(playerHand);
  drawCard(dealerHand);
}
document.getElementById("Shuffle").addEventListener('click', function() 
{ newGame();
  playerDraw();
  updatedDealerSum = eval(dealerHand.join('+'));
  updatedPlayerSum = eval(playerHand.join('+'));
  initialWinConditions();
  console.log(deckValue);
  console.log('dealer: ' + updatedDealerSum);
  console.log('player: ' + updatedPlayerSum);
  document.getElementById("dealer-sum").innerText = updatedDealerSum;
  document.getElementById("your-sum").innerText = updatedPlayerSum;
});