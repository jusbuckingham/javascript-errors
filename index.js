// EvalError
try {
    throw new EvalError('Hello', 'someFile.js', 10);
} catch (e) {
    console.log(e instanceof EvalError);  // true
    console.log(e.message);  // "Hello"
    console.log(e.name);  // "EvalError"
    console.log(e.filename);   // "somefile.js"
    console.log(e.lineNumber)  // 10
    console.log(e.columnNumber);  // 0
    console.log(e.stack);  // "@scratchpad/2:2:9\n"
}

// RangeError (for numberic values)
function check(n) {
    if (!(n >= -500 && n <= 500)) {
        throw new RangeError("The argument must be between -500 and 500.")
    }
}

try {
    check(2000)
}
catch (error) {
    if (error instanceof RangeError) {
        // Handle the error
    }
}

// RangeError (for non-numeric values)
function check(value) {
    if (["apple", "banana", "carrot"].includes(value) === false) {
        throw new RangeError('The argument must be an "apple", "banana", or "carrot".')
    }
}

try {
    check('cabbage')
}
catch (error) {
    if (error instanceof RangeError) {
        // Handle the error
    }
}

// Catching a ReferenceError
try {
    let a = undefinedVariable
} catch (e) {
    console.log(e instanceof ReferenceError)  // true
    console.log(e.message)  // "undefinedVariable is not defined"
    console.log(e.name)  // "ReferenceError"
    console.log(e.filename)  // "Scratchpad/1"
    console.log(e.lineNumber)  // 2
    console.log(e.columnNumber)  // 6
    console.log(e.stack)  // "@Scratchpad/2:2:7\n"
}

// Creating a ReferenceError
try {
    throw new ReferenceError('Hello', 'someFile.js', 10)
} catch (e) {
    console.log(e instanceof ReferenceError)  // true
    console.log(e.message)  // "Hello"
    console.log(e.name)  // "ReferenceError"
    console.log(e.filename)  // 10
    console.log(e.columnNumber)  // 0
    console.log(e.stack)  // "@Scratchpad/2:2:9\n"
}

// Catching a SyntaxError
try {
    eval('hoo bar');
} catch (e) {
    console.error(e instanceof SyntaxError);
    console.error(e.message);
    console.error(e.name);
    console.error(e.filename);
    console.error(e.lineNumber);
    console.error(e.columnNumber);
    console.error(e.stack);
}

// Creating a SyntaxError
try {
    throw new SyntaxError('Hello', 'someFile.js', 10);
} catch (e) {
    console.error(e instanceof SyntaxError);  // true
    console.error(e.message); // Hello
    console.error(e.name); // SyntaxError
    console.error(e.filename);  // someFile.js
    console.error(e.lineNumber);  // 10
    console.error(e.columnNumber);  // 0
    console.error(e.stack);  // @debugger eva; code:3:9
}

// Catching a TypeError
try {
    null.f()
} catch (e) {
    console.log(e instanceof TypeError)  // true
    console.log(e.message)  // "TypeError"
    console.log(e.name)  // "TypeError"
    console.log(e.filename)  // "Scratchpad/1"
    console.log(e.lineNumber)  // 2
    console.log(e.columnNumber)  // 2
    console.log(e.stack)  // "@Scratchpad/2:2:3\n"
}

// Creating a TypeError
try {
    throw new TypeError('Hello', "someFile.js", 10)
} catch (e) {
    console.log(e instanceof TypeError)  // true
    console.log(e.message)  // "Hello"
    console.log(e.name)  // "TypeError"
    console.log(e.filename)  // "someFile.js"
    console.log(e.lineNumber)  // 10
    console.log(e.columnNumber)  // 0
    console.log(e.stack)  // "@Scratchpad/2:2:9\n"
}

// Catching an URIError
try {
    decodeURIComponent('%')
} catch (e) {
    console.log(e instanceof URIError)  // true
    console.log(e.message)  // "malformed URI sequence"
    console.log(e.name)  // "URIError"
    console.log(e.filename)  // "Scratchpad/1"
    console.log(e.lineNumber)  // 2
    console.log(e.columnNumber)  // 2
    console.log(e.stack)  // "@Scratch[ad/2:2:3\n"
}

// Creating an URIError

try {
    throw new URIError('Hello', 'someFile.js', 10)
} catch (e) {
    console.log(e instanceof URIError)  // true
    console.log(e.message)  // "Hello"
    console.log(e.name)  // "URIError"
    console.log(e.filename)  // "someFile.js"
    console.log(e.lineNumber)  // 10
    console.log(e.columnNumber)  // 0
    console.log(e.stack)  // "@Scratchpad/2:2:9\n"
}

// Catching an AggregateError
Promise.any([
    Promise.reject(new Error('some error')),
]).catch(e => {
    console.log(e instanceof AggregateError);  // true
    console.log(e.message);  // "All Promises rejected"
    console.log(e.name);  // "AggregateError"
    console.log(e.errors);  // [ Error: "some error" ]
});

// Creating an AggregateError
try {
    throw new AggregateError([
        new Error("some error"),
    ]), 'Hello';
} catch (e) {
    console.log(e instanceof AggregateError); // true
    console.log(e.message);  // "Hello"
    console.log(e.name);  //"AggregateError"
    console.log(e.errors);  // [ Error: "some error" ]
}

// Creating an Aggregate Error
try {
    throw new AggregateError([
        new Error("some error"),
    ], 'Hello');
} catch (e) {
    console.log(e instanceof AggregateError);  // true
    console.log(e.message);  // "Hello"
    console.log(e.name);  // "AggregateError"
    console.log(e.errors);  //  [ Error: some error" ]
}

// Creating a new InternalError
new InternalError("Engine failure");