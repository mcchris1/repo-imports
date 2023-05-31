- [Boilerplate setup](#boilerplate-setup)
- [A basic `GET` route](#a-basic-get-route)
- [Route Parameters](#route-parameters)
- [Query string parameters](#query-string-parameters)
- [Session data](#session-data)
- [Redirect](#redirect)
- [Middleware](#middleware)
- [EJS](#ejs)
- [Database schema and seed files](#database-schema-and-seed-files)
- [pg-promise basic configuration](#pg-promise-basic-configuration)

## Boilerplate setup

Initialize your project's `package.json` file: 

```bash
npm init
```

Create a `.gitignore` file with the following content:

```
node_modules/
```

Install the `express` package and save it into the `package.json` dependency list:

```bash
npm install --save express
```

Create a `server.js` file which starts an Express web server:

```js
// Get the express module.
const express = require('express');
// Create a new Express application (web server)
const app = express();

// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;

// Start the web server listening on the provided port.
app.listen(PORT, () => { 
  console.log(`Express web server listening on port ${PORT}`);
});
```

Run your server with [nodemon](https://nodemon.io/) so the server restarts as you edit your source files:

```js
nodemon server.js
```

## A basic `GET` route

```js
app.get("/", (request, response) => {
    // The `.send()` method returns HTML to the browser
    response.send(‘hello world’);
}
```

## Route Parameters

A route parameter is a way to extract data from the URL.

```js
// Using a colon in an endpoint will create a route parameter
app.get('users/:id', (request, response) => {
  const userId = req.params.id;
  // Do whatever we need to do with the user ID in the URL.
});
```

Read more in [Express Routing Guide](https://expressjs.com/en/guide/routing.html).

## Query string parameters

A query string parameter comes after the `?` in a URL, and provides extra information in a request.

Considering an example API request: `http://gameofthronesapi.com/characters/?page=3&limit=50`
```js
app.get('characters/', (request, response) => {
  const page = request.query.page;
  const limit = request.query.limit;
  // Do whatever we need to do with the page and limit values.
});
```

Read more in the [Express `request.query` documentation](https://expressjs.com/en/api.html#req.query)

## bcrypt

Install the `bcrypt` package:

```bash
npm install --save bcrypt
```

Create a password digest to store in the database:

```js
bcrypt.hash('kittens22', 10)
  .then(passwordDigest => {
    // create a user and store the passwordDigest in the database.
  });
```

Compare a plaintext password to a password digest:

```js
// The first argument is the plaintext password
// The second argument is the password digest stored in the database
bcrypt.compare('kittens22', '$2b$10$vcLHAj4MBtEXwGO6hWLKgem7DqIbcRRDTavbsbgu96Ra6QP9BPJ5e')
  .then(function(isPasswordCorrect) {
    // isPasswordCorrect == true if the password is correct, false if not.
  });
```

Read more about the API in the [official documentation](https://www.npmjs.com/package/bcrypt#async-recommended) and [how bcrypt works in this article](https://all-about-bcrypt.glitch.me/).

## Session data

Install the `express-session` middleware package:

```bash
npm install --save express-session
```

Configure the middleware, which makes `request.session` available in route handlers:

```js
app.use(
  session({ 
  secret: "some random string we should change for our application", 
  resave: false, 
  saveUninitialized: true 
  });
);
```

Setting and getting session data for an individual user:

```js
app.get("/", (request, response) => { 
  if (request.session.viewCount) { 
    request.session.viewCount++; 
  } else { 
    request.session.viewCount = 1; 
  } 
  response.send( 
    `<p>You have viewed this page ${request.session.viewCount} times</p>` 
  ); 
});
```

Read more in [the Express session lesson](https://git.generalassemb.ly/wdi-nyc-tesseract/js-user-sessions-lesson)

## Redirect

When we want to redirect a user from one route to another, we use the `response.redirect` method:

```js
app.post('/tasks', (request, response) => { 
  const addTask = request.body;
  Task.create(addTask).then(task => {
    // response.redirect() accepts the HTTP status code and the path to redirect to.
    response.redirect(302, '/tasks');
  });
});
```

## Middleware

Middleware typically modifies the `request` or `response` objects before one of our application's route handlers are called. e.g. `express-session` sets up the `request.session` variable, and `body-parser` sets up `request.body`.

We can write our own middleware function:

```js
const requireLogin = (request, response, next) => {
  if (!request.session.loggedIn) {
    // A middleware function can end the request cycle, so the next
    // handler function is not called.
    return response.status(403).send("You do not have access");
  }
  // A middleware function calls next() to invoke the next handler function
  // on the route.
  next();
};

app.get("/your-account", requireLogin, (request, response) => {
  // This function is only called if the user is logged in.
});
```

## EJS


Install the `ejs` package:

```bash
npm install --save ejs
```

In `server.js`:

```js
// Tell Express we'll be using EJS for views.
app.set('view engine', 'ejs');
```

EJS templates **must** be stored in the `views/` folder.

EJS templates are sent back using the `response.render()` method:

```js
app.get('/', (request, response) => {
    response.render('homepage/index');
});
```

Use a "squid" `<%= %>` to output a JavaScript variable into the template:

```ejs
<h2><%= user.name %></h2>
```

## Database schema and seed files

A `database/schema.sql` file should remove and create the application's database and tables.

```psql
DROP DATABASE some_db;
CREATE DATABASE some_db;

-- Connect to the database
\c some_db

DROP TABLE IF EXISTS example;

CREATE TABLE example (
  id SERIAL PRIMARY KEY,
  column_2 INTEGER NOT NULL,
  column_3 VARCHAR(255),
  column_4 TEXT,
  column_5 BOOLEAN
);
```

To run the schema file:

```bash
psql -f database/schema.sql
```

A `database/seed.sql` file should remove all rows in each table, and insert sample data.

In `database/seed.sql`:

```psql
-- Connect to the database
\c some_db

INSERT INTO example (column_1, column_2) VALUES ('a', 'b');
```

Run the seed file:

```bash
psql -f database/seed.sql
```

## pg-promise basic configuration

Install pg-promise as well as packages useful for debugging:

```bash
npm install --save pg-promise bluebird pg-monitor
```

Create a `database/connection.js` file, which exports a connection that models will use. **Make sure to set the database name in `databaseName`**:

```js
const promise = require("bluebird");
const monitor = require("pg-monitor");

let initOptions = {};

// Display better error stack traces in development.
if (process.NODE_ENV !== "production") {
  promise.config({
    longStackTraces: true
  });
  initOptions = {
    promiseLib: promise
  };
}

// attach to all events at once;
monitor.attach(initOptions, ["query", "error"]);

// Import pg-promise and initialize the library with an empty object.
const pgp = require("pg-promise")(initOptions);

const databaseName = "some_db";

let connectionConfig;

if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
  // Prepare the connection URL from the format: 'postgres://username:password@host:port/database';
  connectionConfig = `postgres://localhost:5432/${databaseName}`;
} else if (process.env.NODE_ENV === "production") {
  // Heroku will set this variable for you.
  connectionConfig = process.env.DATABASE_URL;
}

// Creating a new database connection with the provided configuration.
const db = pgp(connectionConfig);

module.exports = db;
```
