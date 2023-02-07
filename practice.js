/*//answer 1

let x = 50;

if (x > 60) {
  console.log("pass");
} else {
  console.log("fail");
}
//or
x > 60 ? console.log("pass") : console.log("fail");

//---------------------------------------------------------------------
//answer 2
var a = 5; //first number
var b = 3; //second number

if (a % 2 === 1 && b % 2 === 1) {
  console.log("odd");
} else {
  console.log("even");
}
//or
a % 2 === 1 && b % 2 === 1 ? console.log("odd") : console.log("even");
//----------------------------------------------------------------
//answer 3
let aa = 1;
let bb = 2;
let cc = 3;
let dd = 4;

aa = bb;
bb = cc;
cc = dd;
dd = aa;

console.log(aa, bb, cc, dd);
//-----------------------------------------------------------------------
// answer 4
let q1 = 2;
let q2 = q1 ** 2;
let q3 = q1 ** 3;

let q4 = q1 ** 4;

let q5 = q1 ** 5;

let q6 = q1 ** 6;

let q7 = q1 ** 7;

let q8 = q1 ** 8;

let q9 = q1 ** 9;

let q10 = q1 ** 10;

console.log(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10);
// or
let q11 = 2 * 1;
let q22 = q11 * 2;
let q33 = q11 * 3;

let q44 = q11 * 4;

let q55 = q11 * 5;

let q66 = q11 * 6;

let q77 = q11 * 7;

let q88 = q11 * 8;

let q99 = q11 * 9;

let q100 = q11 * 10;

console.log(q11, q22, q33, q44, q55, q66, q77, q88, q99, q100);
//----------------------------------------------------------------------------
// answer 5
let a1 = 2 + 5 * 10 - 20 ** 2;
let a2 = (20 / 5) * 10 + 10;
let a3 = 10 && 20 + 10 * 10;
let a4 = 30 > 20 && 10 + 4 < 15;
let a5 = (30 > 20 && 10 + 4 < 15) || 10;
let a6 = 30 < 20 || 10 + 5 < 15 || 10;
let a7 = 30 < 20 || (10 + 5 < 15 && 10);
console.log(a1, a2, a3, a4, a5, a6, a7);
//---------------------------------------------------------------------------
// answer 6
let number = 12;
if ("number " % 2 === 0) {
  console.log("yes");
} else {
  console.log("no");
} //or
"number " % 2 === 0 ? console.log("yes") : console.log("no");
//----------------------------------------------------------
//answer 7
let nn = 50;

if (nn % 10 === 0 && nn % 5 === 0) {
  console.log("Yes");
} else {
  console.log("No");
}
//or
nn % 10 === 0 && nn % 5 === 0 ? console.log("Yes") : console.log("no");
//-----------------------------------------------------
//answer 8
let nm = 5;
if (nm * 20 === 100) {
  console.log("yes");
} else {
  console.log("no");
}
//or
nm * 20 === 100 ? console.log("yes") : console.log("no");
//-------------------------------------------------------
//answer9
let number10 = 550;
let totelNumber = 600;
if ((550 / 600) * 100 > 70) {
  console.log("pass");
} else {
  console.log("fail");
} //or
(550 / 600) * 100 > 70 ? console.log("pass") : console.log("fail");
//-------------------------------------------------------------
//answer 10
let age = 21;

age >= 21 ? console.log("adult") : console.log("miner");
//or

if (age >= 21) {
  console.log("adult");
} else {
  console.log("miner");
}

//----------------------------------------------------------
// answer 11

let marks = 70;

if (marks >= 80) {
  console.log("Distinction");
} else if ((80 > marks, marks > 60)) {
  console.log("firstDivision");
} else if ((60 > marks, marks > 40)) {
  console.log("secondDivision");
} else {
  console.log("fail");
}
//---------------------------------------------------------------
*/

for (let i = 1; i <= 100; i % 2 === 0) {
  console.log(i);
}

for (let i = 1; i <= 100; i % 2 === 1) {
  console.log(i);
}
for (let i = 1; i <= 100; i % 5 === 0 && i % 15 === 0) {
  console.log(i);
}
