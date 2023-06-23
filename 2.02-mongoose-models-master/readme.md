[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling & Mongoose

Now that we've covered databases on their own, we're ready to learn about how to
integrate them with a JavaScript application.

When working with databases, we need to model the data we'll store in our
database. We also need a tool for querying that data. In JavaScript, both of
those are covered by Mongoose.

## Prerequisites

- MongoDB
- Node
- Object Oriented Programming

## Objectives

By the end of this, developers should be able to:

- Explain about data modeling
- Understand Object Document Mapping (ODM)
- Build models using Mongoose
- Perform a simple query on a Mongoose Model

## Introduction

Today we'll talk about Mongoose, an Object Document Mapping (ODM) library for
JavaScript & MongoDB. Mongoose plays nicely with Express and modern JavaScript
conventions, and has an easy to learn API.

We're also going to build models using Mongoose. This will let us easily get
data in and out of our database.

Before any of that though, we'll talk about data modeling and how to think about
representing your data before you build it.

## Modeling

What is data modeling?

The short answer is: it's a way to think about the structure of our data and the
relationships between different objects in our application and how we'll store
that data and embody those relationships in our database.

That should sound familiar - it's _very_ similar to the process of defining
classes in Object Oriented Programming. In fact, you could say that Models are
like classes for our database!

### I Do: Modeling a Book object

Let's say I'm building out an application for the DC Public Library. How would
we model the books that this application will track?

Watch as I define this Book object on the whiteboard.

### You Do: Model a Song object

Now let's say you're building out an application for users to stream songs. How
would you model a song within this application?

Define a Song object in your notebook.

> A Note on Relationships: It's rare that we'll define objects in isolation.
> Typically, we'll define them in the context of their relationship to other
> objects (like Books and Authors or Songs, Artists, and Albums). The APIs we're
> going to be building will only have one model. Later, when we get to building
> more complex APIs, we'll discuss how we define and think about these
> relationships.

## Mongoose

[Mongoose](http://mongoosejs.com/) is an Object Document Mapper (ODM). What the
heck does that mean?

To answer that, think about the following questions:

* What do we use to define compound data in JavaScript? What data type do we use to model real world things?
* What do we use to store data in MongoDB?

_Mapping_ refers to mapping Objects (JavaScript) to Documents (MongoDB).

What does that tell you about Mongoose and what it does?

### Review: What is Mongoose

Mongoose is a tool for mapping MongoDB documents to JavaScript objects. With
Mongoose, we can do things like:

* Create Collections and Documents from within a JavaScript application
* Define the structure of Documents in a collection and ensure objects saved to our database follow that structure.
* Query a collection for a single document or multiple documents
* Save, update, and delete documents in a collection

Remember that everything in JavaScript is an object. And data is stored in MongoDB in a
JSON-like format. So what an ODM really does is create an **interface** between
JavaScript objects and documents in MongoDB.

### Why are we using Mongoose?

ODMs like Mongoose let us connect to a database and then interact with our
database in a consistent and easy way. We could just use the MongoDB JavaScript
library, but Mongoose gives us an easier way to interact with our database and
work with the objects stored in it. It's consistent and has a lot of nice
features for querying, so we don't have to write them ourselves.

## I Do: [Mongoose Author Tracker](https://git.generalassemb.ly/sei-embers/mongoose-cookbooks)

I'm going to build a simple Node app with a MongoDB database for tracking cook
book Authors and their Books. You will be building out a similar application.

## Connecting to Mongoose

In order for us to use Mongoose to communicate with our database, we need to
link it up to set up Mongoose in our application. We'll do this by:

- Establishing a connection with a Mongo database
- Defining a Mongoose schema and model

A schema is a description of how an object should be structured (a _schematic_
for objects we want to use in our application and store in our database).

A schema is defined as part of a **Model**: a representation of our data in our
application.

## I Do: Setup Mongoose Connection

In the Author Tracker, inside the `db/` directory, is a `connection.js` file.
Within that file, I'm going to connect to the database:

```js
let mongoose = require("mongoose")

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect("mongodb://127.0.0.1:27017/authors", mongooseConfig)

module.exports = mongoose
```
There are a few different pieces to this code snippet:

1. `let mongoose = require('mongoose')` - creates a variable called `mongoose` and imports the Mongoose library.
1. `mongoose.connect` - this line uses the `connect` method to connect to a MongoDB database (in this case, `authors`). Note that if the database doesn't exist, this will create that database for us.
1. `module.exports` - this is similar to `export default` from React: we're exporting an object from this file (in this case, our database connection)

## Schemas & Types

We can think of a schema as sort of a blueprint for how we want our model to
look. We describe its structure, telling it what properties it should have, and
what type of data those properties should contain.

Let's pull up the [Mongoose docs](http://mongoosejs.com/docs/schematypes.html),
for reference.

Most of these types should look familiar. They map pretty closely to
JavaScript's native types.

We use schemas to enforce data consistency. For example, if we set the `name`
property to a string but then try to store a `boolean` for that field, it will
throw an error and not store that object in the database.

### I Do: Defining a Mongoose Schema

Watch as I create an `Author` model. To do so, I'm going to create a new folder
called `models` with a file called `Author.js` in it. That file will contain the
following:

```js
// models/Author.js

// Import Mongoose
let mongoose = require("mongoose")

// Create our "schema" for our Author model
let authorSchema = new mongoose.Schema({
  // firstName and lastName are our properties
  firstName: String,
  lastName: String
})

// Create our Author model
let Author = mongoose.model("Author", authorSchema)

module.exports = Author
```

The above code does the following:

- Require the `connection.js` file and save it to a variable called `mongoose`.
- Create a variable `Schema` equal to `mongoose.Schema` (the Schema class provided by mongoose)
- Define an `Author` schema using mongoose's `Schema()` class.
- Add whatever properties we decide are necessary with their data types.
- Export the schema using `module.exports` and `mongoose.model()`.

## Schema Validation

Note that when we declare properties, we can write them one of two ways.

```js
{
  firstName: String;
}
```

or

```js
{
  firstName: {
    type: String;
  }
}
```

There are some other neat options we can include using mongoose.

For example, on a `String` we can include any of these properties:

- **lowercase:** boolean, whether to always call .toLowerCase() on the value
- **uppercase:** boolean, whether to always call .toUpperCase() on the value
- **trim:** boolean, whether to always call .trim() on the value
- **match:** RegExp, creates a validator that checks if the value matches the given regular expression
- **enum:** Array, creates a validator that checks if the value is in the given array.
- **minlength:** Number, creates a validator that checks if the value length is not less than the given number
- **maxlength:** Number, creates a validator that checks if the value length is not greater than the given number

So if we wanted to include any of these, we would have to use the `type` format.

```js
{
  firstName: {
    type: String,
    minlength: 2,
    maxlength: 25
  }
}

```

Similar for `Number` and `Date`:

**Number**

- **min:** Number, creates a validator that checks if the value is greater than or equal to the given minimum.
- **max:** Number, creates a validator that checks if the value is less than or equal to the given maximum.

**Date**

- **min:** Date
- **max:** Date

[The documentation has it all!](https://mongoosejs.com/docs/schematypes.html)

> These validations are simple but effective. The key to defining robust models
> is to provide as much validation at the database layer as possible. So, it's
> therefore really important to take some time to read through this part of the
> documentation.

## I Do: Author Model Validation

Watch as I add the following properties and validation to my Author model's
schema:

* `firstName`
* `lastName`
* `url`
* `books` (An array of `Book` documents)

## Tease: Querying models

We're going to talk about this in depth in a future lesson. For now, we need to
know a little bit about querying so that we can test our models and ensure
they're working.

### I Do: Query my Model

I'm going to define an `index.js` file at the root of this project. In it, I'm
going to define a few authors and books an demonstrate how to insert them into
the database. Then we can go and see them in MongoDB.

## You Do: [Artist and Song Tracker](https://git.generalassemb.ly/sei-embers/mongoose-artists)

Clone down [this
repository](https://git.generalassemb.ly/sei-embers/mongoose-artists)
and work through the prompts in the Readme. Keep this document handy as
a reference.

## Additional Resources

- [Mongoose Documentation](https://mongoosejs.com/)
- [Mongoose Documentation: Quick Start Guide](https://mongoosejs.com/docs/index.html)
- [Mongoose Documentation: Models](https://mongoosejs.com/docs/models.html)
- [Mongoose Documentation: Schemas](https://mongoosejs.com/docs/guide.html)
- [Mongoose Documentation: Schema Types](https://mongoosejs.com/docs/schematypes.html)
- [Mongoose Documentation: Validation](https://mongoosejs.com/docs/validation.html)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
