# JavaScript Errors and Debugging

Each code snippet below throws an error. Your task is to determine (a) what is
the error message, (b) what is causing the error message and (c) how to resolve or fix the error?

## Errors

### Prompt #1

We want an alert to appear in the browser that says "Hello World". But for some
reason, it's not working ...

```js
alert(greeting);
```

A. What is the error message?
greeting is not defined
B. What is causing the error?
greeting is not defined
C. How can you resolve/fix the error?

```js
let greeting = 'Hello World';
alert(greeting);
```

### Prompt #2

We're trying to log the birds with names that are more than 4 characters long.
But for some reason, it's not working ...

```js
let birds = ['Eagle', 'Falcon', 'Duck', 'Turkey']

birds.forEach(function(bird) {
  if (bird.length > 4) {
    console.log(bird)
}
```

A. What is the error message?
SyntaxError: Unexpected end of input
B. What is causing the error?
Missing close brace, missing close parenthesis
C. How can you resolve/fix the error?

```js
let birds = ['Eagle', 'Falcon', 'Duck', 'Turkey']

birds.forEach(function(bird) {
  if (bird.length > 4) {
    console.log(bird)
}})
```

### Prompt #3

We're trying to concatenate these two strings together. But for some reasons,
it's not working ...

```js
let greeting = "hello";
greeting.push(" world");
console.log(greeting);
```

A. What is the error message?
TypeError: greeting.push is not a function
B. What is causing the error?
.push method imcompatible with strings, is not concatenation 
C. How can you resolve/fix the error?

```js
let verb = "hello";
let directObject = " world";
let greeting = verb.concat(directObject);
console.log(greeting);
```

### Prompt #4

We're trying to call the `greet` function. But for some reason, it's not working
...

```js
this.greet();
```

**Hint:** What is `this` in the global scope in our browser?

A. What is the error message?
TypeError: this.greet is not a function
B. What is causing the error?
`this` should refer to an object; alone, as such, without some kind of visible JS antecendent, it refers to the global object and that's messed up and we shouldn't stand for it. 
C. How can you resolve/fix the error?

```js
const iHateThisSoMuch = {
    bit1: "Go play",
    bit2: " in traffic.", 
    greet: function () {
        console.log(this.bit1 + this.bit2);
    }
}
iHateThisSoMuch.greet();
```

### Prompt #5

We're trying to print Bob's name to the console. But for some reason, it's not
working ...

```js
var bob;
console.log(bob.name);
```

A. What is the error message?
TypeError: Cannot read properties of undefined (reading 'name')
B. What is causing the error?
Absence of a defined value of key 'name' for property of var 'bob'
C. How can you resolve/fix the error?

```js
let bob = {name: 'Bob'};
console.log(bob.name);
```

### Prompt #6

We're trying to print the message to the console. But for some reason, it's not
working...

```js
  let forSale = "sea shells"
  let message = `She "sells' ${forSale} by \`sea' sea shore'
  console.log(message)
```

A. What is the error message?
SyntaxError: Unexpected end of input
B. What is causing the error?
Ticky tacky bullshit
C. How can you resolve/fix the error?

```js
  let forSale = "sea shells"
  let message = `She "sells' ${forSale} by \`sea' sea shore`
  console.log(message)
```

### Prompt #7

We're trying to print Bob's first name to the console. But for some reason, it's
not working.

```js
const bob = {
  profile: {
    name: {
      firstName: "Bob",
      lastName: "Seger"
    },
    age: 73,
    dateOfBirth: {
      month: "May",
      day: 6,
      year: 1945
    },
    career: "Singer"
  }
};

console.log(bob.name.first_name);
```

A. What is the error message?
TypeError: Cannot read properties of undefined (reading 'first_name')
B. What is causing the error?
Really bad dot notation.
C. How can you resolve/fix the error?

```js
const bob = {
  profile: {
    name: {
      firstName: "Bob",
      lastName: "Seger"
    },
    age: 73,
    dateOfBirth: {
      month: "May",
      day: 6,
      year: 1945
    },
    career: "Singer"
  }
};

