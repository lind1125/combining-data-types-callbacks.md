
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
