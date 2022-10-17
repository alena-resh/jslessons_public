// Ternary Operator

// Complete function to describe the age, <= 12 - kid, >= 13 && age <= 17 - teenager, age >= 18 && age <= 64 - elderly

// function describeAge(age) {
//     if (age <= 12) {
//       return "You're a(n) kid";
//     } else if (age >= 13 && age <= 17) {
//       return "You're a(n) teenager";
//     } else if (age >= 18 && age <= 64) {
//       return "You're a(n) adult";
//     } else {
//       return "You're a(n) elderly";
//     }
//   }

  function describeAge(age) {
    return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
  }
  console.log(describeAge(10))


  /* Complete function saleHotdogs, function accept 1 parameters: n, n is the number of customers to buy hotdogs, 
  different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
  #
  # +---------------+-------------+
  # |  numbers n    | price       |
  # +---------------+-------------+
  # |n<5            |    100      |
  # +---------------+-------------+
  # |n>=5 and n<10  |     95      |
  # +---------------+-------------+
  # |n>=10          |     90      |
  # +---------------+-------------+
*/

  //   if (n < 5){
  //     return n * 100
  //   }
  //   else if ( n >= 5 && n< 100)
  //     {
  //       return n * 95
  //     }
  //   else{
  //   return n * 90
  //     }
  // }

  function saleHotdogs(n){
    return n<5 ? n*100 : n>=5 && n<10 ? n*95 : n*90;
    }
   console.log(saleHotdogs(10))