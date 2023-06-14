class Card {
    constructor(suit, rank, score) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = []
        this.createDeck()
    }
    createDeck() {
        let suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
        let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

        for (let i =0; i < suits.length; i++){
            for (let j=0; i < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], j+1)

            }
        }   
        this.shuffle()
    }
    shuffle() {
        this.cards = this.cards.sort(a, b) => 0.5 - Math.random()) //C.v Fisher–Yates 
    }
}

const deck = new Deck()
console.log(deck) 


/* NOTES & ERRATA

const suits = ['♠', '♥', '♦', '♣'] 
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const scores = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10, 
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}

class Card {
    constructor(suit, rank, score){
        this.suit = suit;
        this.rank = rank;
        this.score = score;
    }
}

class Deck {
    constructor(cards = freshDeck()){
        this.cards = cards;
    }
    get numberOfCards() {
        return this.cards.length
    }
    shuffle() {
        for (let i = this.numberOfCards -1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i +1))
            const oldRank = this.cards [newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldRank
        }
    }
}

function freshDeck(){
    return SUITS.flatMap(suit => {
        return RANKS.map(rank => {
            return new Card(suit, rank)
        })
    })
}

let playerDeck
let computerDeck

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

    cleanBeforeRound()
}

function cleanBeforeRound() {

}

/*
 * Define a Card class with the following properties:
 *
 *   - suit (hearts, spades, clubs, diamonds)
 *   - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
 *   - score (1, 2, 3, 4, ... 11, 12, 13)
 */

/*
 * Define a Deck class with the following properties and methods:
 *
 *   - length (the number of cards - should start at 52)
 *   - cards (an array of cards in the deck)
 *   - draw: return a random card from the cards array
 */

/* When you create an instance of your Deck class (i.e. in your constructor),
 * fill in the cards array with 52 instances of your Card class. You can do
 * this with a nested for loop - first loop through an array of all possible
 * suits, then loop through an array of all possible ranks. Inside your inner
 * loop, create an instance of your Card class and push it into the Deck's cards
 * array.
 *
 * Instantiate an instance of your Deck and start drawing random cards!
 */

/*
class Card {
     constructor(suit,rank, score){
         this.suit = suit
         this.rank = rank
         this.score = score
     }

 }

 class Deck {
     constructor() {
         this.length = 52
         this.cards = []
         let suit = ['hearts', 'spades', 'diamonds', 'clubs']
         let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
         let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

 // irrating through the suit through a for loop//
 // irrating through the rank for loop//
 //  Created a new let variable called cards and we irriated through each suit rank and score (which make up a card)
 // we then push the card into this.card(into the deck class which was equal to an array.) This array will show the irriated suits rank and score)


         for(let i = 0; i < suit.length; i++){
             for(let j =0; j < rank.length; j++){
                 let card = new Card(suit[i], rank[j], score[j])
                 this.cards.push(card)
             }


         }
     }

     drawRandomCard() {
         let i = Math.floor(Math.random() * this.length)
         this.length = this.length - 1
         if (this.length == 0){
             throw new Error('Deck is empty!');
         }
         let result = this.cards.splice(i, 1)
         return result

     }   
 }

 deck = new Deck()
 for(let i=0; i<54; i++){
     console.log(deck.drawRandomCard())
     console.log(deck.length)
 }
*/