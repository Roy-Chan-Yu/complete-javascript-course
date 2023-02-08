// Arrow function
const calcAge = birthYear => 2023 - birthYear;
console.log(calcAge(2000));

const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1992));

// Coding Challenge #1

let calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log((`Koalas win ${avgKoalas} vs ${avgDolphins})`));
    } else {
        console.log(`No one wins`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Coding Challenge 2
const calcTip = (bill) => {
    return bill >= 50 && bill <=300 ? bill * 0.15: bill * 0.2;
}

const bills = [125,555,44];
let tips = [];
let totals = [];
for (const [index, bill] of bills.entries()) {
    tips.push(calcTip(bill));
    totals.push(tips[index]+bill);
}

// totals = bills.forEach((bill, index) => bill + tips[index]);

console.log(bills, tips, totals);

// Coding Challenge 3
const mark = {
    fullName: 'Mark Miller',
    mass: '78',
    height: '1.69',
    bmi: '',
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: '92',
    height: '1.95',
    bmi: '',
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

console.log(mark.calcBMI(), john.calcBMI());

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})`);
} else {
    console.log(`john ...`);
}

// Coding Challenge 4
const testBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const testTips = [];
const testTotals = [];

for (let i = 0; i< testBills.length; i++) {
    const testTip = calcTip(testBills[i]);
    testTips.push(testTip);
    testTotals.push(testTip + testBills[i]);
}

console.log(testBill, testTips, testTotals);

calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}