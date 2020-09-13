## Section 1: Programming Fundamentals

1. Create a file called `programming_fundamentals.js` inside your `homework` folder for today.
2. Copy the questions that you are answering into your file (and comment it out) and write the answer below the question.

#### Common programming principles

// * **DRY**
    // Summary: Avoid writing code more than once, i.e. figure out how you can write it so that it can easily be applied to everything in your file that requires it without rewriting the code elsewhere in the file

// * **KISS**
    // Summary: Keep your code as simple as possible

// * **Avoid creating a YAGNI**
    // Summary: Avoid coding and implementing new functions unless absolutely necessary. This is surprising becuase it seems like everything we've done has been heavily dependent on multiple functions.
// * **Do the simplest thing that could possibly work**
    // Summary: Work out the most efficient means to get the result you need. Definitely struggling with this one.
// * **Don't make me think**
    // Summary: Try make your code as intuitive and readable as possible for someone who did not write the code.
// * **Write code for the maintainer**
    // Summary: Write your code so that it can be understood easily and so that it can be modified as little as possible to achieve new results with it.
// * **Single responsibility principle**
    // Summary: Define your classes and functions thoughtfully and deliberately so that they serve a single, specific purpose.
// * **Avoid premature optimization**
    // Summary: Focus on ensuring you are getting the results you want from your code before attempting to make it run more efficiently.
// * **Separation of concerns**
    //Summary: Related to the single responsibility principle. Different needs/results should be implemented in distinct modules of code


// #### Commenting Code

// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:


const f = l => { // declare a variable of 'f' as a function that takes 'l' as a parameter
  let es = 0, p = 0, c = 1, n = 0 // declare variables 'es', 'p', 'c', and 'n' and give a value to each
  while (c <= l) { // set a while loop that runs while the value of 'c' is less than or equal to the value of the parameter passed into 'f'
    n = c + p; // declare a new value for 'n' which is the sum of 'c' and 'p'
    [c, p] = [n, c] // based on f2 below, this seems to be setting 'c' to the value of 'n' and 'p' to the value of 'c', though, I am struggling to wrap my head around what that actually means.
    es += (c % 2 === 0) ? c : 0 // sets a conditional that if the value of c is even, add 'c' to 'es'. If not, add 0 to 'es'.
  }
  return es //capture the value of 'es'. This is the result of the function.
}


console.log(f(55))


// At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

```js
const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}


console.log(f2(55))

```

**Answer with comments:**

- In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a _classic_ ) - are there any other variable names or things that would make this code easier to read and understand?
// I honestly don't fully understand what this function is doing.

- If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with `f` or `f2`?
// f2, as it is more clear what values you are working with in relation to the others

- Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

// Yes, it is, though I don't fully understand why. You get an error regrarding the left-hand side argument when you remove the semi-colon.