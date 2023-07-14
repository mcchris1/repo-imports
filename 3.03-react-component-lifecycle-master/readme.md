[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# The Component Life Cycle

So far, we've used React components to build simple applications. We've added
state and props and controlled data flow through them using just the `render`
and `setState` methods. In order to do more complex things, we'll have to use
lifecycle methods.

## Prerequisites

- React
- Components
- State and Props

## Objectives

By the end of this, developers should be able to:

- Explain how to use React's lifecycle methods
- Use asynchronous functions within React
- Retrieve data from an API inside of a component

## Introduction (5 min / 0:10)

How do we get data from an API? Well we could drop in an AJAX call to fetch some
data, but our component would likely render before the AJAX request finished.
Our component would see that our data is `undefined` and either render a
blank/empty component or throw an error.

How do we incorporate third party libraries like `fetch` with React?
It sounds complicated... Do we put that in render?

This lesson will introduce the Component Lifecycle: hooks that are fired at
different stages of a component's "life" for solving the problems described
above, as well as many others.

So, what is the Component Lifecycle?

## The Component Life Cycle

### The Life Cycle Methods (10 min / 0:20)

When we create a react component we get a couple of lifecycle methods included
that we can use to add functionality to our components. These methods are
invoked at specific periods during the "life" of a component, like when it
mounts to the DOM or unmounts from the DOM. While there are a lot of lifecycle
methods, there are only a few that you will use regularly.

The **bold** methods are the most commonly used ones and the ones we'll focus
on for this lesson

There are three types of component lifecycle methods:

**Mounting:** called when a component is created and inserted into the DOM.

- **`constructor()`**
- `getDerivedStateFromProps()`
- **`render()`**
- **`componentDidMount()`**

**Updating:** usually triggered by changes in props or state.

- `getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- **`render()`**
- `getSnapshotBeforeUpdate()`
- **`componentDidUpdate()`**

**Unmounting:** called when a component is being removed from the DOM.

- **`componentWillUnmount()`**

> Review the documentation on
> [The Component Life Cycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle).

> Review
> [this handy cheat sheet](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
> for a visual explanation of these life cycle methods and when they get invoked.

## I Do: Exploring the Lifecycle Methods (10 min / 0:30)

Clone down
[this repository](https://git.generalassemb.ly/sei-embers/component-lifecycle-exercise)
with a short exercise for exploring the life cycle methods.

This exercise is a simple, 2 "page" website where each page is a component.
We'll be adding the component life cycle methods to each page-component. As we
do, consider the following questions:

- What order are the methods run in? Before or after rendering?
- How many times is the method invoked?
- What causes the method to be (re)invoked?

> Add the mounting methods to HomePage.js and the update methods to
> AboutPage.js. `console.log` something in each method to understand the order.

## Requesting Data from an API (30 min / 1:00)

Now that we've reviewed the component lifecycle methods, let's dive in to what
we use them for. The most common is requesting data from an API.

### We Do: [Country List](https://git.generalassemb.ly/sei-buffleheads/react-country-list)

Clone down
[this repository](https://git.generalassemb.ly/sei-buffleheads/react-country-list)
which has some exercises on how to make AJAX requests using `fetch()` inside of
a component.

## Review Questions

- What is the component lifecycle? What are the lifecycle methods?
- What are the commonly used lifecycle methods?
- What do we use these methods for?

## Additional Resources

- [React Docs: The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
- [React Docs: Commonly Used Lifecycle Methods](https://reactjs.org/docs/react-component.html#commonly-used-lifecycle-methods)
- [React Docs: AJAX and APIs](https://reactjs.org/docs/faq-ajax.html)
- [React Docs: Working with Other Libraries](https://reactjs.org/docs/integrating-with-other-libraries.html)
- [Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
