// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe('secretCode', () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"

it ('returns a string with the coded message', () => {

    expect(secretCode(secretCodeWord1)).toEqual ("L4ck4d41s1c4l")
    expect(secretCode(secretCodeWord2)).toEqual ("Gobbledygook")
    expect(secretCode(secretCodeWord3)).toEqual ("Eccentric")
})
})

// FAIL  ./code-challenges.test.js
//   secretCode
//     ✕ returns a string with the coded message (1 ms)
//   singleLetters
//     ✓ returns an array of all the words containing that specific letter (3 ms)
//   fullHouse
//     ✓ determines if the five numbers in the array are a full house and return a boolean (1 ms)

//   ● secretCode › returns a string with the coded message

//     ReferenceError: secretCode is not defined

// Expected output: "L4ck4d41s1c4l"
// Expected output: "G0bbl3dyg00k"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
//Input: string
//Output: string
//Ill create a function called secret Code that takes sting as an argument. Next i think theres a way to use the replace method here, so our function should return the string but well have to use replace method for all instances of the secret code. So replace a for 4, e for 3, i for 1, and o for 0. I made that function and it is only returning the first occurance of each letter.Lackadaisical is coming back as L4ckada1sical. I need a way to account for all occurances of each letter. 
//I used the replace all method to try and account for all occurrences of each letter. 
//I researched g, the global operator which will account for all occurrences of a letter. 
//When i run this function i keep getting error Command failed with exit code 1. I can't figure out what this means, I googled it and it seems there might be an issue with my yarn files. I think this code should work but there is just something wrong with my yarn it seems.


const secretCode = (string) => {
return string
.replace(/a/g, '4')
.replace(/A/g, '4')
.replace(/E/g, '3')
.replace(/e/g, '3')
.replace(/i/g, '1')
.replace(/I/g, '1')
.replace(/O/g, '0')
.replace(/o/g, '0')

}

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe('singleLetters', () => {

    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const letterA = "a"
    const letterE = "e"

    it('returns an array of all the words containing that specific letter', () => {
        expect(singleLetters(fruitArray, letterA)).toEqual (["Mango", "Apricot", "Peach"])
        expect(singleLetters(fruitArray, letterE)).toEqual (["Cherry", "Blueberry", "Peach"])
    })
})

// FAIL  ./code-challenges.test.js
//   singleLetters
//     ✕ returns an array of all the words containing that specific letter (1 ms)
//   fullHouse
//     ✓ determines if the five numbers in the array are a full house and return a boolean (2 ms)

//   ● singleLetters › returns an array of all the words containing that specific letter

//     ReferenceError: singleLetters is not defined

// Expected output: ["Mango", "Apricot", "Peach"]
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
//Input: array
//Output: array containing all the words containing all the words with that specific letter.
// Create a function called singleLetters that takes in the array and the letter as arguments.
// Then use filter to return a new array that contains only words with the given letter. Then we need a way to make sure the filter method ignores the casing of the letter and for that we could use tolowercase on the filtered value, and that value has to include the lower case letter. 
//Return the filtered array.
// const singleLetters = (arr, letter) => {
//     const filteredArr = arr.filter((value) => {
//         if (value.includes(letter)){
//             return value
//         } else if (value.includes(letter.toUpperCase)){
//             return value
//         } else {
//             return 
//         }
//     })
//     return filteredArr
// }

//*refactor*

const singleLetters = (arr, letter) => {
    return arr.filter((value) => 
    value.toLowerCase().includes(letter.toLowerCase())
    )}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe ('fullHouse', () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    const hand4 = [7, 2, 7, 2, 7]
    it('determines if the five numbers in the array are a full house and return a boolean', () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})
        
// FAIL  ./code-challenges.test.js
//   fullHouse
//     ✕ determines if the five numbers in the array are a full house and return a boolean (1 ms)

//   ● fullHouse › determines if the five numbers in the array are a full house and return a boolean

//     ReferenceError: fullHouse is not defined

// Expected output: true
// Expected output: false
// Expected output: false
// Expected output: true

// b) Create the function that makes the test pass.
//Input: array
//Output: true or false
// I'll create a function called full house, Then I'll create an empty object called cards to store the card counts. Then create a for loop to loop through each element in the array, and check if the card count already exists in the object, if it does then increase the card count by 1, if not, then set the card count back to 1. I want to use object.values because I want the count stored in a temporary array. Lastly I'll use includes method to check for a count of 2 and a count of 3. The appropriate boolean value should be returned.

// const fullHouse = (arr) => {
//     const cards = {}
//     for (let i=0; i<arr.length; i++){
//             cards[arr[i]] = cards[arr[i]] + 1 || 1
//         }
//     const values = Object.values(cards)

//     return values.includes(2) && Object.values(cards).includes(3)
// }
// *Refactor*
 const fullHouse = (arr) => {
        const cards = {}
        for (let i of arr){
                cards[i] = (cards[i] || 0) + 1
            }
        const values = Object.values(cards)
    
        return values.includes(2) && values.includes(3)
    }