// 8 Kyu - Define a Card Suit

/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades' */

function defineSuit(card) {
    if(card.includes("♣")) {
      return 'clubs';
    }else if(card.includes("♦")) {
      return 'diamonds';
    }else if(card.includes('♥')) {
      return 'hearts';
    }else {
      return 'spades';
    }
}

// 8 Kyu - Barking Mad

/* Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark. */

function Dog (breed) {
    this.breed = breed;
}
  
let snoopy = new Dog("Beagle");
  
Dog.prototype.bark = function() {
    return "Woof";
};
  
let scoobydoo = new Dog("Great Dane");
  
// 8 Kyu - Tip Calculator

/* Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...

Because you're a nice person, you always round up the tip, regardless of the service. */

function calculateTip(amount, rating) {
    let pureRating = rating.toLowerCase();
    if(pureRating === "terrible") {
      return Math.ceil(amount * 0);
    }else if(pureRating === "poor") {
      return Math.ceil(amount * 0.05);
    }else if(pureRating === 'good') {
      return Math.ceil(amount * 0.10);
    }else if(pureRating === "great") {
      return Math.ceil(amount * 0.15);
    }else if(pureRating === 'excellent') {
      return Math.ceil(amount * 0.20);
    }else {
      return "Rating not recognised";
    }
}

// 8 Kyu - Name on Billboard

/* You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter). */

function billboard(name, price = 30){
    let cost = 0;
    for(let i = 0; i < name.length; i++){
      cost += price;
    }
    return cost;
} 