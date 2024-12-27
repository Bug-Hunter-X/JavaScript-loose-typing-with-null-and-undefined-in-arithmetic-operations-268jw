# JavaScript Loose Typing and Arithmetic Operations with null and undefined

This example demonstrates an uncommon yet important aspect of JavaScript's loose typing system: how it handles arithmetic operations involving `null` and `undefined`.

The `foo` function simply adds two numbers. However, the behavior when passing `null` or `undefined` as arguments is not always intuitive.  `null` behaves differently than `undefined` in this context.

## Bug

The bug lies in the unexpected behavior when mixing numbers with `null` and `undefined` in the addition operation. This inconsistency can lead to unexpected results in your code.

## Solution

The solution involves explicit type checking and handling using conditional statements or optional chaining to ensure that you are only performing arithmetic operations on valid numeric values.  Alternatively, you can use a library that supports stricter type handling.