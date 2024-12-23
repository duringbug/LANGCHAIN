"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return(b=_toPropertyKey(b))in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _createForOfIteratorHelper(b,c){var d="undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(!d){if(Array.isArray(b)||(d=_unsupportedIterableToArray(b))||c&&b&&"number"==typeof b.length){d&&(b=d);var e=0,f=function(){};return{s:f,n:function(){return e>=b.length?{done:!0}:{done:!1,value:b[e++]}},e:function(a){throw a},f:f}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var g,h=!0,i=!1;return{s:function(){d=d.call(b)},n:function(){var a=d.next();return h=a.done,a},e:function(a){i=!0,g=a},f:function(){try{h||null==d["return"]||d["return"]()}finally{if(i)throw g}}}}function _unsupportedIterableToArray(b,c){if(b){if("string"==typeof b)return _arrayLikeToArray(b,c);var a={}.toString.call(b).slice(8,-1);return"Object"===a&&b.constructor&&(a=b.constructor.name),"Map"===a||"Set"===a?Array.from(b):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(b,c):void 0}}function _arrayLikeToArray(b,c){(null==c||c>b.length)&&(c=b.length);for(var d=0,f=Array(c);d<c;d++)f[d]=b[d];return f}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */function b(a,b,c){return Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}),a[b]}function f(b,d,e,f){var g=d&&d.prototype instanceof k?d:k,h=Object.create(g.prototype),a=new B(f||[]);return E(h,"_invoke",{value:w(b,e,a)}),h}function j(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}function k(){}function l(){}function m(){}function q(a){["next","throw","return"].forEach(function(c){b(a,c,function(a){return this._invoke(c,a)})})}function s(b,d){function c(e,f,g,i){var a=j(b[e],b,f);if("throw"!==a.type){var k=a.arg,l=k.value;return l&&"object"==_typeof(l)&&t.call(l,"__await")?d.resolve(l.__await).then(function(a){c("next",a,g,i)},function(a){c("throw",a,g,i)}):d.resolve(l).then(function(a){k.value=a,g(k)},function(a){return c("throw",a,g,i)})}i(a.arg)}var e;E(this,"_invoke",{value:function(a,b){function f(){return new d(function(d,e){c(a,b,d,e)})}return e=e?e.then(f,f):f()}})}function w(a,b,d){var e="suspendedStart";return function(f,g){if(e==="executing")throw Error("Generator is already running");if("completed"===e){if("throw"===f)throw g;return{value:D,done:!0}}for(d.method=f,d.arg=g;;){var h=d.delegate;if(h){var i=x(h,d);if(i){if(i===G)continue;return i}}if("next"===d.method)d.sent=d._sent=d.arg;else if("throw"===d.method){if("suspendedStart"===e)throw e="completed",d.arg;d.dispatchException(d.arg)}else"return"===d.method&&d.abrupt("return",d.arg);e="executing";var k=j(a,b,d);if("normal"===k.type){if(e=d.done?"completed":"suspendedYield",k.arg===G)continue;return{value:k.arg,done:d.done}}"throw"===k.type&&(e="completed",d.method="throw",d.arg=k.arg)}}}function x(b,c){var d=c.method,e=b.iterator[d];if(e===D)return c.delegate=null,"throw"===d&&b.iterator["return"]&&(c.method="return",c.arg=D,x(b,c),"throw"===c.method)||"return"!==d&&(c.method="throw",c.arg=new TypeError("The iterator does not provide a '"+d+"' method")),G;var f=j(e,b.iterator,c.arg);if("throw"===f.type)return c.method="throw",c.arg=f.arg,c.delegate=null,G;var g=f.arg;return g?g.done?(c[b.resultName]=g.value,c.next=b.nextLoc,"return"!==c.method&&(c.method="next",c.arg=D),c.delegate=null,G):g:(c.method="throw",c.arg=new TypeError("iterator result is not an object"),c.delegate=null,G)}function z(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function A(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function B(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(z,this),this.reset(!0)}function C(a){if(a||""===a){var b=a[F];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(t.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=D,b.done=!0,b};return d.next=d}}throw new TypeError(_typeof(a)+" is not iterable")}_regeneratorRuntime=function(){return h};var D,h={},e=Object.prototype,t=e.hasOwnProperty,E=Object.defineProperty||function(a,b,c){a[b]=c.value},n="function"==typeof Symbol?Symbol:{},F=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";try{b({},"")}catch(a){b=function(a,b,c){return a[b]=c}}h.wrap=f;var G={},i={};b(i,F,function(){return this});var o=Object.getPrototypeOf,d=o&&o(o(C([])));d&&d!==e&&t.call(d,F)&&(i=d);var r=m.prototype=k.prototype=Object.create(i);return l.prototype=m,E(r,"constructor",{value:m,configurable:!0}),E(m,"constructor",{value:l,configurable:!0}),l.displayName=b(m,c,"GeneratorFunction"),h.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===l||"GeneratorFunction"===(b.displayName||b.name))},h.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,m):(a.__proto__=m,b(a,c,"GeneratorFunction")),a.prototype=Object.create(r),a},h.awrap=function(a){return{__await:a}},q(s.prototype),b(s.prototype,a,function(){return this}),h.AsyncIterator=s,h.async=function(b,c,d,e,g){void 0===g&&(g=Promise);var j=new s(f(b,c,d,e),g);return h.isGeneratorFunction(c)?j:j.next().then(function(a){return a.done?a.value:j.next()})},q(r),b(r,c,"Generator"),b(r,F,function(){return this}),b(r,"toString",function(){return"[object Generator]"}),h.keys=function(a){var b=Object(a),c=[];for(var d in b)c.push(d);return c.reverse(),function a(){for(;c.length;){var d=c.pop();if(d in b)return a.value=d,a.done=!1,a}return a.done=!0,a}},h.values=C,B.prototype={constructor:B,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=D,this.done=!1,this.delegate=null,this.method="next",this.arg=D,this.tryEntries.forEach(A),!a)for(var b in this)"t"===b.charAt(0)&&t.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=D)},stop:function(){this.done=!0;var a=this.tryEntries[0].completion;if("throw"===a.type)throw a.arg;return this.rval},dispatchException:function(b){function d(a,c){return h.type="throw",h.arg=b,e.next=a,c&&(e.method="next",e.arg=D),!!c}if(this.done)throw b;for(var e=this,f=this.tryEntries.length-1;0<=f;--f){var g=this.tryEntries[f],h=g.completion;if("root"===g.tryLoc)return d("end");if(g.tryLoc<=this.prev){var j=t.call(g,"catchLoc"),k=t.call(g,"finallyLoc");if(j&&k){if(this.prev<g.catchLoc)return d(g.catchLoc,!0);if(this.prev<g.finallyLoc)return d(g.finallyLoc)}else if(!j){if(!k)throw Error("try statement without catch or finally");if(this.prev<g.finallyLoc)return d(g.finallyLoc)}else if(this.prev<g.catchLoc)return d(g.catchLoc,!0)}}},abrupt:function(b,c){for(var d,e=this.tryEntries.length-1;0<=e;--e)if(d=this.tryEntries[e],d.tryLoc<=this.prev&&t.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var f=d;break}f&&("break"===b||"continue"===b)&&f.tryLoc<=c&&c<=f.finallyLoc&&(f=null);var g=f?f.completion:{};return g.type=b,g.arg=c,f?(this.method="next",this.next=f.finallyLoc,G):this.complete(g)},complete:function(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),G},finish:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),A(b),G},catch:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.tryLoc===a){var d=b.completion;if("throw"===d.type){var f=d.arg;A(b)}return f}throw Error("illegal catch attempt")},delegateYield:function(a,b,c){return this.delegate={iterator:C(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=D),G}},h}function asyncGeneratorStep(b,d,f,e,g,h,a){try{var c=b[h](a),i=c.value}catch(a){return void f(a)}c.done?d(i):Promise.resolve(i).then(e,g)}function _asyncToGenerator(b){return function(){var c=this,d=arguments;return new Promise(function(e,f){function g(a){asyncGeneratorStep(i,e,f,g,h,"next",a)}function h(a){asyncGeneratorStep(i,e,f,g,h,"throw",a)}var i=b.apply(c,d);g(void 0)})}}function _classCallCheck(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,_toPropertyKey(c.key),c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _toPropertyKey(a){var b=_toPrimitive(a,"string");return"symbol"==_typeof(b)?b:b+""}function _toPrimitive(a,b){if("object"!=_typeof(a)||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}function _callSuper(a,b,c){return b=_getPrototypeOf(b),_possibleConstructorReturn(a,_isNativeReflectConstruct()?Reflect.construct(b,c||[],_getPrototypeOf(a).constructor):b.apply(a,c))}function _possibleConstructorReturn(a,b){if(b&&("object"==_typeof(b)||"function"==typeof b))return b;if(void 0!==b)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){try{var a=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(a){}return(_isNativeReflectConstruct=function(){return!!a})()}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var _require=require("@langchain/core/memory"),BaseMemory=_require.BaseMemory,_require2=require("@langchain/core/embeddings"),Embeddings=_require2.Embeddings,_require3=require("cohere-ai"),CohereClient=_require3.CohereClient,MemoryVectorStore=/*#__PURE__*/function(a){function b(){var a;return _classCallCheck(this,b),a=_callSuper(this,b),a.memoryStore=new Map,a}return _inherits(b,a),_createClass(b,[{key:"memoryKeys",get:function(){return Array.from(this.memoryStore.keys())}},{key:"loadMemoryVariables",value:function(){function a(){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function a(){return _regeneratorRuntime().wrap(function b(a){for(;1;)switch(a.prev=a.next){case 0:return a.abrupt("return",{});case 1:case"end":return a.stop()}},a)}));return a}()},{key:"saveContext",value:function(){function a(a,c){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function c(a,b){return _regeneratorRuntime().wrap(function b(a){for(;1;)switch(a.prev=a.next){case 0:case"end":return a.stop()}},c)}));return a}()},{key:"addDocuments",value:function(){function a(a,c){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function c(a,b){var d,e,f,g;return _regeneratorRuntime().wrap(function h(c){for(;1;)switch(c.prev=c.next){case 0:d=_createForOfIteratorHelper(a),c.prev=1,d.s();case 3:if((e=d.n()).done){c.next=11;break}return f=e.value,c.next=7,b.embedQuery(f.text);case 7:g=c.sent,this.memoryStore.set(f.text,{text:f.text,vector:g});case 9:c.next=3;break;case 11:c.next=16;break;case 13:c.prev=13,c.t0=c["catch"](1),d.e(c.t0);case 16:return c.prev=16,d.f(),c.finish(16);case 19:case"end":return c.stop()}},c,this,[[1,13,16,19]])}));return a}()},{key:"similaritySearch",value:function(){function a(a,c,d){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function d(a,b,c){var e,f;return _regeneratorRuntime().wrap(function g(d){for(;1;)switch(d.prev=d.next){case 0:return d.next=2,c.embedQuery(a);case 2:return e=d.sent,f=function c(a,b){return a.reduce(function(a,c,d){return a+c*b[d]},0)},d.abrupt("return",Array.from(this.memoryStore.values()).map(function(a){return _objectSpread(_objectSpread({},a),{},{score:f(e,a.vector)})}).sort(function(c,a){return a.score-c.score}).slice(0,b));case 5:case"end":return d.stop()}},d,this)}));return a}()},{key:"getVector",value:function(){function a(a){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function b(a){var c;return _regeneratorRuntime().wrap(function d(b){for(;1;)switch(b.prev=b.next){case 0:if(c=this.memoryStore.get(a),!c){b.next=3;break}return b.abrupt("return",c.vector);case 3:return b.abrupt("return",void 0);case 4:case"end":return b.stop()}},b,this)}));return a}()}])}(BaseMemory),CohereEmbeddings=/*#__PURE__*/function(a){function b(a){var c;return _classCallCheck(this,b),c=_callSuper(this,b,[{}]),c.cohereClient=new CohereClient({token:a}),c}return _inherits(b,a),_createClass(b,[{key:"embedDocuments",value:function(){function a(a){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function b(a){var c;return _regeneratorRuntime().wrap(function d(b){for(;1;)switch(b.prev=b.next){case 0:return b.next=2,this.cohereClient.embed({texts:a});case 2:if(c=b.sent,!(Array.isArray(c.embeddings)&&Array.isArray(c.embeddings[0]))){b.next=7;break}return b.abrupt("return",c.embeddings);case 7:throw new Error("Unexpected embeddings format");case 8:case"end":return b.stop()}},b,this)}));return a}()},{key:"embedQuery",value:function(){function a(a){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function b(a){var c;return _regeneratorRuntime().wrap(function d(b){for(;1;)switch(b.prev=b.next){case 0:return b.next=2,this.cohereClient.embed({texts:[a]});case 2:if(c=b.sent,!(Array.isArray(c.embeddings)&&Array.isArray(c.embeddings[0]))){b.next=7;break}return b.abrupt("return",c.embeddings[0]);case 7:throw new Error("Unexpected embeddings format");case 8:case"end":return b.stop()}},b,this)}));return a}()}])}(Embeddings),CacheEmbeddings=/*#__PURE__*/function(a){function b(a,c){var d;return _classCallCheck(this,b),d=_callSuper(this,b,[{}]),d.vectors=c,d.cohereClient=new CohereClient({token:a}),d}return _inherits(b,a),_createClass(b,[{key:"embedDocuments",value:function(){function a(a){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function b(a){var c=this;return _regeneratorRuntime().wrap(function d(b){for(;1;)switch(b.prev=b.next){case 0:return b.abrupt("return",a.map(function(a){var b=c.vectors.find(function(b){return b.text===a});if(b)return b.vector;throw new Error("\u5411\u91CF\u672A\u627E\u5230: ".concat(a))}));case 1:case"end":return b.stop()}},b)}));return a}()},{key:"embedQuery",value:function(){function a(a){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function b(a){var c,d;return _regeneratorRuntime().wrap(function e(b){for(;1;)switch(b.prev=b.next){case 0:if(c=this.vectors.find(function(b){return b.text===a}),!c){b.next=5;break}return b.abrupt("return",c.vector);case 5:return b.next=7,this.cohereClient.embed({texts:[a]});case 7:if(d=b.sent,!(Array.isArray(d.embeddings)&&Array.isArray(d.embeddings[0]))){b.next=12;break}return b.abrupt("return",d.embeddings[0]);case 12:throw new Error("Unexpected embeddings format");case 13:case"end":return b.stop()}},b,this)}));return a}()}])}(Embeddings);// MemoryVectorStore 类
// CohereEmbeddings 类
// CacheEmbeddings 类
// 导出类
module.exports={MemoryVectorStore:MemoryVectorStore,CohereEmbeddings:CohereEmbeddings,CacheEmbeddings:CacheEmbeddings};