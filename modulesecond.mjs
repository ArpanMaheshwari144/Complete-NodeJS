// This will work on .js file
// function simple() {
//     console.log("Simple")
// }
// module.exports = simple;

// This will work on .mjs file
// This is for ES6 and for using ES6 we write "type":"module"
export function simple() {
    console.log("Simple is Complex")
    return 45
}

export function simple2() {
    console.log("Simple2 is Complex")
}

// default function
export default function simple3() {
    console.log("Simple3 is Complex default")
}