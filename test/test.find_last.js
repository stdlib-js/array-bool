/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var tape = require( 'tape' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isFunction = require( '@stdlib/assert-is-function' );
var BooleanArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof BooleanArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `findLast` method', function test( t ) {
	t.strictEqual( hasOwnProp( BooleanArray.prototype, 'findLast' ), true, 'has property' );
	t.strictEqual( isFunction( BooleanArray.prototype.findLast ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a boolean array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 5 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.findLast.call( value, predicate );
		};
	}

	function predicate( v ) {
		return ( v === false );
	}
});

tape( 'the method throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 10 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.findLast( value );
		};
	}
});

tape( 'the method returns `undefined` if operating on an empty boolean array', function test( t ) {
	var arr;
	var v;

	arr = new BooleanArray();
	v = arr.findLast( predicate );

	t.strictEqual( v, void 0, 'returns expected value' );
	t.end();

	function predicate() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'the method returns the last element which passes a test', function test( t ) {
	var arr;
	var v;

	arr = new BooleanArray( [ true, false, false, true, true, false ] );
	v = arr.findLast( predicate );

	t.strictEqual( v, false, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return ( v === false );
	}
});

tape( 'the method returns `undefined` if all elements fail a test', function test( t ) {
	var arr;
	var v;

	arr = new BooleanArray( [ true, true, true, true, true ] );
	v = arr.findLast( predicate );

	t.strictEqual( v, void 0, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return ( v === false );
	}
});

tape( 'the method supports providing an execution context', function test( t ) {
	var ctx;
	var arr;
	var v;

	ctx = {
		'count': 0
	};
	arr = new BooleanArray( [ true, true, false, true, false ] );
	v = arr.findLast( predicate, ctx );

	t.strictEqual( v, true, 'returns expected value' );
	t.strictEqual( ctx.count, 2, 'returns expected value' );

	t.end();

	function predicate( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( v === true );
	}
});
