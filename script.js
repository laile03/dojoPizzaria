function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza; 
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"])
console.log(pizza1);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2);
var pizza3 = pizzaOven("thin crust", "marinara", "mozzarella", ["pineaaples", "jalepenos", "onions"])
console.log(pizza3);
var pizza4 = pizzaOven("deep dish", "marinara", "mozzarella", ["peperoni", "pineaaple", "onions", "sauasage"])
console.log(pizza4);


var crustType = [
    "thin crust",
    "deep dish",
    "garlic crust",
    "gluten free"
]

var sauceType = [
    "traditional",
    "red sauce",
    "white sauce",
    "hawaiin",
]

var cheeses = [
    "mozzarella",
    "ricotta",
    "fresh mozzarella",
    "gorgonzolla",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "italian sausage",
    "salame",
    "pineapple",
    "fresh basil",
    "olives",
    "spinach",
    "red peppers",
    "red onions",
    "mushrooms",
    "artichokes", 
    "bannana peppers",
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());