'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdaysLiteral = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHoursLiteral = {
  [weekdaysLiteral[3]]: {
    open: 12,
    close: 22,
  },
  [weekdaysLiteral[4]]: {
    open: 11,
    close: 23,
  },
  [weekdaysLiteral[5]]: {
    open: 0,
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  named: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} 
     and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// for-of loop
const menuLoop = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menuLoop) {
  console.log(item);
}

for (const item of menuLoop.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menuLoop.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Optional Chaining

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day},we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'Hloo@jonas.io' }];

console.log(users[1]?.name ?? 'User array empty');

// Looping Objects: Object Keys, Values, and Entries
const properties = Object.keys(openingHoursLiteral);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHoursLiteral)) {
  console.log(day);
  openStr += `${day}, `;
}

console.log(openStr);

// Property Values
const values = Object.values(openingHoursLiteral);
console.log(values);

// Entire object
const entries = Object.entries(openingHoursLiteral);
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

for (const x of entries) {
  console.log(x);
}

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// (1) Destructor

// Spread, because on RIGHT side of =
const arrSpread = [1, 2, ...[3, 4]];
const [first, second, ...others] = [1, 2, 3, 4, 5];
console.log(first, second, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// (2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 7, 6, 5, 4, 1);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'tomatoes');

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Use Any data type return any data type

// 1) || Return the first true value
console.log(0 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(null || 0);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests2 = restaurant.numGuests || 10;

console.log(guests1);
console.log(guests2);

// 2) && Return the first false value
console.log('--- AND ---');
console.log(0 && 'Jasons');
console.log(7 && 'Jasons');

console.log('Hello' && 23 && null && 'jonas');

// Practical Example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Logical Assignment Operators
const rest1 = {
  name: 'Cap',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piaz',
  owner: 'Giovanni Rossi',
};

// OR assignment operators
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1.numGuests);
console.log(rest2.numGuests);

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// Coding Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = (...players) => {
  console.log(`${players.length} goals were scored`);
};

// 6.
printGoals(...game.scored);

// 7.
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);

// Coding Challenge #2

// 1. Loop over array
for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i}: ${el}`);
}

// 2. loop to calculate average
let average = 0;
const adds = Object.values(game.odds);
for (const add of adds) {
  average += add;
}

average /= adds.length;
console.log(average);

// 3. Print the 3 odds to the console
for (const [team, value] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`${team} of ${value}`);
  console.log(`Odd of ${teamStr}: ${value}`);
}

// 4.
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menuJoin = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuJoin);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3'),
// ];

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// console.log(ingredients);

// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.named = 'Ristorante Rom';
console.log(restaurantCopy.named);
console.log(restaurant.named);

const { named, openingHours, categories } = restaurant;

console.log(named, openingHours, categories);

const {
  named: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open, close },
} = openingHours;

console.log(open, close);

const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);

// Coding Challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log(gameEvents);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(`An event happened, on 
average ${90 / gameEvents.size} minutes`);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`${half} Half ${min}: ${event}`);
}

// Coding Challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
