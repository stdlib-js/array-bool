<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# BooleanArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Boolean array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import BooleanArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-bool@esm/index.mjs';
```

<a name="constructor"></a>

#### BooleanArray()

Creates a boolean array.

```javascript
var arr = new BooleanArray();
// returns <BooleanArray>
```

#### BooleanArray( length )

Creates a boolean array having a specified `length`.

```javascript
var arr = new BooleanArray( 10 );
// returns <BooleanArray>

var len = arr.length;
// returns 10
```

#### BooleanArray( booleanarray )

Creates a boolean array from another boolean array.

```javascript
var arr1 = new BooleanArray( [ true, false, false, true ] );
// returns <BooleanArray>

var arr2 = new BooleanArray( arr1 );
// returns <BooleanArray>

var len = arr2.length;
// returns 4
```

#### BooleanArray( typedarray )

Creates a boolean array from a [typed array][@stdlib/array/typed].

```javascript
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';

var buf = new Uint8Array( [ 1, 0, 0, 1 ] );
// returns <Uint8Array>[ 1, 0, 0, 1 ]

var arr = new BooleanArray( buf );
// returns <BooleanArray>

var len = arr.length;
// returns 4
```

#### BooleanArray( obj )

Creates a boolean array from an array-like object or iterable.

```javascript
// From an array of booleans:
var arr1 = new BooleanArray( [ true, false, false, true ] );
// returns <BooleanArray>

var len = arr1.length;
// returns 4

// From an array containing non-booleans:
var arr2 = new BooleanArray( [ {}, null, '', 4 ] );

len = arr2.length;
// returns 4
```

#### BooleanArray( buffer\[, byteOffset\[, length]] )

Returns a boolean array view of an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
var buf = new ArrayBuffer( 240 );

var arr1 = new BooleanArray( buf );
// returns <BooleanArray>

var len = arr1.length;
// returns 240

var arr2 = new BooleanArray( buf, 8 );
// returns <BooleanArray>

len = arr2.length;
// returns 232

var arr3 = new BooleanArray( buf, 8, 20 );
// returns <BooleanArray>

len = arr3.length;
// returns 20
```

* * *

### Properties

<a name="static-prop-bytes-per-element"></a>

#### BooleanArray.BYTES_PER_ELEMENT

Static property returning the size (in bytes) of each array element.

```javascript
var nbytes = BooleanArray.BYTES_PER_ELEMENT;
// returns 1
```

<a name="static-prop-name"></a>

#### BooleanArray.name

Static property returning the constructor name.

```javascript
var str = BooleanArray.name;
// returns 'BooleanArray'
```

<a name="prop-buffer"></a>

#### BooleanArray.prototype.buffer

Pointer to the underlying data buffer.

```javascript
var arr = new BooleanArray( 2 );
// returns <BooleanArray>

var buf = arr.buffer;
// returns <ArrayBuffer>
```

<a name="prop-byte-length"></a>

#### BooleanArray.prototype.byteLength

Size (in bytes) of the array.

```javascript
var arr = new BooleanArray( 10 );
// returns <BooleanArray>

var nbytes = arr.byteLength;
// returns 10
```

<a name="prop-byte-offset"></a>

#### BooleanArray.prototype.byteOffset

Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';

var arr = new BooleanArray( 10 );
// returns <BooleanArray>

var offset = arr.byteOffset;
// returns 0

var buf = new ArrayBuffer( 240 );
arr = new BooleanArray( buf, 64 );
// returns <BooleanArray>

offset = arr.byteOffset;
// returns 64
```

<a name="prop-bytes-per-element"></a>

#### BooleanArray.prototype.BYTES_PER_ELEMENT

Size (in bytes) of each array element.

```javascript
var arr = new BooleanArray( 10 );
// returns <BooleanArray>

var nbytes = arr.BYTES_PER_ELEMENT;
// returns 1
```

<a name="prop-length"></a>

#### BooleanArray.prototype.length

Number of array elements.

```javascript
var arr = new BooleanArray( 10 );
// returns <BooleanArray>

var len = arr.length;
// returns 10
```

* * *

### Methods

<a name="static-method-from"></a>

#### BooleanArray.from( src\[, clbk\[, thisArg]] )

Creates a new boolean array from an array-like object or an iterable.

```javascript
var arr = BooleanArray.from( [ true, false ] );
// returns <BooleanArray>

var len = arr.length;
// returns 2
```

To invoke a function for each `src` value, provide a callback function.

```javascript
function map( v ) {
    return !v;
}

// Create a source array:
var src = [ true, false ];

// Create a new boolean array by inverting the source array:
var arr = BooleanArray.from( src, map );
// returns <BooleanArray>

var len = arr.length;
// returns 2

var v = arr.get( 0 );
// returns false

v = arr.get( 1 );
// returns true
```

A callback function is provided two arguments:

-   **value**: source value.
-   **index**: source index.

To set the callback execution context, provide a `thisArg`.

```javascript
function map( v ) {
    this.count += 1;
    return !v;
}

// Create a source array:
var src = [ true, false ];

// Define an execution context:
var ctx = {
    'count': 0
};

// Create a new boolean array by inverting the source array:
var arr = BooleanArray.from( src, map, ctx );
// returns <BooleanArray>

var len = arr.length;
// returns 2

