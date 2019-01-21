console.log("Up and running");
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped" + " " + cardsInPlay);

var cardTwo = cards[1]; /*reset this back to [2] per instructions*/
cardsInPlay.push(cardTwo);
console.log("User flipped" + " " + cardsInPlay);

var cardThree = cards[2]; 
cardsInPlay.push(cardThree);
console.log("User flipped" + " " + cardsInPlay);



var cardFour = cards[3]; 
cardsInPlay.push(cardFour);
console.log("User flipped" + " " + cardsInPlay);


if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[3]){
		alert("You found a match");

	} else {
		alert("Sorry, try again");
	}

}
