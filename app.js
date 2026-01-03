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
// let numBer = "12345"
// let conVert = Number(numBer);
// console.log(typeof conVert, conVert);
// // 

// let numBer_2 = 12345;
// let conVert_2 = numBer_2.toString();

// console.log(typeof conVert_2, conVert_2);
// 
// 30
// Controlling the length of decimals
// ......



// 31
// Getting the current date and time
// 
// let date = new Date()
// console.log(date);
// 

// let month = new Date().getMonth() + 1;
// console.log(month);
// 

// let year = new Date().getFullYear() + 1;
// console.log(year);
// 
// let day = new Date().getDay();
// console.log(day);

// let hours = new Date().getHours();
// console.log(hours);

// let second = new Date().getSeconds();
// console.log(second);
// 
// let milliSecond = new Date().getMilliseconds();
// console.log(milliSecond);
// 

// let hours = new Date().getTime();
// console.log(hours);

// 
// let now = new Date()
// console.log("MilliSeconds since 1 jan 1970",now.getTime());

//         32   ****
// Extracting parts of the date and time
//         33 
// Specifying a date and time
//         34
// Changing elements of a date and time
// 

// let days = ["Sunday","Monday","Tuesdaya","Wednesday","Thursday","Friday","Saturday"];
// let today = new Date().getDay();
// console.log(days[today]);
// 

// let d = new Date();
// d.getDay()
// console.log(d);
// 
// let e = new Date();
// e.setMonth(11)
// console.log(e);
// // 
// let f = new Date();
// f.setTime(13)
// console.log(f);
// // 
// let x = Math.random();
// let d = (x*3000)+3;
// let g = Math.floor(d)

// console.log(g);
// 

// let userName = prompt("Enter your Name..");
// let userEmail = prompt("Enter your Email..");
// let PassWord = prompt("Enter your password..");

// let x = Math.random();
// let d = (x*3000)+3;
// let g = Math.floor(d);

// console.log(`User Name  : ${userName}User Email : ${userEmail}
// Password   : ${PassWord}Random No (x) : ${x}Calculated (d): ${d}Final ID (g)  : ${g}`);

// 
// 20 DEC 2025

// let setTime = new Date()
// setTime.setTime(22)
// console.log(setTime);

// 

// let getTime = new Date()
// getTime.getTime()
// console.log(getTime);

// 
//      FUNCTION       *******
// Q.1
// function zee(){
// alert("Hello World")
// }   
// zee()

// Q.2

// let a = 2;
// let b = 2;

// function see(a,b){
//     console.log(a*b);
    
// }
// see(1,4);
// see(3,3);


// for (let i = 1; i <= 10; i++) {
    //   console.log("Student Roll Number: " + i);
    // }

    // let userInput = +prompt("Enter number") 


// function see(table){
//     for (let i = 1; i <= 10; i++){
// console.log(table + " X " + i + " = " + (table * i));

//     }
// }
// see(3);

// 

// function data(a,b){
// console.log(a,b);
// }
// data("Apple", 88)


// Q.2
// function quiz(a){
//     let s = prompt(a)
// console.log(s);
// }

// function pass(x,y){
//     let n = 5;
//     return x + y - n;
// }

// let x = pass(1,7);
// x = x * 4;
// console.log(x);


//Q:1) Write a JavaScript function that uses Date 
// and Time methods to display the current date, time, 
// and a greeting based on the current hour
// ANS___
// Good Evening
// Date: 20/12/2025
// Time: 07:45 PM 
// function newDat(a){
//     let s = prompt("Enter prompt")
//     let getTime = new Date()
// getTime.getTime()
// console.log(s);
// console.log(getTime);
// }
// newDat()

// 
// GPT
// function newDat(){
//     let s = prompt("Enter prompt");
//     let getTime = new Date();

//     console.log("User Input: " + s);
//     console.log("Current Date/Time: " + getTime);
//     console.log("Milliseconds since Jan 1, 1970: " + getTime.getTime());
// }

// newDat();

// 
// function newTime(a){
//     let s = prompt("Enter prompt Hours")
//     let getTime = new Date()
// getTime.getHours()
// console.log(s);
// console.log(getTime);
// }
// newTime()

// Q:2)  Write a JavaScript function that uses Date 
// and Time methods to determine whether today is a 
// working day or weekend and display the current daily 
// status based on time 
// Ans___
// Status Report:
// Day: Monday
// Date: 20/12/2025
// Time: 07:30
// Day Type: Working Day
// Current Mode: Morning Routine Time

// 27 DEC 2025
// Chapter no:39 Switch Statements:

