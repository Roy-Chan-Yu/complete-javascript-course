// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Coding Challenge #1

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let messages = "";
  for (let i = 0; i < arr.length; i++) {
    const inDays = i + 1;
    messages += `...${arr[i]}C in ${inDays} days`;
  }
  console.log(`${messages}`);
};

console.log(printForecast(data1));
console.log(printForecast(data2));
