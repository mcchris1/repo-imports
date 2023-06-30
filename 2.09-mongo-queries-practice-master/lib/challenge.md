# MongoDB CLI

## Getting Started

The prompts below each ask for you to write the query in MongoDB for performing
some action (described in the prompt). Your response should be a valid query and
it should be property formatted in Markdown. For example:

**Prompt:** Find all burgers in the `burgers` collection.

```
db.burgers.find({})
```

### Instructions

* Start your `mongo` server
* Connect to the `mongo` shell

### Prompts

**Prompt:** What is the command to start the `mongo` server?
mongod
**Prompt:** What is the command to connect to the `mongo` shell?
mongosh
**Prompt:** What is the command for listing all `mongo` databases?
show dbs
**Prompt:** What command would you use to create a database called `burgers`?
use burgers_db
**Prompt:** What command would you use to add the collection `burger` to your
`burgers` database?
db.createCollection("burger")
**Prompt:** What is the command for listing all collections in a database?
db.getCollectionNames()

## Inserting

### Prompts

**Prompt:** Insert a single burger into the `burgers` collection with the
following:

* a `patty` property set to `beef`
* a `cheese` property set to `false`
* a `toppings` set to an array with `ketchup`, `onions`, and `pickles`
db.burgers.insertOne({"patty": "beef", "cheese": false, "toppings": ["ketchup", "onion", "pickles"]})

**Prompt:** Insert 10 burgers into the `burgers` collection with the following:
db.burgers.insertMany([{"patty": "beef", "cheese": true, "toppings": "ketchup"}, {"patty": "beef", "cheese": true, "toppings": "onions"}, {"patty": "beef", "cheese": true, "toppings": "pickles"}, {"patty": "turkey", "cheese": true, "toppings": "ketchup"}, {"patty": "turkey", "cheese": true, "toppings": "onions"}, {"patty": "turkey", "cheese": true, "toppings": "pickles"}, {"patty": "veggie", "cheese": true, "toppings": "ketchup"}, {"patty": "veggie", "cheese": true, "toppings": "onions"}, {"patty": "veggie", "cheese": true, "toppings": "pickles"}, {"patty": "veggie", "cheese": false, "toppings": "ketchup"},])

* a `patty` property that is set to one of: `beef`, `turkey`, or `veggie`
* a `cheese` property that is either `true` or `false`
* a `toppings` property that is either one of `ketchup`, `onions`, `pickles`,
  `mustard`, and `mayonnaise`

## Reading

The following prompts will have you querying (reading) from your `burger`
collection. If you don't have burgers in your database that match the query
criteria described below, you wont get any results back. So, add one or two that
match that criteria before running the query.

### Prompts

**Prompt:** What query would find all burgers with a `beef` patty?
db.burgers.find({"patty": "beef"})
**Prompt:** What query would find all burgers with cheese on them?
db.burgers.find({"cheese": "true"})
**Prompt:** What query would find a burger by its ObjectId?
db.burgers.find({"_id": ObjectId()}) // explicit
db.burgers.find(ObjectId()) // slick
**Prompt:** What query would find all burgers with `ketchup` as a topping?
db.burgers.find({"toppings": "ketchup"})
**Prompt:** What query would find all burgers with either a turkey or veggie
patty?
db.burgers.find({$or: [{"patty": "turkey"}, {"patty": "veggie"}]})
**Prompt:** What query would find all burgers with a beef patty and cheese?
db.burgers.find({$and: [{"patty": "beef"}, {"cheese": true}]})
**Prompt:** What query would find all burgers with a beef patty and ketchup as
a topping?
db.burgers.find({$and: [{"patty": "beef"}, {"toppings": "ketchup"}]})
**Prompt:** What query would find all burgers with a beef patty and both onions
and pickles as toppings?
db.burgers.find({$and: [{"patty": "beef"}, {"toppings": "onions"}, {"toppings": "pickles"}]})
**Prompt:** What query would find burgers with either a turkey patty or cheese?
db.burgers.find({$or: [{"patty": "turkey"}, {"cheese": true}]})
## Update

### Prompts

**Prompt:** What query would update one burger by its ObjectId, setting its
"patty" to "pork"?
db.burgers.update({"_id": ObjectId()}, {$set: {"patty": "pork"}})
**Prompt:** What query would update all burgers with beef paddies to have
cheese? (i.e. set "cheese" to true)
db.burgers.updateMany({"patty": "beef"}, {$set: {"cheese": true}})
## Delete

### Prompts

**Prompt:** What query would delete a burger by its ObjectId?
db.burgers.deleteOne({_id: ObjectId()})
**Prompt:** What query would delete all veggie burgers?
db.burgers.deleteMany({"patty": "veggie"})
**Prompt:** What query would delete all burgers with pickles on them?
db.burgers.deleteMany({"toppings": "pickles"})
