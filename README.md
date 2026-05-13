# Blackjack Card Game 

** Live Demo:** [blackjack-cardsgame.netlify.app](https://blackjack-cardsgame.netlify.app)

This is a simple and fun Blackjack (21) card game built using plain HTML, CSS, and JavaScript. In this game, the player tries to get their total card sum as close to 21 as possible without going over it.

## Detail About The Game 
What makes this project special is how it handles the real rules of the game using code:
* **Smart Ace Logic:** In Blackjack, an Ace card can be counted as 11 or 1. My code checks the total sum and automatically changes the Ace from 11 to 1 if the score goes over 21, saving the player from losing immediately.
* **Auto-Hiding Buttons:** The game knows when you win or lose. When the game is over, the "New Card" button automatically hides itself so the player cannot click it by mistake.
* **Real-time Updates:** As soon as you draw a new card, the screen instantly updates your card list, your total sum, and the game message.

## Things I Practiced in JavaScript 
I built this project to practice and make my basic JavaScript concepts very strong. In this project, I used:
* **Arrays:** To store the player's cards together.
* **Loops:** To read the array and show all the cards on the screen.
* **If-Else Conditions:** To check if the player won, lost, or can still play.
* **Math Functions:** Used `Math.random()` to draw random cards from the deck.

## How to Play 
1. Visit the [Live Demo](https://blackjack-cardsgame.netlify.app) or clone this repository.
2. Click the **Start Game** button to get your first two cards.
3. Read your total sum. Your target is to reach 21.
4. If your sum is less than 21, click **New Card** to draw another card.
5. If you hit exactly 21, you win! 🎉
6. If your total goes over 21, you lose the game.