// let p = prompt("Enter your Age..");
// switch(p){
//     case "10":
//     alert("School Age");
//     case "22":
//         alert("Uni Age");
//         case "25":
//             alert("Job Age")
// }

// Task..
// let p = +prompt("Enter Your Number..")
// switch (p) {
//   case 0:
//     day = "Start of the Week..";
//     alert(day)
//     break;
//   case 1:
//     day = "Start of the Week..";
//     alert(day)
//     break;
//   case 2:
//      day = "Start of the Week..";
//      alert(day)
//     break;
//   case 3:
//     day = "Start of the Week..";
//     alert(day)
//     break;
//   case 4:
//     day = "Mid of the Week..";
//     alert(day)
//     break;
//   case 5:
//     day = "Mid of the Week..";
//     alert(day)
//     break;
//   case 6:
//     day = "Mid of the Week..";
//     alert(day)
//       break;
//   case 7:
//     day = "Weekend..";
//     alert(day)
// }

// Task..
//  function code(){
//     let cal = document.getElementById("zip").value;
//     let ct  ;
//     switch(cal){
//         case "22220":
//         ct = "Lahore";
//         break;
//         case "11110":
//         ct = "Faisalabad";
//         break;
//     }
    
// document.getElementById("city").value =ct;

//  }
// code();

// 
// Task..
//  function code(){
//     let cal = document.getElementById("name").value;
//               document.getElementById("quantity").value =ct;
//     let price = 0;
//     let ct  ;

//     switch(cal){
//         case "Iphone":
//         ct = "10 Piece available";
//         break;
//         case "Tecno":
//         ct = "15 Piece available";
//         break;
//     }
    

//  }
// code();

// G00P00T00
// function calculate() {
//   let mobile = document.getElementById("name").value;
//   let quantity = document.getElementById("qty").value;
//   let price = 0;

//   switch (mobile) {
//     case "Iphone":
//       price = 200000;
//       break;

//     case "Tecno":
//       price = 40000;
//       break;

//     default:
//       document.getElementById("result").innerHTML = "Mobile not available";
//       return;
//   }

//   let total = price * quantity;

//   document.getElementById("result").innerHTML =
//     "Mobile: " + mobile + "<br>Price per piece: " + price + 
//     "<br>Quantity: " + quantity + "<br>Total Price: " + total;
// }

// 39. switch statements: how to start them
// 40. switch statements: how to complete them
// 41. while loops
// 42. do...while loops
// 43. Placing scripts
// 44. Commenting
// 45. Events: link..
// 47. Events: button
// 48 Events: fields
// 49 Reading field values
// 50 Setting field values

// Task..
// let questions = [
//   {
//     q: "HTML stands for?",
//     a: "Hyper Text Markup Language",
//     b: "High Text Machine Language",
//     c: "Hyperlinks Text Mark Language",
//     correct: "a"
//   },
//   {
//     q: "JavaScript is a?",
//     a: "Programming Language",
//     b: "Markup Language",
//     c: "Styling Language",
//     correct: "a"
//   },
//   {
//     q: "Which loop runs at least once?",
//     a: "for",
//     b: "while",
//     c: "do while",
//     correct: "c"
//   },
//   {
//     q: "Which keyword is used for function?",
//     a: "func",
//     b: "function",
//     c: "method",
//     correct: "b"
//   },
//   {
//     q: "Which symbol is used for comments?",
//     a: "//",
//     b: "##",
//     c: "**",
//     correct: "a"
//   }
// ];

// let index = 0;
// let score = 0;

// function startQuiz() {
//   document.getElementById("startBtn").style.display = "none";
//   document.getElementById("quiz").style.display = "block";
//   showQuestion();
// }

// function showQuestion() {
//   let q = questions[index];
//   document.getElementById("question").innerHTML = q.q;
//   document.getElementById("optA").innerHTML = q.a;
//   document.getElementById("optB").innerHTML = q.b;
//   document.getElementById("optC").innerHTML = q.c;
// }

// function checkAnswer(ans) {
//   if (ans === questions[index].correct) {
//     score++;
//   }

//   index++;

//   if (index < questions.length) {
//     showQuestion();
//   } else {
//     document.getElementById("quiz").innerHTML =
//       "<h2>Quiz Finished</h2>" +
//       "<p>Your Score: " + score + " / " + questions.length + "</p>";
//   }
// }

// 3   JAN    2025
// Chapter 51. Reading and setting paragraph text
 

// var x = +prompt("Enter Your Name ");
// if (x === 33){
//     console.log("welcome");
    
// };

// 
// function userInput(){
//     let user = prompt("Enter Your Name ");
// alert(user);
// }
// userInput();

// 
//***** Calculator **** //

