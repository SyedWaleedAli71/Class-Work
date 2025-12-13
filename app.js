// JS-Practice
// var question = "Your Species ?";
// var defaultAnswer = "Human";
// var spec = prompt(question, defaultAnswer);
// alert(spec);

// 

// var numberOfCats = prompt("How many cats?");

// var tooManyCats = numberOfCats + 1;
// alert(numberOfCats, tooManyCats);

//
// var city = prompt("Enter Your City...!");
// if (city == "karachi") {
//     alert("Barish Ho Rhi hai....!")
// }
// if (city == "Islamabad") {
//     alert("Welcome to Islamabad....!")
// } else {
//     alert("Try Again")
// }

//

// var age = +prompt("Enter Your Age");
// if (age >= 20) {
//     alert("Eligible")
// } else {
//     alert("Not Eligible")
// }


// 


// var marks = +prompt("Enter Your Marks");
// if (marks >= 80) {
//     alert("Eligible")
// } else {
//     alert("Not Eligible")
// }
// 

// var marks = +prompt("Enter Your Marks");
// if (marks >= 90) {
//     alert("You are Eligible for Website Development");
// } else if (marks >= 80){
//     alert("You are Eligible for Graphic Degign");
// }
//  else if (marks >= 70){
//     alert("You are Eligible for UI/UX Designing");
// }
//  else if (marks >= 60){
//     alert("You are Eligible for App development");
// }
//  else if (marks >= 50){
//     alert("You are Eligible for Amazon");
// }else{
//     alert("Yor are not Eligible for the Course");
// };

// var yourTicketNumber = +prompt("Enter Your Ticket Number");
//  if (yourTicketNumber !== 487208) {
//  alert("Better luck next time.");
//  }

//  else if (yourTicketNumber === 487208) {
//  alert("Congratulations! You have won a prize.");
//  }

// 

// var marks = +prompt("Enter your marks");

// if (marks >= 80) {
//     alert("A Grade");
// }

// else if (marks >= 60) {
//     alert("B Grade");
// }

// else {
//     alert("Fail");
// }

// 
// var collegeName = prompt("Enter Your college Name");

// if(collegeName === "Sir Adamjee"){
//     alert("Congratulation...!")
// } else if (collegeName !== "Sir Adamjee") {
// alert("Not Eligible")
// } 

// 

// var userName = prompt("Enter Your Name...");

// if(userName === "Waleed"){
//     alert("Congratulation...!")
// } else if (userName !== "Waleed") {
//     alert("Come back")
// }

// 
//    Class Work   //
// 
// var city = ["karachi","lahore","islamabad","multan"];
// var userInput = prompt("Enter city name");

// var matchfound = false;

// for (var i = 0; i < city.length; i++){
// if(userInput === city[i]);
// matchfound = true;
// alert(userInput  +  " is the cleanest city");
// break
// }

// if(matchfound === false){
//     alert("It' not on the list...");
// }
// 
// var topTen = [1,2,3,4,5,6,7,8,9,10];
// var passOut = [11,12,13,14,15];
// var userInput = +prompt("Enter yor Roll Number..")

// var istopTen = false;
// var ispassOut = false;

// for (var i = 0; i < topTen.length; i++){
// if ( userInput === topTen[i]){
//     istopTen = true;
//     break
// }
// }

// for( var j = 0; j < passOut.length; j++){
//     if( userInput === passOut[j]){
//         ispassOut = true;
//         break

//     }
// }
// if(istopTen){
//     alert("You are among top ten student")
// }

// else if(ispassOut){
//     alert("You are among Pass out student")
// }


// else{
//     alert("You are faild")
// }

// 

// slice
// let word = "Pakistan";
// console.log(word.slice(2));

// // Slice
// let text = "Pakistan";
// console.log(text.slice(-3));

// // Substring
// let city = "Pakistan";
// console.log(city.substring(3));
// // Slice
// let month = prompt('Enter a month name');
// let shortMonth = month.slice(0,3);
// console.log(shortMonth);
// 

// let firstName = ["Usama","Bilal","Hassan","Raza","Waleed","Aaraiz","Hashir"];
// let lastName = ["Ali","Khan","Yusuf","Sheikh"];

// let fullName = [];

// for(let i = 0; i < firstName.length; i++){
//     for (let j = 0; j <=lastName.length; j++){
//         fullName.push(firstName[i] + " " + lastName[j])
//     }

// }
// document.writeln(fullName)
// console.log(fullName)
// 

// Q.1
// for (let i = 0; i <10; i++){
//     console.log(i)
// }
// 
// Q.2
// for (let i = 1; i <= 12; i++) {
//     console.log(i)
// }
// 
// Q.3
// for (var i = 0; i <= 4; i++);
// console.log(i)
// 
// 
// Sat, Dec 06
// 
// let fullName = `jawan Pakistan`;
// let last = fullName.slice(0,7)
// let num = fullName.charAt(6);
// let lastIndex = fullName.lastIndexOf(-8)

// console.log(lastIndex);

// 
// let text = `if you have control you're not moving fast enough`;
// alert(text);
// for (var i = 0; i<text.length; i++){
//     if (text.slice(i,i+7) === "control"){
//         text=text.slice(0,i)+"under"+ text.slice(4+7)
//         alert(text)
//         break
//     }
// }
 
// 
// let textNum = `if you have control you're not moving fast enough`;
// alert(textNum);
// for (var i = 0; i<textNum.length; i++){
//     if (textNum.slice(i,i+7) === "control"){
//         textNum=textNum.slice(0,i)+"under"+ textNum.slice(4+7)
//         alert(textNum)
//         break
//     }
// }

// 
// var cd = 99;
// cd=cd +1;
// console.log(cd)
// 

// 
// let pakisTan = `East Pakistan was the eastern province of Pakistan between  and 1971`;
// alert(pakisTan);
// for (var i = 0; i<pakisTan.length; i++){
//     if (pakisTan.slice(i , i + 4) === "1971"){
//         pakisTan = pakisTan.slice(0,i) + "1956" + pakisTan.slice(i+4)
//         alert(pakisTan)
//         break
//     }
// }

// 
// Saturday dec 13   ******
//        26
// Rounding numbers

// let x = 12.88 ;
// let y = Math.round(x)

// console.log(y);
// 
// let a = 128.74435 ;
// let b = Math.round(a)

// console.log(b)
// 

// let Q = 10.9999 ;
// let z = Math.round(Q)

// console.log(z)
// 

// let rm = Math.random()

// let e = (rm*6000)+1
// let d = Math.floor()

// console.log(e);
// 

// let userName = prompt("Enter your Name..");
// let userEmail = prompt("Enter your Email..");
// let pass = prompt("Enter your Password..")

// let rm = Math.random()
// let e = (rm*6000)+1
// let d = Math.floor(e)

// document.writeln(userName+ "<br>" + userEmail  + "<br>"+ pass  + "<br>"+ d);

// 

// let e = "33";
// let s = parseInt(e)+22
// let d = parseFloat("18.6555");
// console.log(d);

// Converting strings to numbers, numbers to strings
// 
let numBer = "12345"
let conVert = Number(numBer);
console.log(typeof conVert, conVert);
// 

let numBer_2 = 12345;
let conVert_2 = numBer_2.toString();

console.log(typeof conVert_2, conVert_2);