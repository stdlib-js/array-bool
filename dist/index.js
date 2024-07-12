"use strict";var _=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var S=_(function(rr,q){"use strict";var C=require("@stdlib/boolean-ctor");function G(a){var r,t;for(r=[];t=a.next(),!t.done;)r.push(C(t.value));return r}q.exports=G});var O=_(function(tr,A){"use strict";var H=require("@stdlib/boolean-ctor");function U(a,r,t){var i,e,n;for(i=[],n=-1;e=a.next(),!e.done;)n+=1,i.push(H(r.call(t,e.value,n)));return i}A.exports=U});var L=_(function(er,R){"use strict";var z=require("@stdlib/boolean-ctor");function D(a,r){var t,i;for(t=r.length,i=0;i<t;i++)a[i]=z(r[i]);return a}R.exports=D});var Y=_(function(ir,P){"use strict";var E=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,V=require("@stdlib/assert-is-collection"),F=require("@stdlib/assert-is-arraybuffer"),M=require("@stdlib/assert-is-object"),g=require("@stdlib/assert-is-function"),B=require("@stdlib/assert-is-boolean").isPrimitive,m=require("@stdlib/assert-is-integer").isPrimitive,J=require("@stdlib/assert-is-string").isPrimitive,K=require("@stdlib/assert-has-iterator-symbol-support"),T=require("@stdlib/symbol-iterator"),f=require("@stdlib/utils-define-nonenumerable-read-only-property"),d=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),b=require("@stdlib/array-uint8"),v=require("@stdlib/boolean-ctor"),Q=require("@stdlib/array-base-getter"),W=require("@stdlib/math-base-special-floor"),X=require("@stdlib/array-base-accessor-getter"),s=require("@stdlib/string-format"),j=S(),Z=O(),$=L(),c=b.BYTES_PER_ELEMENT,k=K();function h(a){return typeof a=="object"&&a!==null&&a.constructor.name==="BooleanArray"&&a.BYTES_PER_ELEMENT===c}function N(a){return a===u}function u(){var a,r,t,i,e;if(r=arguments.length,!(this instanceof u))return r===0?new u:r===1?new u(arguments[0]):r===2?new u(arguments[0],arguments[1]):new u(arguments[0],arguments[1],arguments[2]);if(r===0)t=new b(0);else if(r===1)if(e=arguments[0],E(e))t=new b(e);else if(V(e))t=$(new b(e.length),e);else if(F(e))t=new b(e);else if(M(e)){if(k===!1)throw new TypeError(s("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",e));if(!g(e[T]))throw new TypeError(s("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(t=e[T](),!g(t.next))throw new TypeError(s("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));t=new b(j(t))}else throw new TypeError(s("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));else{if(t=arguments[0],!F(t))throw new TypeError(s("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(a=arguments[1],!E(a))throw new TypeError(s("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",a));if(r===2)t=new b(t,a);else{if(i=arguments[2],!E(i))throw new TypeError(s("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*c>t.byteLength-a)throw new RangeError(s("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*c));t=new b(t,a,i)}}return f(this,"_buffer",t),f(this,"_length",t.length),this}f(u,"BYTES_PER_ELEMENT",c);f(u,"name","BooleanArray");f(u,"from",function(r){var t,i,e,n,o,l,y,p,w;if(!g(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!N(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(i=arguments.length,i>1){if(e=arguments[1],!g(e))throw new TypeError(s("invalid argument. Second argument must be a function. Value: `%s`.",e));i>2&&(t=arguments[2])}if(V(r)){if(e){for(p=r.length,r.get&&r.set?y=X("default"):y=Q("default"),n=new this(p),o=n._buffer,w=0;w<p;w++)o[w]=v(e.call(t,y(r,w),w));return n}return new this(r)}if(M(r)&&k&&g(r[T])){if(o=r[T](),!g(o.next))throw new TypeError(s("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));for(e?l=Z(o,e,t):l=j(o),p=l.length,n=new this(p),o=n._buffer,w=0;w<p;w++)o[w]=l[w];return n}throw new TypeError(s("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))});f(u,"of",function(){var r,t;if(!g(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!N(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(r=[],t=0;t<arguments.length;t++)r.push(arguments[t]);return new this(r)});d(u.prototype,"buffer",function(){return this._buffer.buffer});d(u.prototype,"byteLength",function(){return this._buffer.byteLength});d(u.prototype,"byteOffset",function(){return this._buffer.byteOffset});f(u.prototype,"BYTES_PER_ELEMENT",u.BYTES_PER_ELEMENT);f(u.prototype,"every",function(r,t){var i,e;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!g(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,e=0;e<this._length;e++)if(!r.call(t,v(i[e]),e,this))return!1;return!0});f(u.prototype,"find",function(r,t){var i,e,n;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!g(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,n=0;n<this._length;n++)if(e=v(i[n]),r.call(t,e,n,this))return e});f(u.prototype,"findIndex",function(r,t){var i,e,n;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!g(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,n=0;n<this._length;n++)if(e=v(i[n]),r.call(t,e,n,this))return n;return-1});f(u.prototype,"findLast",function(r,t){var i,e,n;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!g(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,n=this._length-1;n>=0;n--)if(e=v(i[n]),r.call(t,e,n,this))return e});f(u.prototype,"findLastIndex",function(r,t){var i,e,n;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!g(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,n=this._length-1;n>=0;n--)if(e=v(i[n]),r.call(t,e,n,this))return n;return-1});f(u.prototype,"get",function(r){if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!E(r))throw new TypeError(s("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return v(this._buffer[r])});f(u.prototype,"includes",function(r,t){var i,e;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!B(r))throw new TypeError(s("invalid argument. First argument must be a boolean. Value: `%s`.",r));if(arguments.length>1){if(!m(t))throw new TypeError(s("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(i=this._buffer,e=t;e<this._length;e++)if(r===v(i[e]))return!0;return!1});f(u.prototype,"indexOf",function(r,t){var i,e;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!B(r))throw new TypeError(s("invalid argument. First argument must be a boolean. Value: `%s`.",r));if(arguments.length>1){if(!m(t))throw new TypeError(s("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0&&(t+=this._length,t<0&&(t=0))}else t=0;for(i=this._buffer,e=t;e<this._length;e++)if(r===v(i[e]))return e;return-1});f(u.prototype,"join",function(r){var t,i,e;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(arguments.length>0){if(!J(r))throw new TypeError(s("invalid argument. First argument must be a string. Value: `%s`.",r))}else r=",";for(t=this._buffer,i=[],e=0;e<this._length;e++)t[e]?i.push("true"):i.push("false");return i.join(r)});f(u.prototype,"lastIndexOf",function(r,t){var i,e;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!B(r))throw new TypeError(s("invalid argument. First argument must be a boolean. Value: `%s`.",r));if(arguments.length>1){if(!m(t))throw new TypeError(s("invalid argument. Second argument must be an integer. Value: `%s`.",t));t>=this._length?t=this._length-1:t<0&&(t+=this._length)}else t=this._length-1;for(i=this._buffer,e=t;e>=0;e--)if(r===v(i[e]))return e;return-1});d(u.prototype,"length",function(){return this._length});f(u.prototype,"map",function(r,t){var i,e,n,o;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!g(r))throw new TypeError("invalid argument. First argument must be a function. Value: `%s`.",r);for(n=this._buffer,e=new this.constructor(this._length),i=e._buffer,o=0;o<this._length;o++)i[o]=v(r.call(t,v(n[o]),o,this));return e});f(u.prototype,"reduce",function(r,t){var i,e,n,o;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!g(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));if(i=this._buffer,e=this._length,arguments.length>1)n=t,o=0;else{if(e===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=v(i[0]),o=1}for(;o<e;o++)n=r(n,v(i[o]),o,this);return n});f(u.prototype,"reduceRight",function(r,t){var i,e,n,o;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!g(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));if(i=this._buffer,e=this._length,arguments.length>1)n=t,o=e-1;else{if(e===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=v(i[e-1]),o=e-2}for(;o>=0;o--)n=r(n,v(i[o]),o,this);return n});f(u.prototype,"reverse",function(){var r,t,i,e,n,o;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(r=this._buffer,i=this._length,e=W(i/2),n=0;n<e;n++)o=i-n-1,t=r[n],r[n]=r[o],r[o]=t;return this});f(u.prototype,"set",function(r){var t,i,e,n,o,l,y;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(e=this._buffer,arguments.length>1){if(i=arguments[1],!E(i))throw new TypeError(s("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(V(r)){if(o=r.length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(h(r)?t=r._buffer:t=r,y=e.byteOffset+i*c,t.buffer===e.buffer&&t.byteOffset<y&&t.byteOffset+t.byteLength>y){for(n=new b(t.length),l=0;l<t.length;l++)n[l]=t[l];t=n}for(l=0;l<o;i++,l++)e[i]=t[l]?1:0;return}if(i>=this._length)throw new RangeError(s("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));e[i]=r?1:0});f(u.prototype,"slice",function(r,t){var i,e,n,o,l,y;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(o=this._buffer,l=this._length,arguments.length===0)r=0,t=l;else{if(!m(r))throw new TypeError(s("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=l,r<0&&(r=0)),arguments.length===1)t=l;else{if(!m(t))throw new TypeError(s("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=l,t<0&&(t=0)):t>l&&(t=l)}}for(r<t?i=t-r:i=0,n=new this.constructor(i),e=n._buffer,y=0;y<i;y++)e[y]=o[y+r];return n});f(u.prototype,"some",function(r,t){var i,e;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!g(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,e=0;e<this._length;e++)if(r.call(t,v(i[e]),e,this))return!0;return!1});f(u.prototype,"sort",function(r){var t;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(t=this._buffer,arguments.length===0)return t.sort(),this;if(!g(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));return t.sort(i),this;function i(e,n){return r(v(e),v(n))}});f(u.prototype,"subarray",function(r,t){var i,e,n;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(e=this._buffer,n=this._length,arguments.length===0)r=0,t=n;else{if(!m(r))throw new TypeError(s("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=n,r<0&&(r=0)),arguments.length===1)t=n;else{if(!m(t))throw new TypeError(s("invalid argument. Second argument must be an integer. Value: `%s`.",t));t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n)}}return r>=n?(n=0,i=e.byteLength):r>=t?(n=0,i=e.byteOffset+r*c):(n=t-r,i=e.byteOffset+r*c),new this.constructor(e.buffer,i,n<0?0:n)});f(u.prototype,"toReversed",function(){var r,t,i,e,n;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(i=this._length,t=new this.constructor(i),e=this._buffer,r=t._buffer,n=0;n<i;n++)r[n]=e[i-n-1];return t});f(u.prototype,"toSorted",function(r){var t,i,e,n,o;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(e=this._length,i=new this.constructor(e),n=this._buffer,t=i._buffer,o=0;o<e;o++)t[o]=n[o];if(arguments.length===0)return t.sort(),i;if(!g(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));return t.sort(l),i;function l(y,p){return r(v(y),v(p))}});f(u.prototype,"toString",function(){var r,t,i;if(!h(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(r=[],t=this._buffer,i=0;i<this._length;i++)t[i]?r.push("true"):r.push("false");return r.join(",")});P.exports=u});var x=Y();module.exports=x;
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
