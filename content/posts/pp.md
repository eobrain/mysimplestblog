---  
slug: pp
title: Making PP
created: 2020-05-27 07:00:00+00:00
---  
Oh yes, in an ideal world we would use a debugger to understand what our code is doing, but setting up a development environment to allow debugging can sometimes be tricky or annoying to do.

So often we resort to the venerable art of "printf debugging": adding judiciously placed print statements in our code.

In JavaScript this means simply adding `console.log` statements.

But if you are writing code in a functional style, it can sometimes mess up your code to add print statements.

For example imagine you have a bug in some code that looks like this ...

```js
const dotProd = (v1, v2) =>
  zip(v1, v2).map(pair => pair[0] * pair[1]).reduce((a, x) => a + x, 0)
```

...  and you want to inspect the value of `a + x` returned by the reducer.

To use console.log you would have to rewrite the reducer to this inelegant form:

```js
const dotProd = (v1, v2) =>
  zip(v1, v2).map(pair => pair[0] * pair[1]).reduce((a, x) => {
    const result = a + x
    console.log('Reducer returns', result)
    return result
  }, 0)
```

This really makes it inconvenient and error-prone to add these temporary logging statements, and to remove them when you're done.

So I published the `pp` function as a more elegant alternative.

To use it in Node JS,  install with

```sh
npm install passprint
```

and then import it into your JavaScript file like so:

```js
const { pp } = require('passprint')
```

and then you can do

```js
const dotProd = (v1, v2) =>
  zip(v1, v2).map(pair => pair[0] * pair[1]).reduce((a, x) => pp(a + x), 0)
```

Note the additional `pp(...)` near the end. This is much less ugly than using `console.log`.

This will log out lines that look something like:

```
|||||||||MyClass.myFunction myFile.js:46:63 22ms 78878
```

where `22ms` is the time elapsed since logging started and `78878` is the value of `a + x`.  The number of `|` characters shows the depth of the call stack.

The `pp` simply returns the value passed to it, so it can be used with minimal perturbation to your code.  It is easy to add and remove.

You don't need any extra disambiguating message with `pp` because the log messages include the function name, file name, and line number where it was invoked from.

More details in the [README on Github][1].

Feel free to give feedback [on Twitter][2] or by adding a [GitHub issue][3].

[1]: https://github.com/eobrain/passprint
[2]: https://twitter.com/eob
[3]: https://github.com/eobrain/passprint/issues/new
