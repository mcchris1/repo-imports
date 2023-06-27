[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express Mongoose

We've covered working with MongoDB and Mongoose. We've covered the basics of
building an API with Express.

Now it's time to combine them, to use Mongoose and Express to build
database-backed APIs.

## Prerequisites

- Node
- MongoDB and Mongoose
- Express

## Objectives

By the end of this, developers should be able to:

- Build an API using Express and Mongoose

## Introduction

We've got the pieces we need to build an API, we just need to assemble them
together.

Those pieces are:

1. MongoDB and Mongoose - we'll define models using Mongoose and query those
   models from within our Express application.
1. Express - we'll use Express to define routes that perform database queries
   and return JSON data to our users.

## I Do: [Bookmarks API](https://git.generalassemb.ly/sei-embers/express-mongoose-bookmarks-api)

Follow along with [this repository](https://git.generalassemb.ly/sei-embers/express-mongoose-bookmarks-api)
as I build out a very simple API to demonstrate working with Express and
Mongoose.

## Initial Setup

A common theme throughout this is that things are going to be the same - we're
just doing Mongoose and Express together. That makes sense, right?

Our initial setup is going to be largely the same:

1. Create a `package.json` file
1. Install `express` and `mongoose`
1. Create a `db/` directory, `connection.js`, `index.js`, and `models/`
   directory

## Database Setup and Mongoose

Our database setup is going to be largely the same too:

1. Set up the database connection in `connection.js`
1. Define a model inside the `models/` directory
1. Seed the database with the initial data

## Express Setup and Routes

We're going to start by building out a basic Express API (like we've done
previously).

1. Import `express` in `index.js`
1. Define a route for a `GET` request to `'/'`
1. Have your server listen on port 3000

## Combine Express and Mongoose

This is where things start to get interesting!

First, we need to import our connection to our database by adding the following line:
```js
const connection = require('./connection.js')
```

Next, we need to import our model into our `index.js`, which we do by adding
this line below where we create our Express app:

```js
const Bookmark = require('./models/Bookmark')
```
Now that we have our bookmark model, we can use it to query our database. We'll
then use `res.json` to send the query response back to our users as JSON data.

All together, that looks like this:

```js
app.get('/', function(req, res) {
  Bookmark.find({}).then(bookmarks => res.json(bookmarks))
})
```

## Additional Resources

- Any useful links should be included in the talk material where the link is
  first referenced.
- Additional links for further study or exploration are appropriate in this
  section.
- Links to important parts of documentation not covered during the talk, or
  tools tangentially used but not part of the focus of the talk, are also
  appropriate.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
