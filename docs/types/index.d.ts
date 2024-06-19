/* eslint-disable max-lines */

/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';
import { ArrayLike, BooleanArray as BooleanArrayInterface } from '@stdlib/types/array';
import ArrayBuffer = require( '@stdlib/array-buffer' );

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Callback invoked for each element in a source object.
*
* @returns transformed value
*/
type FromNullary<U> = ( this: U ) => boolean;

/**
* Callback invoked for each element in a source object.
*
* @param value - source element
* @returns transformed value
*/
type FromUnary<U> = ( this: U, value: boolean ) => boolean;

/**
* Callback invoked for each element in a source object.
*
* @param value - source element
* @param index - source element index
* @returns transformed value
*/
type FromBinary<U> = ( this: U, value: boolean, index: number ) => boolean;

/**
* Callback invoked for each element in a source object.
*
* @param value - source element
* @param index - source element index
* @returns transformed value
*/
type FromCallback<U> = FromNullary<U> | FromUnary<U> | FromBinary<U>;

/**
* Checks whether an element in an array passes a test.
*
* @returns boolean indicating whether an element in an array passes a test
*/
type NullaryPredicate<U> = ( this: U ) => boolean;

/**
* Checks whether an element in an array passes a test.
*
* @param value - current array element
* @returns boolean indicating whether an element in an array passes a test
*/
type UnaryPredicate<U> = ( this: U, value: boolean ) => boolean;

/**
* Checks whether an element in an array passes a test.
*
* @param value - current array element
* @param index - current array element index
* @returns boolean indicating whether an element in an array passes a test
*/
type BinaryPredicate<U> = ( this: U, value: boolean, index: number ) => boolean;

/**
* Checks whether an element in an array passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns boolean indicating whether an element in an array passes a test
*/
type TernaryPredicate<U> = ( this: U, value: boolean, index: number, arr: BooleanArray ) => boolean;

/**
* Checks whether an element in an array passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns boolean indicating whether an element in an array passes a test
*/
type Predicate<U> = NullaryPredicate<U> | UnaryPredicate<U> | BinaryPredicate<U> | TernaryPredicate<U>;

/**
* Callback invoked for each element in an array.
*
* @returns returned value
*/
type NullaryMapFcn<U> = ( this: U ) => any;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @returns returned value
*/
type UnaryMapFcn<U> = ( this: U, value: boolean ) => any;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @returns returned value
*/
type BinaryMapFcn<U> = ( this: U, value: boolean, index: number ) => any;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns returned value
*/
type TernaryMapFcn<U> = ( this: U, value: boolean, index: number, arr: BooleanArray ) => any;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns returned value
*/
type MapFcn<U> = NullaryMapFcn<U> | UnaryMapFcn<U> | BinaryMapFcn<U> | TernaryMapFcn<U>;

/**
* Comparator function.
*
* @param a - first boolean value for comparison
* @param b - second boolean value for comparison
* @returns number indicating comparison result
*/
type CompareFcn = ( a: boolean, b: boolean ) => number;

/**
* Class for creating a Boolean array.
*/
declare class BooleanArray implements BooleanArrayInterface {
	/**
	* Boolean array constructor.
	*
	* @param arg - length, typed array, array-like object, or buffer
	* @param byteOffset - byte offset (default: 0)
	* @param length - view length
	* @throws if provided only a single argument, must provide a valid argument
	* @throws byte offset must be a nonnegative integer
	* @throws must provide sufficient memory to accommodate byte offset and view length requirements
	* @returns boolean array
	*
	* @example
	* var arr = new BooleanArray();
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new BooleanArray( 2 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new BooleanArray( [ true, false ] );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array-buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new BooleanArray( buf );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 16
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array-buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new BooleanArray( buf, 8 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 8
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array-buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new BooleanArray( buf, 8, 2 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*/
	constructor( arg?: number | ArrayLike<any> | ArrayBuffer | Iterable<any>, byteOffset?: number, length?: number );

	/**
	* Length (in bytes) of the array.
	*
	* @example
	* var arr = new BooleanArray( 10 );
	*
	* var byteLength = arr.byteLength;
	* // returns 10
	*/
	readonly byteLength: number;

	/**
	* Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.
	*
	* @example
	* var arr = new BooleanArray( 10 );
	*
	* var byteOffset = arr.byteOffset;
	* // returns 0
	*/
	readonly byteOffset: number;

	/**
	* Size (in bytes) of each array element.
	*
	* @example
	* var arr = new BooleanArray( 10 );
	*
	* var nbytes = arr.BYTES_PER_ELEMENT;
	* // returns 1
	*/
	readonly BYTES_PER_ELEMENT: 1;

