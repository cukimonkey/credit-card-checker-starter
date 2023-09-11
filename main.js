// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:



const validateCred = (array) => {
    const digitsCopy = array.slice();
    digitsCopy.reverse();

    // Initialize a variable to keep track of the sum
  let sum = 0;

  for (let i = 0; i < digitsCopy.length; i++) {
    let currentDigit = digitsCopy[i];

    // Double every second digit (starting from the right)
    if (i % 2 === 1) {
        currentDigit *= 2;
      
     // If doubling results in a number greater than 9, subtract 9
      if (currentDigit > 9) {
        currentDigit -= 9;
      }
    }
    // Add the current digit to the sum
    sum += currentDigit;
}
// If the sum is divisible by 10, the card number is valid
return sum % 10 === 0;
}



console.log(validateCred(valid1));


//console.log(validateCred(invalid2));

//Find invalid cards

const findInvalidCards = (batchArray) => {

    let invalidCards = [];
    for ( let i = 0; i < batchArray.length; i++){
      
      if (!validateCred(batchArray[i])){
        invalidCards.push(batchArray[i])
        
      }
    }
    //console.log(invalidCards);
    return invalidCards;
    }
    
    //findInvalidCards(batch);
    
    const idInvalidCardCompanies = (invalidCardsArray) => {
    let companies = [];
    let noDuplicate = [];
    let finalList = [];
      for (let i = 0; i < invalidCardsArray.length; i++) {
        
        companies.push(invalidCardsArray[i][0]);
      }
    console.log(companies)
    //Remove duplicates
        for (let j = 0; j < companies.length; j++) {
          if (noDuplicate.indexOf(companies[j]) === -1) {
            noDuplicate.push(companies[j]);
          }
        }
      console.log(noDuplicate)
    
    //Create final list with Bank names
     for (let e = 0; e < noDuplicate.length; e++ ){
      switch (noDuplicate[e]) {
          case 3:
            finalList.push("Amex (American Express)");
            break;
    
          case 4:
            finalList.push("Visa");
            break;
    
          case 5:
            finalList.push("Mastercard");
            break;
    
          case 6:
            finalList.push("Discover");
            break;
    
          default:
            companies.push("Company not found");
            break;
        }
     }
     console.log(finalList)
    }
    

    