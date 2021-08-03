/*
grab some HTML elements
*/ 
const output        = document.getElementById("output");




/*
PART 1a
DEFINE A Card OBJECT
*/

function playCard(face, value, suit){

    this.face = face;
    this.value = value;
    this.suit = suit;

}

playCard.prototype.describeSelf = function(){
    let returnString = `<p>${this.face} of ${this.suit}. Value: ${this.value}`;
    return returnString;     
}


/*
PART 1b
INSTANTIATE A Card OBJECT and 
display the value returned by the describeSelf() function
*/

const card01 = new playCard("King", 10, "Heart" );
output.innerHTML = card01.describeSelf();



/*
PART 2a
DEFINE A Deck OBJECT
*/
class Deck{
    constructor(){
        
        //build a deck of Card objects
        //prepare arrays for all the aspects of a Card
        this.faces   = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];        
        this.values  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];        
        this.suits   = ["Spade","Club","Heart","Diamond"];  
        
        //prepare an array to store the Cards in
        this.cards = [];

        //use nested 'for' loops
        //build the Deck of Cards
        //one iteration for each suit
        //one iteration for each face/value pair
        //each time, instantiate a new Card
        //add new cards to the using Array.push()
        //eg:    this.cards.push( newCardObject );

        let i = this.suits;
        let j = this.faces + this.values;
        for(i = 0; i<4; i++){
            for(j =0; j<13; j++){
                let newCard =  `${this.suits[i]} of ${this.faces[j]}. Value: ${this.values[j]}`;
                this.cards.push(newCard);
            }
        }
    
        
    }
}


/*
DEFINE Deck OBJECT FUNCTIONS
no changes need to be made here
*/
Deck.prototype.dealCard = function(){
 
    //remove and return the first item in array
    //and shift the index of remaining items 
    const card = this.cards.shift();
    //if we have run out of cards...
    if(card === undefined){
        return 'No more cards';
    }else{
        //return the next card in the array
        return card;
    }         
}
Deck.prototype.shuffle = function(){
 
    let j, x, i;
    //loop through the entire array
    for (i = this.cards.length - 1; i > 0; i--) {
        //randomly select a card
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        //resort cards
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
    //return the randomly sorted array
    return this.cards;       
}
Deck.prototype.describeSelf = function(){
    let description = "";
    description += `This deck of cards has ${this.cards.length} card(s) in it`;
    //return the above statement 'description'
    return description;
}


/*
PART 2b
INVOKE AND DISPLAY Deck OBJECT FUNCTIONS
*/

//invoke and display the Deck function describeSelf() here...

//rendomize the cards in the deck using shuffle()

//take the next card from the deck using dealCard()

//invoke and display the Deck function describeSelf() AGAIN here...

//take the next card from the deck using dealCard()

//invoke and display the Deck function describeSelf() AGAIN here...
const myDeck = new Deck();
output.innerHTML += "<h2>INVOKE AND DISPLAY Deck OBJECT FUNCTIONS</h2>";
output.innerHTML += `<p>${myDeck.describeSelf()}</p>`;
myDeck.shuffle();
output.innerHTML += `<p>You got a ${myDeck.dealCard()}</p>`;
output.innerHTML += `<p>${myDeck.describeSelf()}</p>`;
output.innerHTML += `<p>You got a ${myDeck.dealCard()}</p>`;
output.innerHTML += `<p>${myDeck.describeSelf()}</p>`;


/*
PART 3a
DEFINE A Player OBJECT
*/


class Player{
    constructor(name){
        this.nm = name;
        this.cards = [];
    }

addCardToHand(card){
    this.cards.push(card);
}
describeSelf(){

    let string = `Player's name : ${this.nm}<br>`;
    string += `<ol>`;
    this.cards.forEach(function(card){
      string += `<li>${card}</li>`;  
    });
    string += `</ol>`;
    return string;

}
}


/*
PART 3b
Instantiate Two Player OBJECTs
and deal five cards to each

display to the browser the contents 
of each player's hand
*/
const myTable = new Player();
output.innerHTML += "<h2>Part-3 DEFINE A Player OBJECT </h2>";
const name01 = new Player("joe");
const name02 = new Player("jade");
const myTbl = new Deck();
myTbl.shuffle();


name01.addCardToHand(myTbl.dealCard());
name01.addCardToHand(myTbl.dealCard());
name01.addCardToHand(myTbl.dealCard());
name01.addCardToHand(myTbl.dealCard());
name01.addCardToHand(myTbl.dealCard());
output.innerHTML +=  name01.describeSelf();

name02.addCardToHand(myTbl.dealCard());
name02.addCardToHand(myTbl.dealCard());
name02.addCardToHand(myTbl.dealCard());
name02.addCardToHand(myTbl.dealCard());
name02.addCardToHand(myTbl.dealCard());
output.innerHTML +=  name02.describeSelf();

