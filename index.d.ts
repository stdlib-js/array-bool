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

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@esm/index.d.ts"/>

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