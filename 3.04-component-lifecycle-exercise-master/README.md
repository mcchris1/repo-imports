# Component Lifecycle Methods

This is a short exercise for exploring React's component lifecycle methods.

## Instructions

1. Fork and clone this repository into your sandbox directory.
1. Change into the new directory with `cd component-lifecycle-methods`.
1. Install dependencies by typing `npm install`.
1. Open the directory in VS Code with `code .`.
1. Back in the Terminal, type `npm run start` to run your development server.

## Mounting Lifecycle Methods

First, add the mounting lifecycle methods to the `Home` component. The mounting
lifecycle methods are:

- `constructor()`
- `render()`
- `componentDidMount()`
- `componentWillUnmount()`

In each method, console log the name of the component and the name of the method
being called, such as: `console.log('Home: constructor');`.

## Updating Lifecycle Methods

Second, add the updating lifecycle methods to the `Counter` component. The
updating lifecycle methods are:

- `shouldComponentUpdate()`
- `render()`
- `componentDidUpdate()`

In each method, console log the name of the component and the name of the method
being called, such as: `console.log('Counter: componentDidUpdate');`.

## Observing!

Once all the methods are added, click the `+` and `-` buttons and watch what
happens in your console!