var n = ctx.count;
// returns 2
```

<a name="static-method-of"></a>

#### BooleanArray.of( element0\[, element1\[, ...elementN]] )

Creates a new boolean array from a variable number of arguments.

```javascript
var arr = BooleanArray.of( true, false, false, true );
// returns <BooleanArray>

var len = arr.length;
// returns 4
```

<a name="method-get"></a>

#### BooleanArray.prototype.get( i )

Returns an array element located at a nonnegative integer position (index) `i`.

```javascript
var arr = new BooleanArray( 10 );

// Set the first element:
arr.set( true, 0 );

// Get the first element:
var v = arr.get( 0 );
// returns true
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var arr = new BooleanArray( 10 );

var v = arr.get( 100 );
// returns undefined
```

<a name="method-map"></a>

#### BooleanArray.prototype.map( callbackFn\[, thisArg] )

Returns a new array with each element being the result of a provided callback function.

```javascript
function invert( v ) {
    return !v;
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var out = arr.map( invert );
// returns <BooleanArray>

var z = out.get( 0 );
// returns false

z = out.get( 1 );
// returns true

z = out.get( 2 );
// returns false
```

The callback function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function invert( v, i ) {
    this.count += i;
    return !v;
}

var arr = new BooleanArray( 3 );

var context = {
    'count': 0
};

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

var out = arr.map( invert, context );
// returns <BooleanArray>

var count = context.count;
// returns 3;
```

<a name="method-set"></a>

#### BooleanArray.prototype.set( v\[, i] )

Sets one or more array elements.

```javascript
var arr = new BooleanArray( 10 );

// Get the first element:
var v = arr.get( 0 );
// returns false

// Set the first element:
arr.set( true );

// Get the first element:
v = arr.get( 0 );
// returns true
```

By default, the method sets array elements starting at position (index) `i = 0`. To set elements starting elsewhere in the array, provide an index argument `i`.

```javascript
var arr = new BooleanArray( 10 );

// Get the fifth element:
var v = arr.get( 4 );
// returns false

// Set the fifth element:
arr.set( true, 4 );

// Get the fifth element:
v = arr.get( 4 );
// returns true
```

In addition to providing a single value, to set one or more array elements, provide an array-like object containing truthy and falsy values

```javascript
var arr = new BooleanArray( 10 );

// Define an array of values:
var buf = [ '', 1, null ];

// Set the fifth, sixth, and seventh elements:
arr.set( buf, 4 );

// Get the sixth element:
var v = arr.get( 5 );
// returns true
```

A few notes:

-   If `i` is out-of-bounds, the method throws an error.
-   If a target array cannot accommodate all values (i.e., the length of source array plus `i` exceeds the target array length), the method throws an error.
-   If provided a [typed array][@stdlib/array/typed] which shares an [`ArrayBuffer`][@stdlib/array/buffer] with the target array, the method will intelligently copy the source range to the destination range.

<a name="method-sort"></a>

#### BooleanArray.prototype.sort( \[compareFcn] )

Sorts an array in-place.

```javascript
function compare( a, b ) {
    if ( a === false ) {
        if ( b === false ) {
            return 0;
        }
        return 1;
    }
    if ( b === true ) {
        return 0;
    }
    return -1;
}

var arr = new BooleanArray( 3 );

arr.set( true, 0 );
arr.set( false, 1 );
arr.set( true, 2 );

arr.sort( compare );

var v = arr.get( 0 );
// returns true

v = arr.get( 1 );
// returns true

v = arr.get( 2 );
// returns false
```

The `compareFcn` determines the order of the elements. The function is called with the following arguments:

-   **a**: the first boolean value for comparison.
-   **b**: the second boolean value for comparison.

The function should return a number where:

-   a negative value indicates that `a` should come before `b`.
-   a positive value indicates that `a` should come after `b`.
-   zero or `NaN` indicates that `a` and `b` are considered equal.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   While a `BooleanArray` _strives_ to maintain (but does not **guarantee**) consistency with [typed arrays][@stdlib/array/typed], significant deviations from ECMAScript-defined [typed array][@stdlib/array/typed] behavior are as follows:

    -   The constructor does **not** require the `new` operator.
    -   Accessing array elements using bracket syntax (e.g., `X[i]`) is **not** supported. Instead, one **must** use the `.get()` method.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@esm/index.mjs';
import BooleanArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-bool@esm/index.mjs';

// Create a boolean array by specifying a length:
var out = new BooleanArray( 3 );
logEach( '%s', out );

// Create a boolean array from an array of booleans:
var arr = [ true, false, true ];
out = new BooleanArray( arr );
logEach( '%s', out );

// Create a boolean array from an array buffer:
arr = new Uint8Array( [ 1, 0, 1, 1, 0, 1 ] );
out = new BooleanArray( arr.buffer );
logEach( '%s', out );

// Create a boolean array from an array buffer view:
arr = new Uint8Array( [ 1, 0, 1, 1, 0, 1 ] );
out = new BooleanArray( arr.buffer, 1, 2 );
logEach( '%s', out );

console.log( '%s', false );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-bool.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-bool

[test-image]: https://github.com/stdlib-js/array-bool/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-bool/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-bool/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-bool?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-bool.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-bool/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-bool/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-bool/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-bool/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-bool/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-bool/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-bool/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-bool/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-bool/main/LICENSE

[@stdlib/array/typed]: https://github.com/stdlib-js/array-typed/tree/esm

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer/tree/esm

</section>

<!-- /.links -->