console.log(bob.profile.name.firstName);
```

### Prompt #8

We're trying to make it so that when we call the `greet` method of `person`, an
alert appears with the person's full name. But for some reason, it's not working
...

```js
let person = {
  firstName: "Bob",
  lastName: "Seger",
  greet: function() {
    function fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    alert(fullName());
  }
};

person.greet();
```

A. What is the error message?
ReferenceError: alert is not defined at greet
B. What is causing the error?
'alert' is part of the window object and I can't get it to do what I want.
C. How can you resolve/fix the error?
I don't know I can't go on with this one
```js
let person = {
    firstName: "Bob",
    lastName: "Seger",
    greet: function() {
      alert(function fullName() {
        return `${this.firstName} ${this.lastName}`;
      })
    }
  };
  person.greet();
```

### Prompt #9

We're trying to implement the [Fibonacci Sequence](https://en.wikipedia.org/wiki/Fibonacci_number). But for some reason,
it's not working ...

**Note:** The commented out code is part of the prompt. It represents code we've tried to implement to complete the function, and we may or may not need all or some of the commented out code in the final solution.

```js
function createSequence( max ) {
  let sequence = [1, 1]
  // a = 1
  // b = 1

  for (let i = 2; i < max; i++) {
  let a = sequence[i - 1]
  let b = sequence[i - 2]
  sequence.push(a + b)

  // while (i <= max) {
  //    var a = 1, b = 1
  // }
  // }
  return sequence
}

let sequence = createSequence(20)
console.log(sequence)
```

A. What is the error message?
SyntaxError: Identifier 'sequence' has already been declared
B. What is causing the error?
Not sure, but the thing works when I activate one of the commented-out close braces. 
C. How can you resolve/fix the error?

```js
function createSequence( max ) {
    let sequence = [1, 1]
    for (let i = 2; i < max; i++) {
    let a = sequence[i - 1]
    let b = sequence[i - 2]
    sequence.push(a + b)
    }
    return sequence
  }
  
  let sequence = createSequence(20)
  console.log(sequence)
```

### Prompt #10

We're trying to make a working counter object. But for some reason, it's not
working ...

```js
const Counter = {
  total: 0,
}

Counter.increase() {
  this.total++
}

Counter.decrease() {
  this.total--
}

Counter.reset() {
  this.total = 0
}

Counter.increase()
Counter.increase()
Counter.increase()
Counter.increase()
Counter.increase()
Counter.increase()
console.log(Counter.total) // => value = 6
Counter.decrease()
Counter.decrease()
Counter.decrease()
Counter.decrease()
console.log(Counter.total)  // => value = 2
Counter.rest()
console.log(Counter.total) // => value = 0
```

A. What is the error message?
SyntaxError: Unexpected token '{'
B. What is causing the error?
Typos and shoddy syntax
C. How can you resolve/fix the error?

```js
let Counter = 0;
  
  function increase() {
    Counter++;
  }
  
  function decrease() {
    Counter--;
  }
  
  function reset() {
    Counter = 0;
  }
  
  increase(Counter)
  increase(Counter)
  increase(Counter)
  increase(Counter)
  increase(Counter)
  increase(Counter)
  console.log(Counter) // => value = 6
  decrease(Counter)
  decrease(Counter)
  decrease(Counter)
  decrease(Counter)
  console.log(Counter)  // => value = 2
  reset(Counter)
  console.log(Counter) // => value = 0
```

### Prompt #11

We're trying to print the string `"hello world"`. But for some reason, it's not
working ...

```js
let obj = {
  oompa: [
    {
      loompa: {
        doopati: [
          [
            {
              do: ["good by cruel world", "hello world", "goodnight moon"]
            }
          ]
        ]
      }
    }
  ]
};

let message = obj[0].oompa.loompa[0].doopati.do[2];
console.log(message);
```

A. What is the error message?
TypeError: Cannot read properties of undefined (reading 'oompa')
B. What is causing the error?
They were slaves, "error" might be an understatement
C. How can you resolve/fix the error?

```js
let obj = {
    oompa: [
      {
        loompa: {
          doopati: [
            [
              {
                do: ["good by cruel world", "hello world", "goodnight moon"]
              }
            ]
          ]
        }
      }
    ]
  };
  
  let message = obj.oompa[0].loompa.doopati[0][0].do[1];
  console.log(message);
```
