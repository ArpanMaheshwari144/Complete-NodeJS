// This will work on .js file
// const simple = require("./modulesecond.js");
// simple()

// This will work on .mjs file
// This is for ES6 and for using ES6 we write "type":"module" in package.json
// import {
//     simple
// } from "./modulesecond.mjs";
// simple()

// import {
//     simple2 as simple
// } from "./modulesecond.mjs";
// simple()

import simple23 from "./modulesecond.mjs";
simple23()

// import {
//     simple,
//     simple2
// } from "./modulesecond.mjs";
// simple()
// simple2()

// import * as a from "./modulesecond.mjs";
// console.log(a);
// console.log(a.simple());