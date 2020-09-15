// ### Section 2 Combining Datatypes

// 1. Create an object, called `crayonBox`, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    colors: ['forest green', 'sunshine yellow', 'ocean blue', 'non-controversial beige']
   }
   
   console.log(crayonBox.colors[3])
   
   // 1. Create an object `bottle` that has a property that is an object: `cap`. `cap` can have properties like material: 'metal' or 'plastic', color: `blue` or `white` etc. Log one of the properties of that inner object.
   const bottle = {
     cap: {
       material: 'metal',
       color: 'gold'
     }
   }
   
   console.log(bottle.cap.color)
   
   // 1. Create an array called `receipt` that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that  inner object.
   
   const receipt = [{item: 'cheese', price: 4.50}, {item: 'one banana', price: 10}, {item: 'yogurt', price: 2}]
   
   console.log(receipt[1].item)
   
   // 1. Create an array called `apartmentBuilding` that has an array as one of its elements, the inner array should be the names of the tenants.  Log one of the elements of the inner array.
   
   const apartmentBuilding = [
     'boiler room',
     ['John Doe', 'Jane Buck', 'Grover C. Hollywood'],
     'exercise equipment'
   ]
   
   console.log(apartmentBuilding[1][1])

   // ## Combine objects, arrays, and functions more than one level deep

// 1. Create a function `knit` that returns an object that has the following kinds of properties `item`: `scarf`, `size` : `6ft` etc.  Log a value of that object (hint: call the function and then call a property on the return value).
const knit = () => {
    return {
      item: 'scarf',
      size: '6ft',
      color: 'green',
      danglyBits : true
    }
  }
  
  console.log(knit().size)
  
  // 1. Create a function `crayonSelector` that returns an object that has an array (you can reuse your `crayonBox` object).  Log one of the elements of that array.
  const crayonSelector = () => {
  return crayonBox = {
      colors: ['forest green', 'sunshine yellow', 'ocean blue', 'non-controversial beige']
     }
  }
  
  console.log(crayonSelector().colors[1])
  
  // 1. Create a function `powerButton` that returns a function called `options` - `options` should console.log a simple message like `select a song`.  Call that inner function
  
  const powerButton = () => {
    return options = () => {
      console.log('select a song')
    }
  }
  
  powerButton()()

  // **Model a Vending Machine**

// - a vending machine is an object
// - it has an array of snacks (make 3 snacks)
// - snacks are objects that have a name and a price
// - a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// - Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = {
    snacks: [
    {name: 'Cookie Cat', price: 2.50}, 
    {name: 'Fried Cheezers', price: 1.25}, 
    {name: 'Just Gum', price: 0.75}
    ],
   vend: function(num) {
     return vendingMachine.snacks[num]
   }
  }
  
  vendingMachine.vend(0)

  // ## Callbacks
// 1. Make a function `add` that takes two arguments (numbers) and sums them together
const add = (x, y) => {
    return x+y
}
  // 1. Make a function `subtract` that takes two arguments (numbers) and subtracts them
const subtract = (x, y) => {
    return x-y
}
  // 1. Make a function `multiply` that takes two arguments and multiplies them
const multiply = (x, y) => {
    return x*y
}
  // 1. Make a function `divide` that takes two arguments and divides them
const divide = (x, y) => {
    return x/y
}
  // 1. Make a function `calculate` that takes three arguments. Assume the two arguments are a number  ie `num1, num2` and a function called `operates` (a callback).
  
  // 1. Make it so that when `calculate` is invoked, the callback "operates" on the numbers and returns the value.
const calculate = (num1, num2, operates) => {
    return operates(num1, num2)
}
    
  // 1. Call `calculate` 4 times, each time using one of the operation functions you wrote
calculate(12,3,add)
calculate(12,3,subtract)
calculate(12,3,multiply)
calculate(12,3,divide)
  // #### Function definition placement

// Clean up this code, so that it works and has function definitions in the correct place

const bar = () => {
    console.log('bar here');
}

const foo = () => {
    console.log('foo here');
}

bar();
foo();
// #### Error reading

// What is meant by the error(s) this produces?

foo();

const foo ()=>{
    console.log('hi');
}
// ###SyntaxError: Missing initializer in const declaration###
// There is a = missing after foo and before the () to declare foo as a function

// After fixing the SyntaxError...

// ###ReferenceError: Cannot access 'foo' before initialization###
// The foo function is being invoked before it has been defined
