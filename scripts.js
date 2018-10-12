// CHICKEN MONKEY

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
  // Divide the current number by 2, and check if the remainder is 0
  if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
      console.log("ChickenMonkey")
  } else if (currentNumber % 5 === 0) {
      console.log("Chicken")
  } else if (currentNumber % 7 === 0) {
      console.log("Monkey")
  } else {
    console.log(currentNumber)
  }
} 



// TAKE A NUMBER

// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.