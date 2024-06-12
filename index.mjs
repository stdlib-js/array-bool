// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/boolean-ctor@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function w(e){var t,r;for(t=[];!(r=e.next()).done;)t.push(a(r.value));return t}var m=h.BYTES_PER_ELEMENT,y=o();function c(e){return"object"==typeof e&&null!==e&&"BooleanArray"===e.constructor.name&&e.BYTES_PER_ELEMENT===m}function b(e){return e===v}function v(){var o,l,u,p,c;if(l=arguments.length,!(this instanceof v))return 0===l?new v:1===l?new v(arguments[0]):2===l?new v(arguments[0],arguments[1]):new v(arguments[0],arguments[1],arguments[2]);if(0===l)u=new h(0);else if(1===l)if(e(c=arguments[0]))u=new h(c);else if(t(c))u=function(e,t){var r,n;for(r=t.length,n=0;n<r;n++)e[n]=a(t[n]);return e}(new h(c.length),c);else if(r(c))u=new h(c);else{if(!n(c))throw new TypeError(d("null2A",c));if(!1===y)throw new TypeError(d("null29",c));if(!i(c[s]))throw new TypeError(d("null2A",c));if(u=c[s](),!i(u.next))throw new TypeError(d("null2A",c));u=new h(w(u))}else{if(!r(u=arguments[0]))throw new TypeError(d("null2B",u));if(!e(o=arguments[1]))throw new TypeError(d("null2C",o));if(2===l)u=new h(u,o);else{if(!e(p=arguments[2]))throw new TypeError(d("null2F",p));if(p*m>u.byteLength-o)throw new RangeError(d("null2G",p*m));u=new h(u,o,p)}}return f(this,"_buffer",u),f(this,"_length",u.length),this}f(v,"BYTES_PER_ELEMENT",m),f(v,"name","BooleanArray"),f(v,"from",(function(e){var r,o,f,l,h,m,c,v,E;if(!i(this))throw new TypeError(d("null01"));if(!b(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if((o=arguments.length)>1){if(!i(f=arguments[1]))throw new TypeError(d("null2H",f));o>2&&(r=arguments[2])}if(t(e)){if(f){for(v=e.length,c=e.get&&e.set?p("default"):u("default"),h=(l=new this(v))._buffer,E=0;E<v;E++)h[E]=a(f.call(r,c(e,E),E));return l}return new this(e)}if(n(e)&&y&&i(e[s])){if(h=e[s](),!i(h.next))throw new TypeError(d("null2J",e));for(m=f?function(e,t,r){var n,i,o;for(n=[],o=-1;!(i=e.next()).done;)o+=1,n.push(a(t.call(r,i.value,o)));return n}(h,f,r):w(h),h=(l=new this(v=m.length))._buffer,E=0;E<v;E++)h[E]=m[E];return l}throw new TypeError(d("null2J",e))})),f(v,"of",(function(){var e,t;if(!i(this))throw new TypeError(d("null01"));if(!b(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)})),l(v.prototype,"buffer",(function(){return this._buffer.buffer})),l(v.prototype,"byteLength",(function(){return this._buffer.byteLength})),l(v.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),f(v.prototype,"BYTES_PER_ELEMENT",v.BYTES_PER_ELEMENT),f(v.prototype,"get",(function(t){if(!c(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!e(t))throw new TypeError(d("null2K",t));if(!(t>=this._length))return a(this._buffer[t])})),l(v.prototype,"length",(function(){return this._length})),f(v.prototype,"map",(function(e,t){var r,n,o,s;if(!c(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!i(e))throw new TypeError(d("null3c"),e);for(o=this._buffer,r=(n=new this.constructor(this._length))._buffer,s=0;s<this._length;s++)r[s]=a(e.call(t,a(o[s]),s,this));return n})),f(v.prototype,"set",(function(r){var n,i,o,s,f,l,a;if(!c(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(o=this._buffer,arguments.length>1){if(!e(i=arguments[1]))throw new TypeError(d("null2L",i))}else i=0;if(t(r)){if(i+(f=r.length)>this._length)throw new RangeError(d("null03"));if(n=c(r)?r._buffer:r,a=o.byteOffset+i*m,n.buffer===o.buffer&&n.byteOffset<a&&n.byteOffset+n.byteLength>a){for(s=new h(n.length),l=0;l<n.length;l++)s[l]=n[l];n=s}for(l=0;l<f;i++,l++)o[i]=n[l]?1:0}else{if(i>=this._length)throw new RangeError(d("null2M",i));o[i]=r?1:0}})),f(v.prototype,"sort",(function(e){var t;if(!c(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(t=this._buffer,0===arguments.length)return t.sort(),this;if(!i(e))throw new TypeError(d("null3c",e));return t.sort((function(t,r){return e(a(t),a(r))})),this}));export{v as default};
//# sourceMappingURL=index.mjs.map
