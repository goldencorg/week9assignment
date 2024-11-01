/*
Created Deck class with properties of every possible card
Contains methods that handle deck creation and shuffling
*/
class Deck {
    constructor(){
        this.deck = [];
        this.ranks = [
            'Ace',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            'Jack',
            'Queen',
            'King'
        ];
        this.suits = [
            'Hearts ♥',
            'Diamonds ♦',
            'Spades ♠',
            'Clubs ♣'
        ];
    }
    createDeck(){
        for (let i = 0; i < this.suits.length; i++){
            for (let r = 0; r < this.ranks.length; r++){
                let card = {
                    name: `${this.ranks[r]} of ${this.suits[i]}`,
                    value: r + 1
                }
                this.deck.push(card);
                console.log(card);
            }
        }
    }
    shuffleDeck(){
        for (let i = this.deck.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}
/*
Created Game class that contains properties of both players involved in the game
Contains method that runs game, comparing value of cards in each turns, then deciding who wins a point based on the conditions met
*/
class Game {
    constructor(){
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        }
    }
    playGame(){
        const deck = new Deck;
        deck.createDeck();
        deck.shuffleDeck();
        while (deck.deck.length !== 0){
            this.player1.hand.push(deck.deck.shift());
            this.player2.hand.push(deck.deck.shift());
        }
        console.log(this.player1.hand);
        console.log(this.player2.hand);
        for (let i = 0; i < this.player1.hand.length; i++){
            if (this.player1.hand[i].value > this.player2.hand[i].value){
                this.player1.score ++;
                console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 1 scores a point!
                Current score: 
                P1: ${this.player1.score} | P2: ${this.player2.score}
                `)
            } else if (this.player1.hand[i].value < this.player2.hand[i].value){
                this.player2.score ++;
                console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 2 scores a point!
                Current score: 
                P1: ${this.player1.score} | P2: ${this.player2.score}
                `)
            } else {
                console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Tie! No points awarded.
                Current score: 
                P1: ${this.player1.score} | P2: ${this.player2.score}
                `)
            }
        }
        if (this.player1.score > this.player2.score){
            console.log(`
                Player 1 wins!!!
                Final Score: 
                P1: ${this.player1.score} | P2: ${this.player2.score}
            `);
        } else if(this.player1.score < this.player2.score){
            console.log(`
                Player 2 wins!!!
                Final Score: 
                P1: ${this.player1.score} | P2: ${this.player2.score}
            `);
        } else {
            console.log(`
                Tie!
                Final Score: 
                P1: ${this.player1.score} | P2: ${this.player2.score}
            `);
        }
    }
}
/*
Game initialization
*/
const game = new Game;
game.playGame();
