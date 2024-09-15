// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import{primitives as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.2-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/boolean-ctor@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function g(r){var t,e;for(t=[];!(e=r.next()).done;)t.push(y(e.value));return t}var E=w.BYTES_PER_ELEMENT,m=f();function _(r){return"object"==typeof r&&null!==r&&"BooleanArray"===r.constructor.name&&r.BYTES_PER_ELEMENT===E}function T(r){return r===j}function j(){var o,s,h,a,f;if(s=arguments.length,!(this instanceof j))return 0===s?new j:1===s?new j(arguments[0]):2===s?new j(arguments[0],arguments[1]):new j(arguments[0],arguments[1],arguments[2]);if(0===s)h=new w(0);else if(1===s)if(r(f=arguments[0]))h=new w(f);else if(t(f))h=function(r,t){var e,n;for(e=t.length,n=0;n<e;n++)r[n]=y(t[n]);return r}(new w(f.length),f);else if(e(f))h=new w(f);else{if(!n(f))throw new TypeError(b("null2A",f));if(!1===m)throw new TypeError(b("null29",f));if(!i(f[l]))throw new TypeError(b("null2A",f));if(h=f[l](),!i(h.next))throw new TypeError(b("null2A",f));h=new w(g(h))}else{if(!e(h=arguments[0]))throw new TypeError(b("null2B",h));if(!r(o=arguments[1]))throw new TypeError(b("null2C",o));if(2===s)h=new w(h,o);else{if(!r(a=arguments[2]))throw new TypeError(b("null2F",a));if(a*E>h.byteLength-o)throw new RangeError(b("null2G",a*E));h=new w(h,o,a)}}return u(this,"_buffer",h),u(this,"_length",h.length),this}u(j,"BYTES_PER_ELEMENT",E),u(j,"name","BooleanArray"),u(j,"from",(function(r){var e,o,s,h,a,f,u,p,w;if(!i(this))throw new TypeError(b("null01"));if(!T(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if((o=arguments.length)>1){if(!i(s=arguments[1]))throw new TypeError(b("null2H",s));o>2&&(e=arguments[2])}if(t(r)){if(s){for(p=r.length,u=r.get&&r.set?d("default"):c("default"),a=(h=new this(p))._buffer,w=0;w<p;w++)a[w]=y(s.call(e,u(r,w),w));return h}return new this(r)}if(n(r)&&m&&i(r[l])){if(a=r[l](),!i(a.next))throw new TypeError(b("null2J",r));for(f=s?function(r,t,e){var n,i,o;for(n=[],o=-1;!(i=r.next()).done;)o+=1,n.push(y(t.call(e,i.value,o)));return n}(a,s,e):g(a),a=(h=new this(p=f.length))._buffer,w=0;w<p;w++)a[w]=f[w];return h}throw new TypeError(b("null2J",r))})),u(j,"of",(function(){var r,t;if(!i(this))throw new TypeError(b("null01"));if(!T(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(r=[],t=0;t<arguments.length;t++)r.push(arguments[t]);return new this(r)})),u(j.prototype,"at",(function(r){var t,e;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!s(r))throw new TypeError(b("null8A",r));if(e=this._length,t=this._buffer,r<0&&(r+=e),!(r<0||r>=e))return y(t[r])})),p(j.prototype,"buffer",(function(){return this._buffer.buffer})),p(j.prototype,"byteLength",(function(){return this._buffer.byteLength})),p(j.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),u(j.prototype,"BYTES_PER_ELEMENT",j.BYTES_PER_ELEMENT),u(j.prototype,"copyWithin",(function(r,t){if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");return 2===arguments.length?this._buffer.copyWithin(r,t):this._buffer.copyWithin(r,t,arguments[2]),this})),u(j.prototype,"entries",(function(){var r,t,e,n,i,o;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");return r=this,n=this._buffer,e=this._length,o=-1,u(t={},"next",(function(){if(o+=1,i||o>=e)return{done:!0};return{value:[o,y(n[o])],done:!1}})),u(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),l&&u(t,l,(function(){return r.entries()})),t})),u(j.prototype,"every",(function(r,t){var e,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!i(r))throw new TypeError(b("null3c",r));for(e=this._buffer,n=0;n<this._length;n++)if(!r.call(t,y(e[n]),n,this))return!1;return!0})),u(j.prototype,"fill",(function(r,t,e){var n,i,h,a;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!o(r))throw new TypeError(b("invalid argument. First argument must be a boolean. Value: `%s`.",r));if(n=this._buffer,i=this._length,arguments.length>1){if(!s(t))throw new TypeError(b("null7f",t));if(t<0&&(t+=i)<0&&(t=0),arguments.length>2){if(!s(e))throw new TypeError(b("null2z",e));e<0&&(e+=i)<0&&(e=0),e>i&&(e=i)}else e=i}else t=0,e=i;for(h=r?1:0,a=t;a<e;a++)n[a]=h;return this})),u(j.prototype,"filter",(function(r,t){var e,n,o,s;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!i(r))throw new TypeError(b("null3c",r));for(e=this._buffer,n=[],o=0;o<this._length;o++)s=y(e[o]),r.call(t,s,o,this)&&n.push(s);return new this.constructor(n)})),u(j.prototype,"find",(function(r,t){var e,n,o;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!i(r))throw new TypeError(b("null3c",r));for(e=this._buffer,o=0;o<this._length;o++)if(n=y(e[o]),r.call(t,n,o,this))return n})),u(j.prototype,"findIndex",(function(r,t){var e,n,o;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!i(r))throw new TypeError(b("null3c",r));for(e=this._buffer,o=0;o<this._length;o++)if(n=y(e[o]),r.call(t,n,o,this))return o;return-1})),u(j.prototype,"findLast",(function(r,t){var e,n,o;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!i(r))throw new TypeError(b("null3c",r));for(e=this._buffer,o=this._length-1;o>=0;o--)if(n=y(e[o]),r.call(t,n,o,this))return n})),u(j.prototype,"findLastIndex",(function(r,t){var e,n,o;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!i(r))throw new TypeError(b("null3c",r));for(e=this._buffer,o=this._length-1;o>=0;o--)if(n=y(e[o]),r.call(t,n,o,this))return o;return-1})),u(j.prototype,"forEach",(function(r,t){var e,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!i(r))throw new TypeError(b("null3c",r));for(e=this._buffer,n=0;n<this._length;n++)r.call(t,y(e[n]),n,this)})),u(j.prototype,"get",(function(t){if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!r(t))throw new TypeError(b("null2K",t));if(!(t>=this._length))return y(this._buffer[t])})),u(j.prototype,"includes",(function(r,t){var e,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!o(r))throw new TypeError(b("invalid argument. First argument must be a boolean. Value: `%s`.",r));if(arguments.length>1){if(!s(t))throw new TypeError(b("null7f",t));t<0&&(t+=this._length)<0&&(t=0)}else t=0;for(e=this._buffer,n=t;n<this._length;n++)if(r===y(e[n]))return!0;return!1})),u(j.prototype,"indexOf",(function(r,t){var e,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!o(r))throw new TypeError(b("invalid argument. First argument must be a boolean. Value: `%s`.",r));if(arguments.length>1){if(!s(t))throw new TypeError(b("null7f",t));t<0&&(t+=this._length)<0&&(t=0)}else t=0;for(e=this._buffer,n=t;n<this._length;n++)if(r===y(e[n]))return n;return-1})),u(j.prototype,"join",(function(r){var t,e,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(arguments.length>0){if(!h(r))throw new TypeError(b("null3F",r))}else r=",";for(t=this._buffer,e=[],n=0;n<this._length;n++)t[n]?e.push("true"):e.push("false");return e.join(r)})),u(j.prototype,"keys",(function(){var r,t,e,n,i;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");return r=this,e=this._length,i=-1,u(t={},"next",(function(){if(i+=1,n||i>=e)return{done:!0};return{value:i,done:!1}})),u(t,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),l&&u(t,l,(function(){return r.keys()})),t})),u(j.prototype,"lastIndexOf",(function(r,t){var e,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!o(r))throw new TypeError(b("invalid argument. First argument must be a boolean. Value: `%s`.",r));if(arguments.length>1){if(!s(t))throw new TypeError(b("null7f",t));t>=this._length?t=this._length-1:t<0&&(t+=this._length)}else t=this._length-1;for(e=this._buffer,n=t;n>=0;n--)if(r===y(e[n]))return n;return-1})),p(j.prototype,"length",(function(){return this._length})),u(j.prototype,"map",(function(r,t){var e,n,o,s;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!i(r))throw new TypeError(b("null3c"),r);for(o=this._buffer,e=(n=new this.constructor(this._length))._buffer,s=0;s<this._length;s++)e[s]=y(r.call(t,y(o[s]),s,this));return n})),u(j.prototype,"reduce",(function(r,t){var e,n,o,s;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!i(r))throw new TypeError(b("null3c",r));if(e=this._buffer,n=this._length,arguments.length>1)o=t,s=0;else{if(0===n)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");o=y(e[0]),s=1}for(;s<n;s++)o=r(o,y(e[s]),s,this);return o})),u(j.prototype,"reduceRight",(function(r,t){var e,n,o,s;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!i(r))throw new TypeError(b("null3c",r));if(e=this._buffer,n=this._length,arguments.length>1)o=t,s=n-1;else{if(0===n)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");o=y(e[n-1]),s=n-2}for(;s>=0;s--)o=r(o,y(e[s]),s,this);return o})),u(j.prototype,"reverse",(function(){var r,t,e,n,i,o;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(r=this._buffer,e=this._length,n=v(e/2),i=0;i<n;i++)o=e-i-1,t=r[i],r[i]=r[o],r[o]=t;return this})),u(j.prototype,"set",(function(e){var n,i,o,s,h,a,f;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(o=this._buffer,arguments.length>1){if(!r(i=arguments[1]))throw new TypeError(b("null2L",i))}else i=0;if(t(e)){if(i+(h=e.length)>this._length)throw new RangeError(b("null03"));if(n=_(e)?e._buffer:e,f=o.byteOffset+i*E,n.buffer===o.buffer&&n.byteOffset<f&&n.byteOffset+n.byteLength>f){for(s=new w(n.length),a=0;a<n.length;a++)s[a]=n[a];n=s}for(a=0;a<h;i++,a++)o[i]=n[a]?1:0}else{if(i>=this._length)throw new RangeError(b("null2M",i));o[i]=e?1:0}})),u(j.prototype,"slice",(function(r,t){var e,n,i,o,h,a;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(o=this._buffer,h=this._length,0===arguments.length)r=0,t=h;else{if(!s(r))throw new TypeError(b("null7e",r));if(r<0&&(r+=h)<0&&(r=0),1===arguments.length)t=h;else{if(!s(t))throw new TypeError(b("null7f",t));t<0?(t+=h)<0&&(t=0):t>h&&(t=h)}}for(e=r<t?t-r:0,n=(i=new this.constructor(e))._buffer,a=0;a<e;a++)n[a]=o[a+r];return i})),u(j.prototype,"some",(function(r,t){var e,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!i(r))throw new TypeError(b("null3c",r));for(e=this._buffer,n=0;n<this._length;n++)if(r.call(t,y(e[n]),n,this))return!0;return!1})),u(j.prototype,"sort",(function(r){var t;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(t=this._buffer,0===arguments.length)return t.sort(),this;if(!i(r))throw new TypeError(b("null3c",r));return t.sort((function(t,e){return r(y(t),y(e))})),this})),u(j.prototype,"subarray",(function(r,t){var e,n,i;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(n=this._buffer,i=this._length,0===arguments.length)r=0,t=i;else{if(!s(r))throw new TypeError(b("null7e",r));if(r<0&&(r+=i)<0&&(r=0),1===arguments.length)t=i;else{if(!s(t))throw new TypeError(b("null7f",t));t<0?(t+=i)<0&&(t=0):t>i&&(t=i)}}return r>=i?(i=0,e=n.byteLength):r>=t?(i=0,e=n.byteOffset+r*E):(i=t-r,e=n.byteOffset+r*E),new this.constructor(n.buffer,e,i<0?0:i)})),u(j.prototype,"toLocaleString",(function(r,t){var e,i,o,s,f;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(0===arguments.length)i=[];else{if(!h(r)&&!a(r))throw new TypeError(b("invalid argument. First argument must be a string or an array of strings. Value: `%s`.",r));i=r}if(arguments.length<2)e={};else{if(!n(t))throw new TypeError(b("null2V",t));e=t}for(s=this._buffer,o=[],f=0;f<this._length;f++)o.push(y(s[f]).toLocaleString(i,e));return o.join(",")})),u(j.prototype,"toReversed",(function(){var r,t,e,n,i;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(e=this._length,t=new this.constructor(e),n=this._buffer,r=t._buffer,i=0;i<e;i++)r[i]=n[e-i-1];return t})),u(j.prototype,"toSorted",(function(r){var t,e,n,o,s;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(n=this._length,e=new this.constructor(n),o=this._buffer,t=e._buffer,s=0;s<n;s++)t[s]=o[s];if(0===arguments.length)return t.sort(),e;if(!i(r))throw new TypeError(b("null3c",r));return t.sort((function(t,e){return r(y(t),y(e))})),e})),u(j.prototype,"toString",(function(){var r,t,e;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(r=[],t=this._buffer,e=0;e<this._length;e++)t[e]?r.push("true"):r.push("false");return r.join(",")})),u(j.prototype,"values",(function(){var r,t,e,n,i,o;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");return t=this,i=this._buffer,e=this._length,o=-1,u(r={},"next",(function(){if(o+=1,n||o>=e)return{done:!0};return{value:y(i[o]),done:!1}})),u(r,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),l&&u(r,l,(function(){return t.values()})),r})),u(j.prototype,"with",(function(r,t){var e,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!s(r))throw new TypeError(b("null7e",r));if(n=this._length,r<0&&(r+=n),r<0||r>=n)throw new RangeError(b("nullFP",r));if(!o(t))throw new TypeError(b("null55",t));return(e=new this.constructor(this._buffer))._buffer[r]=t?1:0,e}));export{j as default};
//# sourceMappingURL=index.mjs.map