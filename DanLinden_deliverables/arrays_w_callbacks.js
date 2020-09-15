
// ### Section 3 Array Methods with Callbacks

// A few array methods use callbacks. For example `.map` - `.map` takes each element of an array and does something to it and returns a new arrays.

// But what should it do? Multiply everything by 5? Capitalize everything? If `.map` had a hard-coded thing it always did with an array, it wouldn't be very flexible.

// By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

// Two arrays to work with


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']



// The first question is for the numbers array. The second question is for the words array.

// You don't have to write an answer to the thought questions.

// #### Every

// 1. Determine if every number is greater than or equal to 0
console.log(nums.every(num => num >= 0)) //true
// 1. determine if every word shorter than 8 characters
console.log(panagram.every(wrd => wrd.length < 8)) //true
// #### Filter

// 1. filter the array for numbers less than 4
console.log(nums.filter(num => num < 4)) // [ 1, 2, 3, 0 ]
// 1. filter words that have an even length
console.log(panagram.filter(wrd => wrd.length % 2 === 0)) // [ 'over', 'lazy' ]
// #### Find

// 1. Find the first value divisible by 5
console.log(nums.find(num => num % 5 === 0)) //5
// 1. find the first word that is longer than 5 characters
console.log(panagram.find(wrd => wrd.length > 5)) //undefined (no such words are present in this array)
// #### Find Index
// 1. find the index of the first number that is divisible by 3
console.log(nums.findIndex(num => num % 3 === 0)) // 2
// 1. find the index of the first word that is less than 2 characters long
console.log(panagram.findIndex(wrd => wrd.length < 2)) // -1 (no such words are present in this array)
// #### For Each
// 1. console.log each value of the nums array multiplied by 3
nums.forEach((num) => {
  console.log(num*3)
})
// 1. console.log each word with an exclamation point at the end of it
panagram.forEach((wrd) => {
  console.log(`${wrd}!`)
})


// ### Section 3 Array Methods with Callbacks

// A few array methods use callbacks. For example `.map` - `.map` takes each element of an array and does something to it and returns a new arrays.

// But what should it do? Multiply everything by 5? Capitalize everything? If `.map` had a hard-coded thing it always did with an array, it wouldn't be very flexible.

// By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

// Two arrays to work with


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']



// The first question is for the numbers array. The second question is for the words array.

// You don't have to write an answer to the thought questions.

// #### Every

// 1. Determine if every number is greater than or equal to 0
console.log(nums.every(num => num >= 0)) //true
// 1. determine if every word shorter than 8 characters
console.log(panagram.every(wrd => wrd.length < 8)) //true

// #### Filter

// 1. filter the array for numbers less than 4
console.log(nums.filter(num => num < 4)) // [ 1, 2, 3, 0 ]
// 1. filter words that have an even length
console.log(panagram.filter(wrd => wrd.length % 2 === 0)) // [ 'over', 'lazy' ]
// #### Find

// 1. Find the first value divisible by 5
console.log(nums.find(num => num % 5 === 0)) //5
// 1. find the first word that is longer than 5 characters
console.log(panagram.find(wrd => wrd.length > 5)) //undefined (no such words are present in this array)
// #### Find Index
// 1. find the index of the first number that is divisible by 3
console.log(nums.findIndex(num => num % 3 === 0)) // 2
// 1. find the index of the first word that is less than 2 characters long
console.log(panagram.findIndex(wrd => wrd.length < 2)) // -1 (no such words are present in this array)
// #### For Each
// 1. console.log each value of the nums array multiplied by 3
nums.forEach((num) => {
  console.log(num*3)
})
// 1. console.log each word with an exclamation point at the end of it
panagram.forEach((wrd) => {
  console.log(`${wrd}!`)
})
// **Thought Questions**
// - What happened to the original array?
// - Can you store the values from a `forEach` method in a new array?

// #### Map
// 1.  make a new array of each number multiplied by 100
console.log(nums.map(num => num*100)) 
// 1. make a new array of all the words in all uppercase
console.log(panagram.map(wrd => wrd.toUpperCase(wrd)))

// **Thought Questions**
// - What happened to the original array?
// - Can you store the values from a `map` method in a new array?

// #### Some
// - Find out if some numbers are divisible by 7
console.log(nums.some(num => num % 7 === 0)) //true
// - Find out if some words have the letter `a` in them
console.log(panagram.some(wrd => wrd.includes('a'))) //true

// ### Hungry for More

// #### Reduce
// - Add all the numbers in the array together using the `reduce` method
console.log(nums.reduce((acc, num) => acc + num))
// - concatenate all the words using reduce
console.log(panagram.reduce((acc, wrd) => acc + wrd))
// **Thought Questions**
// - What happened to the original array?

// #### Sort
// - Try to sort without any arguments, do you get what you'd expect with the numbers array?
console.log(nums.sort()) // No. 10 is sorted after 1.
// - Try to sort without any arguments, do you get what you'd expect with the words array?
console.log(panagram.sort()) //capitalized word is sorted first
// - Sort the numbers in ascending order
console.log(nums.sort((a, b) => a - b)) // syntax for compare function taken from an example on the MDN sort() page
// - Sort the numbers in descending order
console.log(nums.sort((a, b) => b - a))
// - Sort the words in ascending order
console.log(panagram.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}))
// - Sort the words in descending order
console.log(panagram.sort(function (a, b) {
    return b.toLowerCase().localeCompare(a.toLowerCase());
})) // compare function from  https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-in-javascript

// ### Array Methods Challenge Problems

// #### isPanagram

// Using the following array - test whether each letter a-z (case insensitive) is used at least once


const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']  //I'm assuming there's a better way to access all the letters of the alphabet, but I couldn't figure out how to get what I wanted. Did some reading on regular expressions, but it didn't seem like that without digging into how to use them more.


const isPanagram = () => {
  let newArr = []
  let str = panagram.toString()
  for (let i=0; i<str.length; i++) {
    for (let j=0; j<letters.length; j++){
        if (str[i].includes(letters[j])) {
          newArr.push(letters[j])
      }
    }
  }
   let sortedArr = (newArr.filter((elem, index) => {
    return newArr.indexOf(elem) === index // removed duplicate characters based on code form https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
}).sort())
 if (letters.toString() === sortedArr.toString()) {
   console.log("Each letter is used")
 }
}
isPanagram()


// #### Working with data

const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ]

  // - filter for products with a price that is less than 10, using the array above:
  const deals = products.filter(prod => prod.price < 10)
  console.log(deals)
// // - sort alphabetically by product name
console.log(deals.sort((a,b) => a.name.toUpperCase.length - b.name.toUpperCase.length)) 
//can't quite figure how to get this to sort correctly. Tried accessing name in the sort method with dot notation, but didn't seem to affect anything.
