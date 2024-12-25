"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(b,c){var d=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=d){var g,h,j,k,l=[],a=!0,m=!1;try{if(j=(d=d.call(b)).next,0===c){if(Object(d)!==d)return;a=!1}else for(;!(a=(g=j.call(d)).done)&&(l.push(g.value),l.length!==c);a=!0);}catch(a){m=!0,h=a}finally{try{if(!a&&null!=d["return"]&&(k=d["return"](),Object(k)!==k))return}finally{if(m)throw h}}return l}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _createForOfIteratorHelper(b,c){var d="undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(!d){if(Array.isArray(b)||(d=_unsupportedIterableToArray(b))||c&&b&&"number"==typeof b.length){d&&(b=d);var e=0,f=function(){};return{s:f,n:function(){return e>=b.length?{done:!0}:{done:!1,value:b[e++]}},e:function(a){throw a},f:f}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var g,h=!0,i=!1;return{s:function(){d=d.call(b)},n:function(){var a=d.next();return h=a.done,a},e:function(a){i=!0,g=a},f:function(){try{h||null==d["return"]||d["return"]()}finally{if(i)throw g}}}}function _unsupportedIterableToArray(b,c){if(b){if("string"==typeof b)return _arrayLikeToArray(b,c);var a={}.toString.call(b).slice(8,-1);return"Object"===a&&b.constructor&&(a=b.constructor.name),"Map"===a||"Set"===a?Array.from(b):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(b,c):void 0}}function _arrayLikeToArray(b,c){(null==c||c>b.length)&&(c=b.length);for(var d=0,f=Array(c);d<c;d++)f[d]=b[d];return f}function _classCallCheck(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,_toPropertyKey(c.key),c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _toPropertyKey(a){var b=_toPrimitive(a,"string");return"symbol"==_typeof(b)?b:b+""}function _toPrimitive(a,b){if("object"!=_typeof(a)||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */function b(a,b,c){return Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}),a[b]}function f(b,d,e,f){var g=d&&d.prototype instanceof k?d:k,h=Object.create(g.prototype),a=new B(f||[]);return E(h,"_invoke",{value:w(b,e,a)}),h}function j(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}function k(){}function l(){}function m(){}function q(a){["next","throw","return"].forEach(function(c){b(a,c,function(a){return this._invoke(c,a)})})}function s(b,d){function c(e,f,g,i){var a=j(b[e],b,f);if("throw"!==a.type){var k=a.arg,l=k.value;return l&&"object"==_typeof(l)&&t.call(l,"__await")?d.resolve(l.__await).then(function(a){c("next",a,g,i)},function(a){c("throw",a,g,i)}):d.resolve(l).then(function(a){k.value=a,g(k)},function(a){return c("throw",a,g,i)})}i(a.arg)}var e;E(this,"_invoke",{value:function(a,b){function f(){return new d(function(d,e){c(a,b,d,e)})}return e=e?e.then(f,f):f()}})}function w(a,b,d){var e="suspendedStart";return function(f,g){if(e==="executing")throw Error("Generator is already running");if("completed"===e){if("throw"===f)throw g;return{value:D,done:!0}}for(d.method=f,d.arg=g;;){var h=d.delegate;if(h){var i=x(h,d);if(i){if(i===G)continue;return i}}if("next"===d.method)d.sent=d._sent=d.arg;else if("throw"===d.method){if("suspendedStart"===e)throw e="completed",d.arg;d.dispatchException(d.arg)}else"return"===d.method&&d.abrupt("return",d.arg);e="executing";var k=j(a,b,d);if("normal"===k.type){if(e=d.done?"completed":"suspendedYield",k.arg===G)continue;return{value:k.arg,done:d.done}}"throw"===k.type&&(e="completed",d.method="throw",d.arg=k.arg)}}}function x(b,c){var d=c.method,e=b.iterator[d];if(e===D)return c.delegate=null,"throw"===d&&b.iterator["return"]&&(c.method="return",c.arg=D,x(b,c),"throw"===c.method)||"return"!==d&&(c.method="throw",c.arg=new TypeError("The iterator does not provide a '"+d+"' method")),G;var f=j(e,b.iterator,c.arg);if("throw"===f.type)return c.method="throw",c.arg=f.arg,c.delegate=null,G;var g=f.arg;return g?g.done?(c[b.resultName]=g.value,c.next=b.nextLoc,"return"!==c.method&&(c.method="next",c.arg=D),c.delegate=null,G):g:(c.method="throw",c.arg=new TypeError("iterator result is not an object"),c.delegate=null,G)}function z(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function A(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function B(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(z,this),this.reset(!0)}function C(a){if(a||""===a){var b=a[F];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(t.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=D,b.done=!0,b};return d.next=d}}throw new TypeError(_typeof(a)+" is not iterable")}_regeneratorRuntime=function(){return h};var D,h={},e=Object.prototype,t=e.hasOwnProperty,E=Object.defineProperty||function(a,b,c){a[b]=c.value},n="function"==typeof Symbol?Symbol:{},F=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";try{b({},"")}catch(a){b=function(a,b,c){return a[b]=c}}h.wrap=f;var G={},i={};b(i,F,function(){return this});var o=Object.getPrototypeOf,d=o&&o(o(C([])));d&&d!==e&&t.call(d,F)&&(i=d);var r=m.prototype=k.prototype=Object.create(i);return l.prototype=m,E(r,"constructor",{value:m,configurable:!0}),E(m,"constructor",{value:l,configurable:!0}),l.displayName=b(m,c,"GeneratorFunction"),h.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===l||"GeneratorFunction"===(b.displayName||b.name))},h.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,m):(a.__proto__=m,b(a,c,"GeneratorFunction")),a.prototype=Object.create(r),a},h.awrap=function(a){return{__await:a}},q(s.prototype),b(s.prototype,a,function(){return this}),h.AsyncIterator=s,h.async=function(b,c,d,e,g){void 0===g&&(g=Promise);var j=new s(f(b,c,d,e),g);return h.isGeneratorFunction(c)?j:j.next().then(function(a){return a.done?a.value:j.next()})},q(r),b(r,c,"Generator"),b(r,F,function(){return this}),b(r,"toString",function(){return"[object Generator]"}),h.keys=function(a){var b=Object(a),c=[];for(var d in b)c.push(d);return c.reverse(),function a(){for(;c.length;){var d=c.pop();if(d in b)return a.value=d,a.done=!1,a}return a.done=!0,a}},h.values=C,B.prototype={constructor:B,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=D,this.done=!1,this.delegate=null,this.method="next",this.arg=D,this.tryEntries.forEach(A),!a)for(var b in this)"t"===b.charAt(0)&&t.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=D)},stop:function(){this.done=!0;var a=this.tryEntries[0].completion;if("throw"===a.type)throw a.arg;return this.rval},dispatchException:function(b){function d(a,c){return h.type="throw",h.arg=b,e.next=a,c&&(e.method="next",e.arg=D),!!c}if(this.done)throw b;for(var e=this,f=this.tryEntries.length-1;0<=f;--f){var g=this.tryEntries[f],h=g.completion;if("root"===g.tryLoc)return d("end");if(g.tryLoc<=this.prev){var j=t.call(g,"catchLoc"),k=t.call(g,"finallyLoc");if(j&&k){if(this.prev<g.catchLoc)return d(g.catchLoc,!0);if(this.prev<g.finallyLoc)return d(g.finallyLoc)}else if(!j){if(!k)throw Error("try statement without catch or finally");if(this.prev<g.finallyLoc)return d(g.finallyLoc)}else if(this.prev<g.catchLoc)return d(g.catchLoc,!0)}}},abrupt:function(b,c){for(var d,e=this.tryEntries.length-1;0<=e;--e)if(d=this.tryEntries[e],d.tryLoc<=this.prev&&t.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var f=d;break}f&&("break"===b||"continue"===b)&&f.tryLoc<=c&&c<=f.finallyLoc&&(f=null);var g=f?f.completion:{};return g.type=b,g.arg=c,f?(this.method="next",this.next=f.finallyLoc,G):this.complete(g)},complete:function(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),G},finish:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),A(b),G},catch:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.tryLoc===a){var d=b.completion;if("throw"===d.type){var f=d.arg;A(b)}return f}throw Error("illegal catch attempt")},delegateYield:function(a,b,c){return this.delegate={iterator:C(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=D),G}},h}function asyncGeneratorStep(b,d,f,e,g,h,a){try{var c=b[h](a),i=c.value}catch(a){return void f(a)}c.done?d(i):Promise.resolve(i).then(e,g)}function _asyncToGenerator(b){return function(){var c=this,d=arguments;return new Promise(function(e,f){function g(a){asyncGeneratorStep(i,e,f,g,h,"next",a)}function h(a){asyncGeneratorStep(i,e,f,g,h,"throw",a)}var i=b.apply(c,d);g(void 0)})}}var mysql=require("mysql2"),dotenv=require("dotenv"),cliProgress=require("cli-progress"),bar=new cliProgress.SingleBar({format:"\u63D2\u5165\u8FDB\u5EA6 | {bar} | {percentage}% | \u5269\u4F59\u65F6\u95F4: {eta}s",barCompleteChar:"\u2588",barIncompleteChar:"\u2591"},cliProgress.Presets.shades_classic);dotenv.config();var getTidbConnection=function(){return new Promise(function(a){// 创建一个连接池
var b=mysql.createConnection({host:process.env.TIDB_HOST,// TiDB 的主机地址
port:+process.env.TIDB_PORT,// TiDB 的端口号
user:process.env.TIDB_USERNAME,// MySQL 用户名
password:process.env.TIDB_PASSWORD,// 你设置的 root 用户密码
database:process.env.TIDB_DATABASE// 默认数据库（可以根据需要修改）
});a(b)})},connectToTiDB=function(){return new Promise(/*#__PURE__*/function(){var a=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function c(a,b){var d;return _regeneratorRuntime().wrap(function e(c){for(;1;)switch(c.prev=c.next){case 0:return c.next=2,getTidbConnection();case 2:d=c.sent,d.connect(function(c){if(c)console.error("\u8FDE\u63A5\u5931\u8D25: "+c.stack),b(c);else{console.log("\u5DF2\u8FDE\u63A5\u5230 TiDB\uFF0C\u8FDE\u63A5 ID: "+d.threadId);// 查询 TiKV 节点的状态
var e="SELECT COUNT(*) AS tikv_node_count FROM information_schema.tikv_store_status WHERE store_state = 0;";d.query("SELECT COUNT(*) AS tikv_node_count FROM information_schema.tikv_store_status WHERE store_state = 0;",function(c,e){if(c)console.error("\u67E5\u8BE2\u5931\u8D25: "+c.stack),b(c);else{// 这里假设返回的结果是 RowDataPacket 数组
if(e&&Array.isArray(e)&&0<e.length){var f=e[0].tikv_node_count;console.log("TiKV \u8282\u70B9\u6570\u91CF: ",f)}else console.log("\u6CA1\u6709\u627E\u5230 TiKV \u8282\u70B9\u3002");a()}d.end()})}});case 4:case"end":return c.stop()}},c)}));return function(b,c){return a.apply(this,arguments)}}())},VectorIntoMysql=/*#__PURE__*/function(){function a(b){_classCallCheck(this,a),this.vectorArray=b,this.connection=null,console.log("VectorIntoMysql \u5B9E\u4F8B\u5DF2\u521B\u5EFA")}return _createClass(a,[{key:"beginTransaction",value:function(){function a(){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function a(){var b=this;return _regeneratorRuntime().wrap(function c(a){for(;1;)switch(a.prev=a.next){case 0:return console.log("\u5F00\u59CB\u4E8B\u52A1..."),a.abrupt("return",new Promise(function(a,c){return b.connection?void b.connection.beginTransaction(function(b){b?(console.error("\u4E8B\u52A1\u5F00\u59CB\u5931\u8D25:",b),c(b)):(console.log("\u4E8B\u52A1\u5DF2\u5F00\u59CB"),a())}):c(new Error("\u6CA1\u6709\u6570\u636E\u5E93\u8FDE\u63A5"))}));case 2:case"end":return a.stop()}},a)}));return a}()},{key:"commit",value:function(){function a(){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function a(){var b=this;return _regeneratorRuntime().wrap(function c(a){for(;1;)switch(a.prev=a.next){case 0:return console.log("\u63D0\u4EA4\u4E8B\u52A1..."),a.abrupt("return",new Promise(function(a,c){return b.connection?void b.connection.commit(function(b){b?(console.error("\u63D0\u4EA4\u4E8B\u52A1\u5931\u8D25:",b),c(b)):(console.log("\u4E8B\u52A1\u5DF2\u63D0\u4EA4"),a())}):c(new Error("\u6CA1\u6709\u6570\u636E\u5E93\u8FDE\u63A5"))}));case 2:case"end":return a.stop()}},a)}));return a}()},{key:"rollback",value:function(){function a(){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function a(){var b=this;return _regeneratorRuntime().wrap(function c(a){for(;1;)switch(a.prev=a.next){case 0:return console.log("\u56DE\u6EDA\u4E8B\u52A1..."),a.abrupt("return",new Promise(function(a,c){return b.connection?void b.connection.rollback(function(b){b?(console.error("\u56DE\u6EDA\u4E8B\u52A1\u5931\u8D25:",b),c(b)):(console.log("\u4E8B\u52A1\u5DF2\u56DE\u6EDA"),a())}):c(new Error("\u6CA1\u6709\u6570\u636E\u5E93\u8FDE\u63A5"))}));case 2:case"end":return a.stop()}},a)}));return a}()},{key:"initializeInfoTable",value:function(){function a(){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function a(){var b,c,d,e,f,g;return _regeneratorRuntime().wrap(function h(a){for(;1;)switch(a.prev=a.next){case 0:if(this.connection){a.next=2;break}throw new Error("\u6570\u636E\u5E93\u8FDE\u63A5\u672A\u521D\u59CB\u5316");case 2:return b=this.connection,console.log("\u51C6\u5907\u521B\u5EFA info \u8868\u548C\u63D2\u5165\u6570\u636E"),c="\n      CREATE TABLE IF NOT EXISTS info (\n        time VARCHAR(255) PRIMARY KEY,\n        text TEXT NOT NULL,\n        herf VARCHAR(255) NOT NULL,\n        vector JSON NOT NULL\n      );\n    ",d="\n      INSERT INTO info (time, text, herf, vector)\n      VALUES (?, ?, ?, ?)\n      ON DUPLICATE KEY UPDATE text = VALUES(text), herf = VALUES(herf), vector = VALUES(vector);\n    ",a.prev=6,a.next=9,this.beginTransaction();case 9:return a.next=11,new Promise(function(a,d){console.log("\u6267\u884C\u521B\u5EFA\u8868 SQL: ",c),b.query(c,function(b,c){b?(console.error("\u521B\u5EFA\u8868\u5931\u8D25:",b),d(b)):(console.log("\u8868\u521B\u5EFA\u6210\u529F\u6216\u5DF2\u5B58\u5728"),a(c))})});case 11:bar.start(this.vectorArray.length,0),e=_createForOfIteratorHelper(this.vectorArray.entries()),a.prev=13,g=/*#__PURE__*/_regeneratorRuntime().mark(function a(){var c,e,g,h,i,j,k;return _regeneratorRuntime().wrap(function l(a){for(;1;)switch(a.prev=a.next){case 0:return c=_slicedToArray(f.value,2),e=c[0],g=c[1],h=g.time,i=g.text,j=g.herf,k=g.vectorData,a.next=4,new Promise(function(a,c){b.query(d,[h,i,j,JSON.stringify(k)],function(b,d){b?(console.error("\u63D2\u5165\u6570\u636E\u5931\u8D25:",b),c(b)):(bar.update(e+1),a())})});case 4:case"end":return a.stop()}},a)}),e.s();case 16:if((f=e.n()).done){a.next=20;break}return a.delegateYield(g(),"t0",18);case 18:a.next=16;break;case 20:a.next=25;break;case 22:a.prev=22,a.t1=a["catch"](13),e.e(a.t1);case 25:return a.prev=25,e.f(),a.finish(25);case 28:return bar.stop(),a.next=31,this.commit();case 31:console.log("\u6240\u6709\u6570\u636E\u5DF2\u6210\u529F\u63D2\u5165\u5E76\u63D0\u4EA4\u5230 info \u8868"),a.next=39;break;case 34:return a.prev=34,a.t2=a["catch"](6),a.next=38,this.rollback();case 38:console.error("\u4E8B\u52A1\u5931\u8D25\uFF0C\u5DF2\u56DE\u6EDA:",a.t2);case 39:case"end":return a.stop()}},a,this,[[6,34],[13,22,25,28]])}));return a}()},{key:"close",value:function(){function a(){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function a(){return _regeneratorRuntime().wrap(function b(a){for(;1;)switch(a.prev=a.next){case 0:this.connection&&this.connection.end(function(a){a?console.error("\u5173\u95ED\u8FDE\u63A5\u5931\u8D25:",a):console.log("\u6570\u636E\u5E93\u8FDE\u63A5\u5DF2\u5173\u95ED")});case 1:case"end":return a.stop()}},a,this)}));return a}()},{key:"getVector",value:function(){function a(){return b.apply(this,arguments)}var b=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function a(){var b,c,d;return _regeneratorRuntime().wrap(function e(a){for(;1;)switch(a.prev=a.next){case 0:if(this.connection){a.next=2;break}throw new Error("\u6570\u636E\u5E93\u8FDE\u63A5\u672A\u521D\u59CB\u5316");case 2:return b=this.connection,c="\n      SELECT * FROM info;\n    ",a.prev=4,a.next=7,new Promise(function(a,d){b.query(c,function(b,c){b?(console.error("\u67E5\u8BE2\u5931\u8D25:",b),d(b)):a(c)})});case 7:if(d=a.sent,!(0<d.length)){a.next=12;break}return a.abrupt("return",d);case 12:return console.log("\u672A\u627E\u5230\u7684\u8BB0\u5F55"),a.abrupt("return",null);case 14:a.next=20;break;case 16:return a.prev=16,a.t0=a["catch"](4),console.error("\u83B7\u53D6 vector \u5931\u8D25:",a.t0),a.abrupt("return",null);case 20:case"end":return a.stop()}},a,this,[[4,16]])}));return a}()}],[{key:"create",value:function(){function b(a){return c.apply(this,arguments)}var c=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function c(b){var d;return _regeneratorRuntime().wrap(function e(c){for(;1;)switch(c.prev=c.next){case 0:return console.log("create VectorIntoMysql \u5F00\u59CB"),d=new a(b),c.next=4,getTidbConnection("test");case 4:return d.connection=c.sent,console.log("\u6570\u636E\u5E93\u8FDE\u63A5\u5DF2\u5EFA\u7ACB"),c.abrupt("return",d);case 7:case"end":return c.stop()}},c)}));return b}()}])}();module.exports={connectToTiDB:connectToTiDB,VectorIntoMysql:VectorIntoMysql};