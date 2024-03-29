/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var randu = require( '@stdlib/random-base-randu' );
var pkg = require( './../package.json' ).name;
var moveProperty = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var obj1;
	var obj2;
	var out;
	var i;

	obj1 = {
		'A': 'beep',
		'B': 'boop'
	};
	obj2 = {
		'foo': 'bar',
		'c': randu()
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj2.c = randu();
		out = moveProperty( obj2, 'foo', obj1 );
		if ( typeof out !== 'boolean' ) {
			b.fail( 'should return an boolean' );
		}
		out = moveProperty( obj1, 'foo', obj2 );
	}
	b.toc();
	if ( typeof out !== 'boolean' ) {
		b.fail( 'should return an boolean' );
	}
	if ( typeof obj2.foo !== 'string' ) {
		b.fail( 'should move property back to source object' );
	}
	if ( obj1.foo ) {
		b.fail( 'should delete property' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
