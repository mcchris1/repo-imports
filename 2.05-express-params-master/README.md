[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express Parameters

Now that we've discussed the basics of defining routes in Express, we need to
talk about how to get data from the user, so we can do something with it.

There are a lot of ways we'll collect data from our users:

1. Forms
1. POST requests
1. Params

We're going to focus on the last option. It's by far the most ubiquitous.

## Prerequisites

- Node
- Express

## Objectives

By the end of this, developers should be able to:

- Explain what parameters are and how they work
- Define a route that accepts a parameter using Express

## Introduction

Let's start by going on a trip!

Open up [Kayak.com](https://www.kayak.com/) and search for flights from
Washington, DC to Hong Kong for this weekend. GA is paying! (Not really)

Take a look at the URL that gets generated when you search for flights. It
should look something like this:

```txt
https://www.kayak.com/flights/WAS-HKG/2019-12-06/2019-12-13?sort=bestflight_a
```

This URL has a lot of parts to it. Hopefully some of this stuff is familiar. For
example:

- What is the `https://www.kayak.com` part?
- What is the `/flights` part?

But what about the rest of the stuff in the URL?

Well there are two things going on here:

1. Parameters
1. Query String

The query string is the section at the end of the url (`?sort=bestflight_a`).
Query strings always start with a `?` and are followed by `key=value` pairs
separarated by commas. They're one way of collecting data from users.

The remaining pieces of the URL are **parameters**.

### Parameters

The remaining pieces of the URL above are all parameters, including:

- `WAS-HKG`
- `2019-12-06`
- `2019-12-13`

These values tell us:

- The departure location (`WAS`)
- The arrival location (`HKG`)
- The departure date (`2019-12-06`)
- The arrival date (`2019-12-13`)

**This is the purpose of params: to get data from users through the URL.** Even
if you didn't realize, you've used this approach a lot. For instance, when you
visit your profile on any social media application (Facebook, Twitter, LinkedIn)
and look at the URL, you'll notice a value that uniquely represents you. That
value is a parameter.

## I Do: Writing Routes with Params

Follow along with [this repository](https://git.generalassemb.ly/sei-embers/express-params-exercise).

I'm going to create a directory in my sandbox to work through building this out.

### Review: Setting up an Express App

Let's walk through the process of setting up a simple Express app.

- What modules do I need to install?
- What files do I need?
- What do I require (i.e. import) into those files?
- How do I set up a basic server?
- How do I run my server?

### Routes with Params

We've seen how to define routes already. For instance, if we wanted to define a
route that sent back a json object, we'd do something like this:

```js

app.get('/', (req, res) => {
    res.send({ hello: 'World' })
})
```

If we visit localhost:3000, we should see this json object.

Could we upate this route so that it said hello to anyone who's name was passed
in as a parameter? That would look like this:

```js

app.get('/:name', (req, res)=> {
  res.json({ hello: req.params.name });
})
```

What's going on here?

- `req` represents the incoming request and `res` represents the outgoing
  response
- `res.json` is what we use to send a JSON response
- `req.params` is an object containing all params in the url
- `req.params.name` will be the value in the url. So if we navigate to
  localhost:3000/james, `req.params.name` will be the string `'james'`

## How Params Work

Params let us add placeholders in our route paths.

What ever we name the param in the path will be the key in the `req.params`
object. For example, if we have this path:

```txt
/dogs/:breed
```

Then we'd use the following inside our route definition:

```js
req.params.breed;
```

When we visit `localhost:3000/dogs/Westie`, then the value of `req.params.breed`
will be `Westie`.

## Using Params

We can use params to get a lot of valuable information from users. Let's go back
to that original Kayak URL (without the query string):

```txt
https://www.kayak.com/flights/WAS-HKG/2019-12-06/2019-12-13
```

We can build a route to handle these kinds of requests pretty easily. We'll
start with a simple route definition:

```js
app.get('/flights', (req, res) => {
    res.json({ flights: 'lets go!' })
})
```

The first part of the URL after the resource (`/flights`) asks the user for the
location they're traveling from to the location they're traveling to. So we can
update our path to get that information:

```js
app.get('/flights/:from-:to', (req, res) => {
    res.json({
        flight: {
            from: req.params.from,
            to: req.params.to
        }
    })
})
```

Next we need the arrival date and the departure date. We can add those params to
our URL as well:

```js
app.get('/flights/:from-:to/:arrival/:departure', (req, res) => {
    res.json({
        flight: {
            from: req.params.from,
            to: req.params.to,
            arrival: req.params.arrival,
            departure: req.params.departure
        }
    })
})
```

And there we have it! We'd most likely use this data from params in a query to
our database. More on that later!

## Additional Resources

- [Express Documentation on Route parameters](https://expressjs.com/en/guide/routing.html#route-parameters)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
