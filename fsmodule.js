const fs = require('fs');

// for reading a file
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data)
// })
// console.log("Finished reading file")

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())
// console.log("Finished reading file")

// for writing in a file
// fs.writeFile('file2.txt', "This is a data", () => {
//     console.log("Written to the file")
// });
// console.log("Finished")

b = fs.writeFileSync('file2.txt', "This is a data2")
console.log(b)
console.log("Finished")