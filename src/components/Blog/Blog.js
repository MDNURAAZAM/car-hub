import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="row mx-auto mt-5">
        <div className="col-12">
          <h2 className="text-primary mb-3  text-center">
            How will you improve the performance of a React Application?
          </h2>
          <p className="text-justify">
            Use React.Fragment to Avoid Adding Extra Nodes to the DOM.Use
            Production Build.Use React.Suspense and React.Lazy for Lazy Loading
            Components.Use React.memo for Component Memoization.Virtualize a
            Large List Using react-window
          </p>
        </div>
        <div className="col-12 mt-3">
          <h2 className="text-primary mb-3 text-center">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            Redux was created to resolve this particular issue. it provides a
            central store that holds all states of your application. Each
            component can access the stored state without sending it from one
            component to another. Here is a simple view of how Redux works.These
            are functions that hook you into React state and features from
            function components. Hooks don't work inside classes and it allows
            you to use React features without writing a class. Hooks are
            backwards-compatible, which means it doesn't keep any breaking
            changes. React provides some built-in Hooks like useState, UseEffect
            and useReducer etc. You can also make custom hooks.
          </p>
        </div>
        <div className="col-12 mt-3">
          <h2 className="text-primary mb-3 text-center">
            How does prototypical inheritance work?
          </h2>
          <p>
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </p>
        </div>
        <div className="col-12 mt-3">
          <h2 className="text-primary mb-3 text-center">
            What is a unit test? Why should write unit tests?
          </h2>
          <p>
            A unit test is a way of testing a unit - the smallest piece of code
            that can be logically isolated in a system. In most programming
            languages, that is a function, a subroutine, a method or property.
            The isolated part of the definition is important. In his book
            "Working Effectively with Legacy Code", author Michael Feathers
            states that such tests are not unit tests when they rely on external
            systems: “If it talks to the database, it talks across the network,
            it touches the file system, it requires system configuration, or it
            can't be run at the same time as any other test." Modern versions of
            unit testing can be found in frameworks like JUnit, or testing tools
            like TestComplete. Look a little further and you will find SUnit,
            the mother of all unit testing frameworks created by Kent Beck, and
            a reference in chapter 5 of The Art of Software Testing . Before
            that, it's mostly a mystery. I asked Jerry Weinberg about his
            experiences with unit testing -- "We did unit testing in 1956. As
            far as I knew, it was always done, as long as there were computers".
          </p>
        </div>
        <div className="col-12 mt-3">
          <h2 className="text-primary mb-3 text-center">
            Why you do not set the state directly in React.
          </h2>
          <p>
            If you update it directly, calling the setState() afterward may just
            replace the update you made. When you directly update the state, it
            does not change this.state immediately. Instead, it creates a
            pending state transition, and accessing it after calling this method
            will only return the present value. You will lose control of the
            state across all components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