	/**
	* Number of array elements.
	*
	* @example
	* var arr = new BooleanArray( 10 );
	*
	* var len = arr.length;
	* // returns 10
	*/
	readonly length: number;

	/**
	* Returns the first element in an array for which a predicate function returns a truthy value.
	*
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns array element or undefined
	*
	* @example
	* function predicate( v ) {
	*     return v === true;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var v = arr.find( predicate );
	* // returns true
	*/
	find<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): boolean | void;

	/**
	* Returns the index of the first element in an array for which a predicate function returns a truthy value.
	*
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns array index or -1
	*
	* @example
	* function predicate( v ) {
	*     return v === true;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var v = arr.findIndex( predicate );
	* // returns 0
	*/
	findIndex<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): number;

	/**
	* Returns the last element in an array for which a predicate function returns a truthy value.
	*
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns array element or undefined
	*
	* @example
	* function predicate( v ) {
	*     return v === true;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var v = arr.findLast( predicate );
	* // returns true
	*/
	findLast<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): boolean | void;

	/**
	* Returns the index of the last element in an array for which a predicate function returns a truthy value.
	*
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns array index or -1
	*
	* @example
	* function predicate( v ) {
	*     return v === true;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var v = arr.findLastIndex( predicate );
	* // returns 2
	*/
	findLastIndex<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): number;

	/**
	* Returns an array element.
	*
	* @param i - element index
	* @throws index argument must be a nonnegative integer
	* @returns array element
	*
	* @example
	* var arr = new BooleanArray( 10 );
	*
	* var v = arr.get( 0 );
	* // returns false
	*
	* arr.set( true, 0 );
	*
	* v = arr.get( 100 );
	* // returns undefined
	*/
	get( i: number ): boolean | void;

	/**
	* Returns a new array with each element being the result of a provided callback function.
	*
	* @param fcn - callback function
	* @param thisArg - callback function execution context
	* @returns new boolean array
	*
	* @example
	* function invert( v ) {
	*     return !v;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var out = arr.map( invert );
	* // returns <BooleanArray>
	*
	* var v = out.get( 0 );
	* // returns false
	*
	* v = out.get( 1 );
	* // returns true
	*
	* v = out.get( 2 );
	* // returns false
	*/
	map<U = unknown>( fcn: MapFcn<U>, thisArg?: ThisParameterType<MapFcn<U>> ): BooleanArray;

	/**
	* Reverses an array in-place.
	*
	* @returns reversed array
	*
	* @example
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( false, 2 );
	*
	* var out = arr.reverse();
	* // returns <BooleanArray>
	*
	* var v = out.get( 0 );
	* // returns false
	*
	* v = out.get( 1 );
	* // returns false
	*
	* v = out.get( 2 );
	* // returns true
	*/
	reverse(): BooleanArray;

	/**
	* Sets an array element.
	*
	* ## Notes
	*
	* -   When provided a typed array, we must check whether the source array shares the same buffer as the target array and whether the underlying memory overlaps. In particular, we are concerned with the following scenario:
	*
	*     ```text
	*     buf:                ---------------------
	*     src: ---------------------
	*     ```
	*
	*     In the above, as we copy values from `src`, we will overwrite values in the `src` view, resulting in duplicated values copied into the end of `buf`, which is not intended. Hence, to avoid overwriting source values, we must **copy** source values to a temporary array.
	*
	*     In the other overlapping scenario,
	*
	*     ```text
	*     buf: ---------------------
	*     src:                ---------------------
	*     ```
	*
	*     by the time we begin copying into the overlapping region, we are copying from the end of `src`, a non-overlapping region, which means we don't run the risk of copying copied values, rather than the original `src` values as intended.
	*
	*
	* @param value - value(s)
	* @param i - element index at which to start writing values (default: 0)
	* @throws index argument must be a nonnegative integer
	* @throws index argument is out-of-bounds
	* @throws target array lacks sufficient storage to accommodate source values
	*
	* @example
	* var arr = new BooleanArray( 10 );
	*
	* var v = arr.get( 0 );
	* // returns false
	*
	* arr.set( true, 0 );
	*
	* v = arr.get( 0 );
	* // returns true
	*/
	set( value: ArrayLike<any> | any, i?: number ): void;

	/**
	* Sorts an array in-place.
	*
	* @param compareFcn - comparison function
	* @returns sorted array
	*
	* @example
	* function compare( a, b ) {
	*    if ( a === false ) {
	*        if ( b === false ) {
	*            return 0;
	*        }
	*        return 1;
	*    }
	*    if ( b === true ) {
	*        return 0;
	*    }
	*    return -1;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* arr.sort( compare );
	*
	* var v = arr.get( 0 );
	* // returns true
	*
	* v = arr.get( 1 );
	* // returns true
	*
	* v = arr.get( 2 );
	* // returns false
	*/
	sort( compareFcn: CompareFcn ): BooleanArray;

	/**
	* Returns a new typed array containing the elements in reversed order.
	*
	* @returns reversed array
	*
	* @example
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( false, 2 );
	*
	* var out = arr.toReversed();
	* // returns <BooleanArray>
	*
	* var v = out.get( 0 );
	* // returns false
	*
	* v = out.get( 1 );
	* // returns false
	*
	* v = out.get( 2 );
	* // returns true
	*/
	toReversed(): BooleanArray;
}

