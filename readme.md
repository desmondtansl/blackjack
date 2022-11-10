Blackjack

Written in pure JS with no Jquery used.

Game Description:

This is a remake of the classic Blackjack game played in casinos worldwide in Javascript! Players play against a Dealer and the goal of the game is to get 21 points, or as close to 21 points as possible, without crossing 21 points. 

The digit cards in the deck are valued according to their face value (e.g. 2 of Hearts has a value of 2 points, 5 of Clubs is valued at 5 points). The suits has no bearing on the outcome of the game. Aces and picture cards (Jack, Queen, King) take on different values in Blackjack. Aces are valued at either 1 or 11 points, and the 3 picture cards are valued at 10 points. For example, a hand of King and 2 would give 12 points, and a hand of Ace and 5 would give either 6 points or 16 points.

Every player is dealt 2 cards at the beginning of each round and is allowed to draw as many cards they desire as long as their total sum stays below 21. In our game, our dealer is required to have a minimum of 17 points unless the player has went over 21 points. A player instantly wins the game if their initial 2 cards consists of an Ace and a picture card which gives them "Blackjack" (21). The only other possible outcome of this is a tie if the dealer happens to have the same hand as well.


How to Play:

Upon pressing "Start" on the main page, the initial hand is immediately dealt to the player and dealer. The player has the option to "Hit" which draws a card, or "Stand" which tells the computer the player would like to end his turn. Depending on the player's points, the dealer may or may not draw.

The shuffle button resets the game with a "new" deck of cards but this is only visible in the console tab of the browser.


Coding the Logic Behind Blackjack:

1) Create a deck of cards using arrays

2) Separate the number value of cards from its suit to be able to sum it in JS using the split function

3) Shuffle the deck of cards using loops

4) Deal initial set of cards to player and dealer

5) Remove the initial set of cards using the splice function from the deck to make it realistic (i.e. 52 cards minus 4 would be 48)

6) Allow the player to draw as many cards as desired with the "Hit" button. Also introduced logic to add the sum of cards in the player's hand which in turn allows us to show the sum on the game screen

7) After the player's turn, the dealer draws cards to be able to beat the player's points total. 
The dealer only draws if:

- player has not crossed 21 points
- dealer has below 17 points
- dealer has same number of points as the player

Also introduced a win condition here where the dealer does not draw if the player has crossed 21 points and the dealer wins. The dealer draw card logic is triggered upon the player hitting the "Stand" button which mirrors a realistic game of Blackjack in the casino as the dealer draws last after every player has taken their cards.

8) Introduced 2 different sets of win conditions: initial and normal win conditions. The initial conditions are triggered only on the initial set of 2 cards to the player and dealer. This allows the game to check for a Blackjack before moving on. If there are no Blackjack hands, then the game proceeds as normal.

9) At the end of a round, the "Shuffle" button is programmed to allow the player to shuffle the deck and re-deal a fresh hand to both the player and dealer. 


Possible Future Updates

Some features which would make the game better would be:

- photo images of actual cards
- ability to bet virtual money
- sound effects
- more players 
- more decks of cards to mimic a casino (casinos usually use ~8 decks for Blackjack)

