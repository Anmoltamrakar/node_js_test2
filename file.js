//normal java script cant do these file handeling features 
// node js give u fs module through which it can interact with files


const { ifError } = require("assert");
const fs = require("fs");

//syncroous call
// fs.writeFileSync("./test.txt","Hey there");
//create text.txt file

//async
//fs.writeFile("./test.txt", "hello world async", (err) => {} )





    //read file syncronously and retrn value of the file
//  const result = fs.readFileSync("./contacts.txt", "utf-8");
//  console.log(result);


// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("error",err);
//     }else{
//         console.log(result);
//     }
// })


//add and collect data in files
//fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
//fs.appendFileSync("./test.txt", 'hey there\n');



//fs.appendFileSync("./test.txt", '${Date.now()} Hey there\n');

//create copy of data in new file

//fs.cpSync("./test.txt", "./copy.txt")

//delete file
//fs.unlinkSync("./copy.txt");

//shows ststus of the file
//console.log(fs.statSync("./test.txt"));


// create main directory
//console.log(fs.statSync("./test.txt"));
//fs.mkdirSync("my-docs/a/b", {recursive: true});
