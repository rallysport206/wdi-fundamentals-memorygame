/* card array */

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardId = cards[0,1,2,3];

/* checking for card matches*/
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	}else{
		console.log("Sorry, try again.");
	}
};

var flipCard = function(cardID) {
console.log ("User flipped " + cards[cardId]);
	if (cardsInPlay[0] === cardsInPlay [1]) {
			alert("You've found a match!");
		}else{
			alert("Sorry, try again.");
		}
	};

cardsInPlay.push(cards[cardId]);
flipCard(0);
flipCard(2);
checkForMatch(flipCard);
  