[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Game of Thrones Fan Page

You've been tasked with building a Game of Thrones fan page, featuring your
favorite characters and a short bio for each one. You can't truly honor the
Queen of Dragons with a static HTML/CSS page. You need to add some
interactivity!

![Screenshot](lib/img/screensshot.png)

## Prerequisites

- The DOM
- Events and event listeners

## Instructions

1. Fork and clone this repository.
2. Change into the new directory.
3. Fulfill the listed requirements.

Please turn in your submission by the deadline on your cohort calendar.

## Requirements

The starter code has been provided for you. `lib/index.html` and `lib/style.css`
include the initial structure and styling.

In `lib/script.js`, you will find an array of objects with each character's name
and bio.

You will need to modify the HTML, CSS, and JS to complete the requirements.
Think about the problem you are solving in each step, and make use of the
features of all three.

1. Add a button to each character's `<div>` with the class `more-info`. When the
   user clicks the button, the name of the character prints to the console.
2. Add more functionality to the button: when clicked, the bio of the character
   appears beneath their image.
3. Add an input field and submit button at the top of the page. When the user
   types the name of a character and clicks submit, only that character remains
   visible in the browser.
4. Add another button to each character's `<div>` with the class
   `alive-or-dead`. When the user clicks the button, indicate the character is
   still on the show with with a green `STILL ALIVE!` under their image or that
   they have been killed off with a red `SORRY, YOU DEAD` under their image.

## Bonus

- Create a button that, when clicked, arranges all characters in alphabetical
  order.

- Create another button that randomly shuffles the characters.

- Create the HTML elements for each character completely in Javascript and
  append them to the `<div class="got-characters">` element.

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
