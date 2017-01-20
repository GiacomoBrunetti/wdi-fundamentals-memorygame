console.log("JS file is connected to HTML! Woo!")


var cards= ['jack', 'jack', 'queen', 'queen', 'king', 'king'];

var cardsInPlay= [];

var gameBoard= document.getElementById('game-board');


function dataCard() {
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML ='<img src="king.png" alt="King" />';		
} else if (this.getAttribute('data-card')=== 'queen'){
        this.innerHTML ='<img src="queen.png" alt="Queen" />';
} else 
        this.innerHTML= '<img src="jack.png" alt="Jack" />';
}    

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(cardsInPlay);
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay=[];
		
}		
}

var isMatch= function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
 window.alert ("You found a match!");
} else 
window.alert ("Sorry, try again.");
} 

var createCards= function() { 
var cards=['jack', 'jack', 'queen', 'queen', 'king', 'king'];	
for ( var i = 0 ; i < cards.length ; i ++) {
    var newCard= document.createElement('div');
    newCard.className= 'card' ;
    newCard.setAttribute('data-card', cards[i]);
    gameBoard.appendChild(newCard);
    newCard.addEventListener('click', dataCard);
    newCard.addEventListener('click', isTwoCards);
   
} 
}
createCards();

var resetBoard= document.getElementsByTagName('button');
resetBoard[0].addEventListener('click', clearHTML);


function clearHTML() {
	var allCards= document.getElementsByClassName('card');
for (i =0 ; i < allCards.length ; i ++){
	allCards[i].innerHTML= "";
	
}
}





