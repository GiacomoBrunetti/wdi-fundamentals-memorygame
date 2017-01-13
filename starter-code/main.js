console.log("JS file is connected to HTML! Woo!")

var cardOne= "queen";
var cardTwo= "queen";
var cardThree= "king"; 
var cardFour= "king";

if ( ! cardTwo === cardFour ) {

	window.alert ("Sorry, try agan.");

}  else if ( cardThree === cardFour ) {

	window.alert ("You found a match!");

}  else if ( cardOne === cardTwo ) {

	window.alert ("You found a match!");

} 


var gameBoard= document.getElementById('game-board');

var createCards= function() { 


for ( var i = 1; i <= 4; i += 1){

var newCard= document.createElement('div');

newCard.className = 'card' ;

gameBoard.appendChild(newCard);
}
}
createCards();