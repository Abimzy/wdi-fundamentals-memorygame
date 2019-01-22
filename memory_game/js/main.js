//console.log("Up and running");

var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var userScore = 0;
var resetBoard = function() {
	document.getElementById("game-board2").textContent = null;
	cardsInPlay = [];
	createBoard();
}
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("data-id", i);
		cardElement.setAttribute("src", "images/back.png");
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board2").appendChild(cardElement);
	}
}
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match");	
userScore++;
		document.getElementById("score").textContent = userScore;
	} else {
		console.log("Sorry, try again");
	}
	resetBoard();
};
var flipCard = function(cardId){
	var cardId = this.getAttribute("data-id");
cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
this.setAttribute("src", cards[cardId].cardImage);

if (cardsInPlay.length === 2) {
	checkForMatch();
 }
};
document.getElementById("reset").addEventListener("click", function() {
	var reset = confirm("Reset your game?");
	if (reset) {
		window.location.reload();
	}
})
createBoard();

