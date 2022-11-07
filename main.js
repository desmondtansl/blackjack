const blackJack = {
  page: 'Come Play Blackjack',
}

let deck = []; //only values of cards with suits
let deckValue = []; //deck of cards with no suits
let playerHand = []; //initial 2 cards that player gets
let dealerHand = []; //initial 2 cards that dealer gets
// let dealerAce = 0;
let playerAce = 0;
// let canHit = true;
let newPlayerSum = 0; //sum of all player cards

const createDeck = () => {
  const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
  const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
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

for (let h = 0 ; h < deck.length ; h ++) {
  let tempCard = deck[h].split("-")
  let tempValue = tempCard[0]
  deckValue.push(tempValue)
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
shuffle(deckValue)

const drawCard = (hand) => { 
  let last = deckValue.length-1
  hand.push(deckValue.splice(last, 1)[0]);
} 
// for the initial hand
drawCard(playerHand);
drawCard(dealerHand);
drawCard(playerHand);
drawCard(dealerHand);

const hit = () => {
  if (playerHand.length >= 2) {
    drawCard(playerHand);
}
console.log(deckValue)
console.log('player: ' + playerHand)
}
document.getElementById("Hit").addEventListener('click', function() {hit()})
// console.log(deckValue)
console.log('player: ' + playerHand)
console.log('dealer: ' + dealerHand)

let updatedPlayerSum = eval(playerHand.join('+')); 
let updatedDealerSum = eval(dealerHand.join('+'));
console.log(updatedPlayerSum);
console.log(updatedDealerSum);

const winConditions = () => {
  if (updatedPlayerSum === updatedDealerSum) {
    console.log("It's a tie! Both of you have Blackjack!");
  } else if 
    (updatedPlayerSum === 21) {
    console.log("Blackjack!!");
  } else if 
    (updatedDealerSum === 21) {
    console.log("You Lose! Dealer has Blackjack!");
  } else if 
    (updatedPlayerSum > updatedDealerSum) {
    console.log("You Win");
  } else if
    (updatedPlayerSum < updatedDealerSum)
    {console.log("You Lose");}
};
winConditions();















// console.log('player: ' + updatedPlayerSum)
// console.log('dealer: ' + updatedPlayerSum)

// const sum = [playerHand].reduce((total, a) => total + a, 0);
// let updatedPlayerSum = eval(playerHand.join('+')); 
// console.log(typeof updatedPlayerSum)
// console.log(typeof playerHand)
// let updatedDealerSum = eval(dealerHand.join('+'));
// console.log('player: ' + updatedPlayerSum);
// console.log('dealer: ' + updatedDealerSum);

// const ace = () => {
//   if (playerHand > 21 && playerAce > 0) {
//     playerHand -= 10;
//     playerAce -= 1;
//   }
// }
// ace();