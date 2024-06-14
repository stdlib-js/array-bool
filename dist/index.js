"use strict";var E=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var q=E(function(W,B){"use strict";var N=require("@stdlib/boolean-ctor");function Y(a){var r,e;for(r=[];e=a.next(),!e.done;)r.push(N(e.value));return r}B.exports=Y});var V=E(function(X,A){"use strict";var P=require("@stdlib/boolean-ctor");function F(a,r,e){var n,t,i;for(n=[],i=-1;t=a.next(),!t.done;)i+=1,n.push(P(r.call(e,t.value,i)));return n}A.exports=F});var L=E(function(Z,M){"use strict";var C=require("@stdlib/boolean-ctor");function G(a,r){var e,n;for(e=r.length,n=0;n<e;n++)a[n]=C(r[n]);return a}M.exports=G});var j=E(function($,I){"use strict";var p=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,_=require("@stdlib/assert-is-collection"),R=require("@stdlib/assert-is-arraybuffer"),O=require("@stdlib/assert-is-object"),v=require("@stdlib/assert-is-function"),H=require("@stdlib/assert-has-iterator-symbol-support"),d=require("@stdlib/symbol-iterator"),l=require("@stdlib/utils-define-nonenumerable-read-only-property"),T=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),g=require("@stdlib/array-uint8"),y=require("@stdlib/boolean-ctor"),U=require("@stdlib/array-base-getter"),z=require("@stdlib/array-base-accessor-getter"),s=require("@stdlib/string-format"),S=q(),D=V(),J=L(),c=g.BYTES_PER_ELEMENT,k=H();function b(a){return typeof a=="object"&&a!==null&&a.constructor.name==="BooleanArray"&&a.BYTES_PER_ELEMENT===c}function x(a){return a===o}function o(){var a,r,e,n,t;if(r=arguments.length,!(this instanceof o))return r===0?new o:r===1?new o(arguments[0]):r===2?new o(arguments[0],arguments[1]):new o(arguments[0],arguments[1],arguments[2]);if(r===0)e=new g(0);else if(r===1)if(t=arguments[0],p(t))e=new g(t);else if(_(t))e=J(new g(t.length),t);else if(R(t))e=new g(t);else if(O(t)){if(k===!1)throw new TypeError(s("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!v(t[d]))throw new TypeError(s("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(e=t[d](),!v(e.next))throw new TypeError(s("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));e=new g(S(e))}else throw new TypeError(s("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));else{if(e=arguments[0],!R(e))throw new TypeError(s("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",e));if(a=arguments[1],!p(a))throw new TypeError(s("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",a));if(r===2)e=new g(e,a);else{if(n=arguments[2],!p(n))throw new TypeError(s("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*c>e.byteLength-a)throw new RangeError(s("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*c));e=new g(e,a,n)}}return l(this,"_buffer",e),l(this,"_length",e.length),this}l(o,"BYTES_PER_ELEMENT",c);l(o,"name","BooleanArray");l(o,"from",function(r){var e,n,t,i,u,f,m,w,h;if(!v(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!x(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(n=arguments.length,n>1){if(t=arguments[1],!v(t))throw new TypeError(s("invalid argument. Second argument must be a function. Value: `%s`.",t));n>2&&(e=arguments[2])}if(_(r)){if(t){for(w=r.length,r.get&&r.set?m=z("default"):m=U("default"),i=new this(w),u=i._buffer,h=0;h<w;h++)u[h]=y(t.call(e,m(r,h),h));return i}return new this(r)}if(O(r)&&k&&v(r[d])){if(u=r[d](),!v(u.next))throw new TypeError(s("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));for(t?f=D(u,t,e):f=S(u),w=f.length,i=new this(w),u=i._buffer,h=0;h<w;h++)u[h]=f[h];return i}throw new TypeError(s("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))});l(o,"of",function(){var r,e;if(!v(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!x(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)});T(o.prototype,"buffer",function(){return this._buffer.buffer});T(o.prototype,"byteLength",function(){return this._buffer.byteLength});T(o.prototype,"byteOffset",function(){return this._buffer.byteOffset});l(o.prototype,"BYTES_PER_ELEMENT",o.BYTES_PER_ELEMENT);l(o.prototype,"find",function(r,e){var n,t,i;if(!b(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!v(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=0;i<this._length;i++)if(t=y(n[i]),r.call(e,t,i,this))return t});l(o.prototype,"findLast",function(r,e){var n,t,i;if(!b(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!v(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,i=this._length-1;i>=0;i--)if(t=y(n[i]),r.call(e,t,i,this))return t});l(o.prototype,"get",function(r){if(!b(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!p(r))throw new TypeError(s("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return y(this._buffer[r])});T(o.prototype,"length",function(){return this._length});l(o.prototype,"map",function(r,e){var n,t,i,u;if(!b(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!v(r))throw new TypeError("invalid argument. First argument must be a function. Value: `%s`.",r);for(i=this._buffer,t=new this.constructor(this._length),n=t._buffer,u=0;u<this._length;u++)n[u]=y(r.call(e,y(i[u]),u,this));return t});l(o.prototype,"set",function(r){var e,n,t,i,u,f,m;if(!b(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(t=this._buffer,arguments.length>1){if(n=arguments[1],!p(n))throw new TypeError(s("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",n))}else n=0;if(_(r)){if(u=r.length,n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(b(r)?e=r._buffer:e=r,m=t.byteOffset+n*c,e.buffer===t.buffer&&e.byteOffset<m&&e.byteOffset+e.byteLength>m){for(i=new g(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(f=0;f<u;n++,f++)t[n]=e[f]?1:0;return}if(n>=this._length)throw new RangeError(s("invalid argument. Index argument is out-of-bounds. Value: `%u`.",n));t[n]=r?1:0});l(o.prototype,"sort",function(r){var e;if(!b(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(e=this._buffer,arguments.length===0)return e.sort(),this;if(!v(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));return e.sort(n),this;function n(t,i){return r(y(t),y(i))}});I.exports=o});var K=j();module.exports=K;
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
//# sourceMappingURL=index.js.map
