<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Move Property

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Move a property from one object to another object.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-move-property
```

</section>

<section class="usage">

## Usage

```javascript
var moveProperty = require( '@stdlib/utils-move-property' );
```

#### moveProperty( source, prop, target )

Moves a property from one `object` to another `object`.

```javascript
var obj1 = {
    'a': 'b'
};
var obj2 = {};

var bool = moveProperty( obj1, 'a', obj2 );
// returns true
```

If the operation is successful, the function returns `true`; otherwise, `false`.

```javascript
var obj1 = {
    'a': 'b'
};
var obj2 = {};

var bool = moveProperty( obj1, 'c', obj2 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A transfer is **shallow**.

    ```javascript
    var arr = [ 1, 2, 3 ];

    var obj1 = {
        'a': arr
    };
    var obj2 = {};

    var bool = moveProperty( obj1, 'a', obj2 );
    console.log( obj2.a === arr );
    // => true
    ```

-   The property is **deleted** from the _source_ `object`.

-   The property's descriptor **is** preserved during transfer.

-   If a _source_ property is **not** `configurable`, the function throws an `Error`, as the property **cannot** be deleted from the _source_ `object`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var moveProperty = require( '@stdlib/utils-move-property' );

var obj1 = {
    'beep': 'boop'
};

var obj2 = {
    'foo': 'bar'
};

var bool = moveProperty( obj1, 'beep', obj2 );
if ( bool === false ) {
    console.log( 'failed to move property' );
}
console.dir( obj1 );
/* =>
    {}
*/
console.dir( obj2 );
/* =>
    {
        'foo': 'bar',
        'beep': 'boop'
    }
*/
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-move-property.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-move-property

[test-image]: https://github.com/stdlib-js/utils-move-property/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-move-property/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-move-property/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-move-property?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-move-property
[dependencies-url]: https://david-dm.org/stdlib-js/utils-move-property/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-move-property/main/LICENSE

</section>

<!-- /.links -->
