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
var reinterpretBoolean = require( '@stdlib/strided-base-reinterpret-boolean' );
var Uint8Array = require( '@stdlib/array-uint8' );
var BooleanArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof BooleanArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `copyWithin` method for copying a sequence of array elements within a boolean array', function test( t ) {
	t.strictEqual( hasOwnProp( BooleanArray.prototype, 'copyWithin' ), true, 'has property' );
	t.strictEqual( isFunction( BooleanArray.prototype.copyWithin ), true, 'has method' );
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
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.copyWithin.call( value, 3, 0 );
		};
	}
});

tape( 'the method throws an error if invoked with a `this` context which is not a boolean array instance (end)', function test( t ) {
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
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.copyWithin.call( value, 3, 0, 5 );
		};
	}
});

tape( 'the method copies a sequence of elements within an array', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( [ true, false, false, true, true, false, false, true ] );
	arr.copyWithin( 0, 5 );

	expected = new Uint8Array( [ 0, 0, 1, 1, 1, 0, 0, 1 ] );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (negative target)', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( [ true, false, false, true, true, false, false, true ] );
	arr.copyWithin( -arr.length, 5 );

	expected = new Uint8Array( [ 0, 0, 1, 1, 1, 0, 0, 1 ] );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (negative start)', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( [ true, false, false, true, true, false, false, true ] );
	arr.copyWithin( 0, -3 );

	expected = new Uint8Array( [ 0, 0, 1, 1, 1, 0, 0, 1 ] );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (end=length)', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( [ true, false, false, true, true, false, false, true ] );
	arr.copyWithin( 0, 5, arr.length );

	expected = new Uint8Array( [ 0, 0, 1, 1, 1, 0, 0, 1 ] );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (non-inclusive end)', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( [ true, false, false, true, true, false, false, true ] );
	arr.copyWithin( 2, 0, 4 );

	expected = new Uint8Array( [ 1, 0, 1, 0, 0, 1, 0, 1 ] );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (negative end)', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( [ true, false, false, true, true, false, false, true ] );
	arr.copyWithin( 2, 0, -4 );

	expected = new Uint8Array( [ 1, 0, 1, 0, 0, 1, 0, 1 ] );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (target >= length)', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( [ true, false, false, true, true, false, false, true ] );
	arr.copyWithin( arr.length, 5 );

	expected = new Uint8Array( [ 1, 0, 0, 1, 1, 0, 0, 1 ] );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within an array (target > start)', function test( t ) {
	var expected;
	var arr;

	arr = new BooleanArray( [ true, false, false, true, true, false, false, true ] );
	arr.copyWithin( 2, 0 );

	expected = new Uint8Array( [ 1, 0, 1, 0, 0, 1, 1, 0 ] );

	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );

	t.end();
});
