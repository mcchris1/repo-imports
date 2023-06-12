[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

### Javascript Calculator

Build a calculator! 

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Fulfill the listed requirements.

Starter code is available in [`calculator.js`](calculator.js). You are required to turn in your submission by making a pull request on the original repository.

Unless otherwise specified on the calendar or by an instructor, homework is due the next morning by 9:00am.

## Requirements

Your task is to create a JavaScript object that represents a calculator. It should have methods that provide the following functionality...

- Addition
- Subtraction
- Multiplication
- Division
- Exponents 
- An operation of your choice! (Hint: Look up JavaScript's `Math` object on MDN!)


## Calculator Usage
In order to "test" your calculator, you will load the file into the Node REPL.
- Start the Node REPL with the `node` command
- Import the file into the REPL with its special `.load path/to/file.js` command
- Call the methods from within the REPL, e.g. `calculator.add(2, 2)`


## Bonus 1
Give your calculator memory and allow it to persist the result of multiple operations.
* Store this result in a `value` property.
* Give your calculator a `clear` method that resets `value`.

For example:

```js
calculator.add(1)
// value is 1
calculator.add(2)
// value is 3
calculator.add(2)
// value is 5
calculator.multiply(2)
// value is 10
```
## Bonus 2

Give your calculator a "master" method that can parse through a string of operations (e.g., `(2 - 1) * (5 ^ 2)`)
* Your calculator should still have memory.


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
