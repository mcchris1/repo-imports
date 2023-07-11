[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro to React.js

![react-logo](./images/react-white-logo.png)

## Learning Objectives

- Explain what a frontend framework is and why they can be helpful in writing
    more complex applications.
- Explain what ReactJS is and where it fits in our applications' stack.
- Explain the component model of web development.
- Create and render React components in the browser.

## Framing

### What is a Frontend Framework?

- A framework is software providing generic functionality and structure that
    serves as foundation to build and deploy applications.
- Express is a framework that runs on the server, receives incoming requests
    from the client, performs some work that you have defined, and returns a
    response to the client. React is a front-end framework, which runs in the
    browser only. It makes building complex user interfaces easier. 
- Frameworks can help standardize code, give you additional functionality and
    performance, and can help get your code off the ground faster.
- There are [many](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)
    front end frameworks and each go about solving problems of how state is
    managed, updated, and displayed on the page in their own way, but there are
    many commonalities.
- There is a lot of debate over whether frontend frameworks count as frameworks
    at all -- some people say that they are just libraries and should be referred
    to as such.

### What is ReactJS?

React is a JavaScript library used to craft modern day UI and views for the
front-end in web applications.

> **Selling Point:** By modeling small compatible components that focus on just
> rendering a view, we can move business logic out of the DOM, and therefore
> improve our app's performance, maintainability, modularity and readability.

#### Some History

The first thing most people hear about React is "Facebook uses it."

- First used by Facebook in 2011.
- Then Instagram in 2012.
- Went open source in May 2013.

    React was born out of Facebook's frustration with the traditional MVC model and
    how..

- Re-rendering something meant re-rendering everything (or just a lot).
- That had negative implications on processing power and ultimately user
    experience, which at times became glitchy and laggy.

    > If you want to get a taste of what React is all about,
    > [here's an introduction from React.js Conf 2015](https://www.youtube.com/watch?v=KVZ-P-ZI6W4&feature=youtu.be&t=510).
    > Recommend starting around the 8:35 mark and watching until 16:30.

## Components

The way we've been building our pages so far is using HTML or simply rendering
JSON data. We display a whole page at a time, and in order to display an update,
we have to reload the entire page.

A core part of the React philosophy is to build everything out using components,
instead of templates.

You can think of a component as a small piece of a webpage that has a singular
purpose. It can be as little as a single `<input>` field or as big as a sidebar
containing other components. Yes, components can hold other components.

![Templates Page](images/templates-page.png)

![Components Page](images/components-page.png)

> [WanderOak - Fixed Templates vs. Components](https://wanderoak.co/fixed-templates-vs-components/)

With components, we define them once (each React component should be defined in
its own file), and we can reuse them as many times as we want, on different
pages.

When we need to make updates, we only have to make those updates in one file.

### Examples!

Let's take a look at an example webapp and see how it might be broken down into
components.

![Wireframe](images/wireframe.png)
![Wireframe with components](images/wireframe_deconstructed.png)

> [MakeTea - Building Robust Apps with React](http://maketea.co.uk/2014/03/05/building-robust-web-apps-with-react-part-1.html)

Notice the structure of how the various components are nested.

```
- TubeTracker
    - Network
        - Line
    - Predictions
        - DepartureBoard
            - Trains
```

- TubeTracker contains the application
- Network displays each line on the network
- Line displays the stations on a line
- Predictions controls the state of the departure board
- DepartureBoard displays the current station and platforms
- Trains displays the trains due to arrive at a platform

## Exercise: Identifying Components

> 10 minutes exercise. 5 minutes review.

- Break into groups of three and take a look at Airbnb, Craigslist, Ebay, or a
    website of your choice. Identify the visual "components" the website is
    comprised of. Use markers to draw these out on the wall.

    As you're drawing this out, think about the following questions...

- Where do you see "nested components"? Where do you not?
- Are there any components that share the same structure?
- Of these similar components, what is different about them?

## Initial Setup

In order to create a new project and to get our development environment setup,
we are going to use the Terminal command `create-react-app`. It will create a
new folder in your current directory for the in-class application.

`create-react-app` is an NPM package also built by Facebook that writes our
build dependencies for us so that we can do less configuration. It allows us to
use React, [JSX](https://react.dev/learn/writing-markup-with-jsx), and
[ES6](https://en.wikipedia.org/wiki/ECMAScript). It also allows us to import our
CSS, it autoprefixes our CSS so that we don't have to worry about cross browser
compatibility, it gives us a dev server to run, and it enables hot reloading
which updates the code in our browser without us refreshing the page.

It uses Webpack which is a build tool that enables many of the features listed
above. It also includes Babel which transpiles our JavaScript from ES6 to be
compatible with older browsers. It also includes Autoprefixer for CSS
compatibility, ESLint for linting, and Jest for testing.

You can also set up all this yourself, but for now `create-react-app` allows us
to worry more about our code and less about configuration:

The [offical React docs](https://reactjs.org/docs/create-a-new-react-app.html)
suggest using `npx`, a modern javascript package runner, to run
`create-react-app`. `npx` is already available via `npm`.

The benefits here are that you do not need to install `create-react-app`
locally, and you will always be installing the latest version of
`create-react-app` when you start a new project.

> Here's a quick read on [npx vs npm](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/)

When creating new projects, you can run:

```sh
➜ npx create-react-app blog-app
➜ cd blog-app
➜ code .
➜ npm run start
```

### React Blog

Here you will begin setting up a blog app that you will continue working on
during this lesson's exercises. For demonstration purposes, We will be creating
a simple "hello world" app.

After running `npm run start`, we can view the app at `http://localhost:3000`

`create-react-app` provides us with a lot of nice tools and configuration to
start writing React. It isn't required but it makes things easier, and we'll use
it a lot throughout the rest of this unit.

Along with installing the necessary dependencies, it creates an initial app
skeleton that looks like this:

```sh
.
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
   ├── App.css
   ├── App.js
   ├── App.test.js
   ├── index.css
   ├── index.js
   ├── logo.svg
   ├── reportWebVitals.js
   └── setupTests.js
```

Most of the important files, which are primarily the ones where we will be
working today, are in the `/src` directory.

## You Do: Explore the File System

Take some time and look at what's been generated. Specifically look in `App.js`
and `index.js`

## Your First Taste of React

The basic unit you'll be working with in React is a **component**. Components
can be thought of as functional elements (literally a JS function) that take in
data and as a result, produce a dynamic UI.

> Your user interface is a _function_ of your data

Throughout this course so far we have separated HTML, CSS and Javascript in
different files. With components, the lines between those three become a bit
blurry. Instead, we organize our web apps according to small, reusable
components that define their own content, presentation and behavior.

What does a component look like? Let's start with a simple "Hello World"
example.

We'll start in our `/src/App.js` file, where we should some some code that looks
like this:

```jsx
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Let's break down the things we see here.

1. `function App()` - this is a function (just like all the functions you've
seen before) that is a React component. What makes it a component? The fact
that it's using React to `return` JSX (more on that later).
1. `return ( ... )` - Components **must** return JSX, an XML/HTML -like syntax
for describe a piece of UI.
1. `export default App` - this is how we _export_ a component, so that we can
import it elsewhere

> Note: In older applications you will see `import React from 'react';` This is
> how we used to add and use React. We had to import React like this at the top
> of every component JS file before React 17

Any easy way to remember the four things you need is FIRE (function, import (sometimes), return, export).

The above is how we _define_ a component, how do we render it to the browser?

For that, we have to look at `index.js`:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

An analogy here is the way we work with functions. First you _define_ a
function, then you _invoke_ it. In React, we _define_ a component, then we
_render_ it.

We _define_ components as functions (or classes - more on that later) and render
with the HTML-like syntax called JSX.

### Aside: JSX

Let's talk about that weird HTML-like stuff that we're returning from this
function. It looks a lot like HTML, but it's not! It's JSX,
[an XML-lke syntax that compiles to JavaScript](https://react.dev/learn/writing-markup-with-jsx).
We use it in React because the syntax is so nice to write. It does get compiled
to lightweight JavaScript objects, which React uses to build the HTML that gets
rendered in the browser.

> React can be written without JSX, or with other syntax alternatives. If you
> want to learn more,
> [check out this blog post](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/).

## We Do: Hello World - A Very Basic Component

Let's open up the browser and visit `localhost:3000`. You'll see the starter
code rendered in the browser.

Let's update our `App` component to look like this:

```jsx
import "./App.css";

function App() {
    return <h1>Hello World!</h1>;
}

export default App;
```

You should see the browser change instantely. That's something that
`create-react-app` gives to us.

Not bad.

## You Do: A Very Basic Component

Update the `App.js` file. Try both of the following:

- Change the text within the tag. Save and see what happens in the browser.
- Change the tag (and try a couple different tags). Save and see what happens in
    the browser.

## We Do: Dynamic Hello World

The way we've defined our `App` hello world component is similar to how we'll
often define components. But it's missing one thing: data to render to the
browser.

Let's walk through making our component a little dynamic using **_props_**.

First, we'll create a new component, called `Greetings`. Create a new file in
the `src` folder called `Greetings.jsx`.

```jsx
function Greetings(props) {
    return <h1>Hello!</h1>;
}

export default Greetings;
```

Next, we'll update our `App` component to replace :

```jsx
import './App.css';
import Greetings from "./Greetings";

function App(props) {
    return <Greetings />;
}

export default App;
```

This funky HTML syntax above (e.g. `<Greetings />`) is JSX as well! We can
import components by using the `import` statement with the proper file path, and
just like HTML, we can pass it information in key-value pairs with `props`!

In `App.js`, add a `name` prop with a value of your name!

```jsx
import Greetings from "./Greetings";

function App(props) {
    return <Greetings name={"Soleil"} />;
}

export default App;
```

We can now say that the Greetings component has a prop called `name` with a value of `Soleil`.

If we want to use this `name` in `Greetings`, we can retrieve it from the props
object!

In `Greetings.jsx`:

```jsx
function Greetings(props) {
    return <h1>Hello {props.name}!</h1>;
}

export default Greetings;
```

If you save and revisit the browser, you should see "Hello" and your name as an
`h1` on the page.

## Props

There are two ways we manage data in React: state and props. Props are immutable
(i.e. unchangeable) data passed in to a component. State is changeable (mutable)
data within a component. We'll get to state when we talk about class components
in a later lesson.

For now, think of props as arguments to a function: it's data that gets passed
into a function. The attribute syntax we see in `App.js` is how we pass data
into a component.

We can pass multiple properties to our component when it's rendered in
`src/App.js`:

```jsx
import Greetings from "./Greetings";

function App(props) {
    return <Greetings name={"Soleil"} age={25} />;
}

export default App;
```

Then in our component definition we have access to both values:

```jsx
function Greetings(props) {
    return (
    <h1>Hello {props.name}!</h1>
    <h2>I'm {props.age} years old!</h2>
    );
}

export default Greetings;
```

> **NOTE:** The return statement can only return one DOM element. You can,
> however, place multiple elements within a parent DOM element, like we do in
> the previous example with `<div>`.

## You Do: Props

Above the `return` in `Greetings`, add the following line of code:
`console.log(props)`

Your component should look like this now:

```jsx
function Greetings(props) {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}!</h1>
            <h2>I'm {props.age} years old!</h2>
        </div>
    )
}

export default Greetings;
```

Now, in `App.js` add some props and see them printed to the console.

As a bonus, write some JSX that will render the props you pass in!

### Use React Developer Tools

`console.logs` are useful, but in React it's better to use the [React Developer
Tools](https://react.dev/learn/react-developer-tools) in the inspector to see the props and state of a given element.

## You Do: A Blog Post

Let's get some practice creating a React component from scratch. How about a
blog post?

Create a `newPost` object in `App.js` above the `return` (but still within the App function) that has the below properties:

1. `title`
2. `author`
3. `body`
4. `comments` (array of strings)

- Create a file in `src` called `Post.jsx`.
- Create a `Post` component, and have it return a `<div>`.
- Import `Post` from `Post.jsx` in App, and pass it a prop of `title` with a value of `newPost.title`. Do this for each property of the `newPost` object.
- Render the `title` in an `<h1>`. (Remember your {}!)
- Render the `author` in a `<p>`.
- Render the `body` in a `<div>`.
- Create a `<ul>`, and render the first of the `comments` in a `<ul>`.

    <details>
    <summary>Solution</summary>

    In App.js:
    ```jsx
    <Post title={newPost.title} author={newPost.author} body={newPost.body} comments={newPost.comments} />
    ```

    In Post.jsx:
    ```jsx
    function Post(props) {
        return (
            <div>
                <h1>{props.title}</h1>
                <p>By: {props.author}</p>
                <div>{props.body}</div>
                <ul>
                    <li>{props.comments[0]}</li>
                </ul>
            </div>
        );
    }

    export default Post;
    ```

    </details>

## Nested Components

Defining all our markup within a single component would be a huge pain. Like
writing all our HTML in a single file is!

A core piece of the React philosphy is to break up the UI into many small
components and compose them together. You want to define components that are
small and reusable and nest them inside each other to build your UI.

### We Do: A Comment Component

Let's define a component for the comments that are being passed into `Post`.

Our `Comment` component will be defined inside of `src/Comment.jsx` and look like
this:

```jsx
function Comment(props) {
    return <li>{props.message}</li>;
}

export default Comment;
```

The last line of `Comment.jsx` is how we _export_ code from one file so that we
can _import_ it in another file.

We'll update our `Post` component to look like this:

```jsx
import Comment from "./Comment";

function Post(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>By: {props.author}</p>
            <div>{props.body}</div>
            <ul>
                <Comment message={props.comments[0]} />
                <Comment message={props.comments[1]} />
                <Comment message={props.comments[2]} />
            </ul>
        </div>
    );
}

export default Post;
```

The above code works, but as you can see we have hard-coded all of our
`Comments`. This is not very DRY.

There must be a better way!

Since `comments` (in App.js) is an array, we can use `.map` wherever we've
passed it down. The `.map` method can take an array of elements and turn each one into a piece of JSX or a React component. In this case, we'll `.map` through to create one `<Comment />` for each `comment`.

```jsx
import Comment from "./Comment";

function Post(props) {
    const comments = props.comments.map((comment, index) => (
        <Comment message={comment} key={index} />
    ));

    return (
        <div>
            <h1>{props.title}</h1>
            <p>By: {props.author}</p>
            <div>{props.body}</div>
            <ul>{comments}</ul>
        </div>
    );
}

export default Post;
```

However, it can be more convenient to run your .map() statement directly within the return, as opposed to assigning it to a variable:

```jsx
import Comment from "./Comment";

function Post(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>By: {props.author}</p>
            <div>{props.body}</div>
            <ul>
                {props.comments.map((comment, index) => (
                    <Comment message={comment} key={index} />
                ))}
            </ul>
        </div>
    );
}

export default Post;
```

## Closing

That's a very brief introduction to React, defining components with functions,
and passing in data with props.

## Additional Resources

### Destructuring the `props` Object

We have `props.something` throughout our JSX code. This can lead to a lot of
repetition, as it kind of already has for us. JavaScript provides a way for us
to cut down on that repetition through object destructuring.

#### Destructuring

Destructuring is exactly as the name suggests: _de_-structuring an object (as
in, breaking apart it's structure). For a simple object, it looks like this:

```js
// First, we define a simple object:
let person = {
    name: "Big Bird",
    age: 25,
};

// Then, we 'destructure' that object:
let { name, age } = person;

// Then, we print the values to the console:
console.log(name); // 'Big Bird'
console.log(age); // 25
```

In the above snippet, we're declaring variables that extract the values with the
same name from the `person` object. This part is really important: **the
variable(s) must have the same name as the key(s) in the object.**

#### Updating `Post`

Using destructuring, we can now update our `Post` component, to make the JSX a
little more legible:

```jsx
import Comment from "./Comment";

function Post(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>By: {props.author}</p>
            <div>{props.body}</div>
            <ul>
                {props.comments.map((comment, index) => (
                    <Comment message={comment} key={index} />
                ))}
            </ul>
        </div>
    );
}

export default Post;
```

> Note that we also moved `comments.map` inline, with the JSX. You'll see this
> pattern a lot (and use it a lot!).

#### Destructuring Object Parameters

Destructuring applys when an object is passed in as an argument to a function.
This is really powerful!

```js
// First, we define a simple object:
let person = {
    name: "Big Bird",
    age: 25,
};

// Then, we define a function that takes that `person` object:
function sayHello({ name, age }) {
    console.log(`Hello ${name}, how does it feel to be ${age} years old?`);
}

// Then, we execute `sayHello` passing in `person`:

sayHello(person); // 'Hello Big Bird, how does it feel to be 25 years old?'
```

If we apply this in our `Post` component, then it would look like this:

```jsx
import Comment from "./Comment";

function Post({ title, author, body, comments }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>By: {author}</p>
            <div>{body}</div>
            <ul>
                {comments.map((comment, index) => (
                    <Comment message={comment} key={index} />
                ))}
            </ul>
        </div>
    );
}

export default Post;
```

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
alternative licensing, please contact legal@ga.co.