/**
* Interface defining a Boolean array constructor which is both "newable" and "callable".
*/
interface BooleanArrayConstructor {
	/**
	* Boolean array constructor.
	*
	* @param arg - length, typed array, array-like object, or buffer
	* @param byteOffset - byte offset (default: 0)
	* @param length - view length
	* @throws if provided only a single argument, must provide a valid argument
	* @throws byte offset must be a nonnegative integer
	* @throws must provide sufficient memory to accommodate byte offset and view length requirements
	* @returns boolean array
	*
	* @example
	* var arr = new BooleanArray();
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new BooleanArray( 2 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new BooleanArray( [ true, false ] );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array-buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new BooleanArray( buf );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 16
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array-buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new BooleanArray( buf, 8 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 8
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array-buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new BooleanArray( buf, 8, 2 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*/
	new( arg?: number | ArrayLike<any> | ArrayBuffer | Iterable<any>, byteOffset?: number, length?: number ): BooleanArray;

	/**
	* Boolean array constructor.
	*
	* @param arg - length, typed array, array-like object, or buffer
	* @param byteOffset - byte offset (default: 0)
	* @param length - view length
	* @throws if provided only a single argument, must provide a valid argument
	* @throws byte offset must be a nonnegative integer
	* @throws must provide sufficient memory to accommodate byte offset and view length requirements
	* @returns boolean array
	*
	* @example
	* var arr = new BooleanArray();
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new BooleanArray( 2 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new BooleanArray( [ true, false ] );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array-buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new BooleanArray( buf );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 16
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array-buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new BooleanArray( buf, 8 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 8
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array-buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new BooleanArray( buf, 8, 2 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*/
	( arg?: number | ArrayLike<any> | ArrayBuffer | Iterable<any>, byteOffset?: number, length?: number ): BooleanArray;

	/**
	* Constructor name.
	*
	* @example
	* var str = BooleanArray.name;
	* // returns 'BooleanArray'
	*/
	readonly name: 'BooleanArray';

	/**
	* Size (in bytes) of each array element.
	*
	* @example
	* var nbytes = BooleanArray.BYTES_PER_ELEMENT;
	* // returns 1
	*/
	readonly BYTES_PER_ELEMENT: 1;

	/**
	* Creates a new boolean array from an array-like object or an iterable.
	*
	* @param src - array-like object or iterable
	* @param clbk - callback to invoke for each source element
	* @param thisArg - context
	* @returns boolean array
	*
	* @example
	* var arr = BooleanArray.from( [ true, false ] );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* function clbk( v ) {
	*     return !v;
	* }
	*
	* var arr = BooleanArray.from( [ true, false ], clbk );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*/
	from<U = unknown>( src: ArrayLike<any> | Iterable<any>, clbk?: FromCallback<U>, thisArg?: ThisParameterType<FromCallback<U>> ): BooleanArray;

	/**
	* Creates a new boolean array from a variable number of arguments.
	*
	* @param elements - array elements
	* @returns boolean array
	*
	* @example
	* var arr = BooleanArray.of( true, true, true, true );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 4
	*/
	of( ...elements: Array<any> ): BooleanArray;
}

/**
* Boolean array constructor.
*
* @param arg - length, typed array, array-like object, or buffer
* @param byteOffset - byte offset (default: 0)
* @param length - view length
* @throws if provided only a single argument, must provide a valid argument
* @throws byte offset must be a nonnegative integer
* @throws must provide sufficient memory to accommodate byte offset and view length requirements
* @returns boolean array
*
* @example
* var arr = new BooleanArray();
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 0
*
* @example
* var arr = new BooleanArray( 2 );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 2
*
* @example
* var arr = new BooleanArray( [ true, false ] );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new BooleanArray( buf );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 16
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new BooleanArray( buf, 8 );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 8
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new BooleanArray( buf, 8, 2 );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 2
*/
declare var ctor: BooleanArrayConstructor;


// EXPORTS //

export = ctor;
