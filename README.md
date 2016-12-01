# undecorate-codemod [![Build Status](https://travis-ci.org/tizmagik/undecorate-codemod.svg)](https://travis-ci.org/tizmagik/undecorate-codemod)

A small codemod to "undecorate" Class Declarations that have [decorators](https://github.com/wycats/javascript-decorators), for use with [JSCodeshift](https://github.com/facebook/jscodeshift).

## Why?

For more on why this was created, see blog post TK TK

## Setup & Run

  * `npm install -g jscodeshift`
  * `git clone https://github.com/tizmagik/undecorate-codemod.git`
  * Run `npm install` in the undecorate-codemod directory (or, `yarn`)
  * `jscodeshift -t undecorate-codemod/transforms/undecorate.js <path>`
  * Use the `-d` option for a dry-run and use `-p` to print the output
    for comparison

## What's Supported

This codemod undecorates Class Declarations, for any number of decorators and works whether or not the class is a named export, default export or not exported at all. For example:

#### Example input:

```js
@withParam('myParam')
@noParam
@taggedTemplate`my tagged template string`
class MyClass { }
```

#### Converts to:

```js
const MyClass = withParam('myParam')(noParam(taggedTemplate`my tagged template string`(class MyClass { })));
```

## Things to be aware of

- Only supports [Class Declaration](https://github.com/wycats/javascript-decorators#class-declaration) decorators. It does not (yet?) support Class Property decorators.
- It does not "desugar" exactly according to the spec, instead it "undecorates". The difference being it tries to convert the code to what you probably would have written by hand if decorators weren't available (and you weren't using a currying library).

### Credit & Thanks

- [react-codemod](https://github.com/reactjs/react-codemod) - For examples and where this repo structure is based off of.
- [ASTExplorer](https://astexplorer.net) - For an excellent playground.
