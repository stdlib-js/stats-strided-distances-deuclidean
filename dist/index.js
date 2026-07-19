"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var v=s(function(z,o){
var j=require('@stdlib/blas-ext-base-drrss/dist').ndarray;function m(e,r,a,u,i,n,t){return e<=0?NaN:j(e,r,a,u,i,n,t)}o.exports=m
});var y=s(function(A,c){
var q=require('@stdlib/strided-base-stride2offset/dist'),R=v();function _(e,r,a,u,i){var n=q(e,a),t=q(e,i);return R(e,r,a,n,u,i,t)}c.exports=_
});var p=s(function(B,l){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=y(),O=v();E(f,"ndarray",O);l.exports=f
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=p(),d,x=g(b(__dirname,"./native.js"));h(x)?d=k:d=x;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
