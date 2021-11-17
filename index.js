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
