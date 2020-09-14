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