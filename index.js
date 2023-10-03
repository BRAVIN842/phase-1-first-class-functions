function receivesAFunction(callback) {
    // Take a callback function as an argument
    // Call the callback function
    callback();
  }
  
  function returnsANamedFunction() {
    // Return a named function
    return function namedFunction() {
      // This is a named function
    };
  }
  
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function () {
      // This is an anonymous function
    };
  }
  