# eslint-plugin-max-chars-in-function
ESLint plugin that checks whether functions are too long

## Why

V8, the engine behind Node.js has an arbitrary threshold for function length, set at 600 characters, comments included, above which it doesn't optimize the function.

Example:
```
// Will be optimized
function a(a, b) {
    return a + b;
}

// Will not be optimized
function a(a, b) {
    // Too many characters in this function, mostly due to the comments
    // Too many characters in this function, mostly due to the comments
    // Too many characters in this function, mostly due to the comments
    // Too many characters in this function, mostly due to the comments
    // Too many characters in this function, mostly due to the comments
    // Too many characters in this function, mostly due to the comments
    // Too many characters in this function, mostly due to the comments
    // Too many characters in this function, mostly due to the comments
    // Too many characters in this function, mostly due to the comments
    return a + b;
}
```
It is also usually considered good practice to have shorter functions.

This rule is pretty much only useful for "code quality" (if you consider short functions to be good functions), and for back-end code, as front-end code usually gets minified, and thus usually gets under that threshold.

## How

Install [ESLint](https://github.com/eslint/eslint), globally or locally
```
$ npm install eslint
```

Install plugin via npm
```
$ npm install eslint-plugin-react
```

Add plugin and rules to your .eslintrc file.
Set the value for `max-chars-in-function/max-chars-in-func` to 1 if you want it to throw warnings, 2 if you want it to throw errors (and 0 to disable the rule, but then you don't need this plugin really).
```json
{
  "plugins": [
    "max-chars-in-function"
  ],
  "rules": {
    "max-chars-in-function/max-chars-in-func": 1
  }
}
```



If you want to ignore this rule in some of your files (example: mocha test files where the `describe` clauses are usually big and not really concerned for this rule), add this to your file
```
/*eslint-disable max-chars-in-function/max-chars-in-func */

function funcThatIsAllowedToBeTooLong() {
    // ...
}

// optionally re-enable the rule
/*eslint-enable max-chars-in-function/max-chars-in-func */

function funcThatMayGiveAWarningOrAnError() {
    // ...
}
```