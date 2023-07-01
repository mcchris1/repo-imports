[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Mongoose Artists

Work through the prompts to get your own practice with:

* Defining Mongoose Schemas and Models
* Validating a Schema
* Querying a Schema

## Instructions

1.  Clone this repository.
1.  Change into the new directory.
1.  Install dependencies.

A pull request is not required, but it is necessary if you want a code review.

## Step 1: Connect to Mongoose

- Use npm to install `mongoose`
- Create a folder called `db`
- Create a file inside of `db` called `connection.js`
- Establish a connection to the database inside of a `connection.js` file

## Step 2: Define a Schema

- Create a folder called `models`
- Create a file called `Artist.js` inside of the `models` directory
- Import your database connection object from `connection.js`
- Using the mongoose `Schema` class, define a schema for an Author
- Use `mongoose.model()` to turn your schema into model
- Export your model from `Artist.js`

## Step 3: Validate Your Schema

Add the following properties and validation to your Artist schema:

- `name`:
  - String
  - At least 2 characters long
  - Required
  - Unique
- `genre`:
  - String
  - From the following list: Pop, Rock, Blues, Hip Hop, Jazz, Folk, Country, Classical, and Rap
- `songs`:
  - Should be an array of instances of a `Song` Schema:
    - `title`:
      - String
      - Required
      - Unique
    - `album`:
      - String
    - `length`: (Song length, in seconds)
      - Number
      - Greater than 1

Be sure to reference the documentation on [Schema
types](https://mongoosejs.com/docs/schematypes.html) and
[Validation](https://mongoosejs.com/docs/validation.html).

## Step 4: Query Your Model

- Create an `index.js` file
- Import your Artist model in your `index.js` file
- Insert two artists, each with 3 songs
- Query for those artists inside of MongoDB

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
