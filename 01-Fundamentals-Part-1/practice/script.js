const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

/////////////////////////////////////
// Coding Challenge #1

const massMark = 58;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);


// Strings and Template Literals
let firstName = 'Jonas';
let job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ' , a ' + job + ' !';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${job} !`;
console.log(jonasNew);

console.log(`String
multiple
line`);
console.log('String with \n\
multiple');

// Coding Challenge #2
if (markHigherBMI) {
    console.log(`Mark's BMI(${BMIMark}) is higher than John's (${BMIJohn})`);
}
else {
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's (${BMIMark})`);
}

// Type Conversion and Coercion
let  = '1' + 1;
n = n -1;
console.log(n);

/// type coercion
console.log('subtract = ', '10'-'4'-'3'+2+'5');
console.log('add = ', '10'+'4'+'3'-2 +'5');

// Truthy and Falsy
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(''));


// Coding Challenge #3
// 1
let scoreDolphins = [96, 108, 89];
let scoreKoalas = [88, 91, 110];

let avgScoreDolphins = (scoreDolphins.reduce((a,b) => a + b, 0) / scoreDolphins.length) || 0;
let avgScoreKoalas = (scoreKoalas.reduce((a, b) => a + b, 0) / scoreKoalas.length) || 0

// 2
if (avgScoreDolphins > avgScoreKoalas) {
  console.log('Dolphins win the trophy');
} else if (avgScoreKoalas > avgScoreKoalas) {
  console.log('Koalas win the trophy ');
} else if (avgScoreKoalas === avgScoreKoalas) {
  console.log('Draw the trophy!');
}

// Bonus 3

scoreDolphins = [97,112,80];
scoreKoalas = [109,95,50];

avgScoreDolphins = (scoreDolphins.reduce((a,b) => a+b, 0) / scoreDolphins.length) || 0;
avgScoreKoalas = (scoreKoalas.reduce((a,b) => a+b, 0) / scoreKoalas.length) || 0;

if (avgScoreDolphins > avgScoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins win`);
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
    console.log(`Koalas win`);
} else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100 && avgScoreKoalas >= 100) {
    console.log(`Both win the trophy!`);
} else {
    console.log(`Draw the trophy`);
}

// Coding Challenge #4
let bill = 275;
let tips = (bill >= 50 || bill <=300)? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tips}, and the total value ${bill + tips}`);