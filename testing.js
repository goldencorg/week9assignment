/*
Imported expect functions from chai library
Described the subject of the test and what the test will check
Created new deck and checked its length
*/
let expect = chai.expect;
describe('Deck of Cards Length', () => {
    it ('should see if the length of the deck is equal to 52.', function(done){
        let testDeck = new Deck();
        testDeck.createDeck();
        let cards = testDeck.deck;
        let numberOfCards = cards.length;
        console.log('Here are my cards: ', cards);
        console.log('How many cards do I have: ', numberOfCards);
        expect(numberOfCards).to.equal(52);
        done()
    })
})