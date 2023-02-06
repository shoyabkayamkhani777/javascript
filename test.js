//1Take two numbers and take a value which should be the sum of the two numbers plus some other number. Now findout the 3rd number.
//answer 1

let a = 20;
let b = 30;
let sumOfThreeNumber = 100;
let c = sumOfThreeNumber - a - b;
console.log(c);

/*2Ask the below questions:
What is your English marks in 10th?
What is your Science marks in 10th?
What is your Math marks in 10th?
What is your Hindi marks in 10th?
What is your SST marks in 10th? Now calculate percentage by taking all the 5 subjects numbers.*/

//answer2
let English = Number(prompt("English number "));

let Science = Number(prompt("Science number "));

let Math = Number(prompt("Math number "));

let Hindi = Number(prompt("Hindi number "));

let Sst = Number(prompt("SST number"));

let total = English + Science + Math + Hindi + Sst;
let full = 500;

alert((total / full) * 100);

/*3In which century were your born? find out by asking birth year. Use Math.floor function to remove decimal portion of the century*/
// answer 3
let dateOfBirthYear = Number(prompt("what is  your dateOfBirthYear"));
let century = Math.floor(dateOfBirthYear / 100);
alert(century);
// or
if (dateOfBirthYear >= 1900 && dateOfBirthYear <= 2000) alert("19century");
else if (dateOfBirthYear > 2000 && dateOfBirthYear <= 3000) alert("20century");
else alert("sorry,tryagain");

/**Add 20 in your name and check value in console. Add true to your name and check output Add 30+"Wecode" and check type of the final value. */
//answer4
console.log("shoyab" + 20);
console.log("True" + "shoyab");
console.log(30 + "wecode");

//5. Create Reverse Game. Ask any question with 2 possible answers. If user selects first option then show second option in alert and vice versa.*/
//answer5
let whatYouLike = prompt("whatyoulike whatup or instagram");

if (whatYouLike === "whatup") alert("instagram");
else if (whatYouLike === "instagram") alert("whatup");

//6.Test below conditions using &&, || and not logical operators. Take any number check if number is even and also check if number is multiple of 4 or not. If both conditions are true then check if number is less than 100 or number is 84 or not.
//answer 6
let number = 20;
if (number % 2 !== 1 && number % 4 === 0) {
  console.log("true");
} else {
  console.log("false");
}
if (number > 100) console.log("yes");
else if ((number = 84)) console.log("no");

//7.Take city temprature. If temp is less than 10 degree then print very cold. If city temp is less than 30 and greater than equal to 10 then print cold. If temp is between 30 to 40 then print Hot. Else print Very hot
//answer 7
let cityTemprature = Number(prompt("what is your city temprature"));

if (10 > cityTemprature) {
  console.log("very cold");
} else if (cityTemprature >= 10 && cityTemprature < 30) {
  console.log("cold");
} else if (cityTemprature >= 30 && cityTemprature < 40) {
  console.log("hot");
} else if (cityTemprature >= 40) {
  console.log("very hot");
}

/*8.Using prompt ask user about his/her age. If user is greater than 18 then show user message "Do you want to open account?" If yes click on Okay button then ask your 4 below questions

What is your name ?
What is your aaadhar number ?
What is your address?
What is your mobile number? and print all these details in console. If click on cancel then show message "Sorry, please visit again."
*/
//answer 8
let age = Number(prompt("what is your present age"));

if (age >= 18) {
  alert("do you want to open account");
  let a = prompt("what is your name");
  let b = prompt("what is your aadhar number");
  let c = prompt("what is address");
  let d = prompt("what is mobile number");
  confirm(a + b + c + d);
} else alert("sorry,please visit again");

//9..Create a simple calcultor. Firslty ask your about the operation. Like "What do you want to do?" User can type choice in any way like +,- or plus, minus or add, sub etc. After that ask user about first number and then second number and finally show the desired output.
//answer 9
let calculater = prompt(
  "which oprater do you like to use for example +,- ,/,%,*,"
);
let number1 = Number(prompt("number 1"));

let number2 = Number(prompt("number 2"));

if (calculater === "+") alert(number1 + number2);
else if (calculater === "-") alert(number1 - number2);
else if (calculater === "/") alert(number1 / number2);
else if (calculater === "*") alert(number1 * number2);
else if (calculater === "%") alert(number1 % number2);

//10..Who is most intelligent in your family? Ask 10th percentage of each family member and check who got the highest marks. If total family members are more than 4 then you can use Math.max() function
// answer 10
let shoyabPercentage = 99;
let devenderPercentage = 98;
let bittuPercentage = 90;
let ajeetPercetage = 88;
let tahirPercentage = 33;
let topper = Math.max(
  shoyabPercentage,
  devenderPercentage,
  bittuPercentage,
  ajeetPercetage,
  tahirPercentage
);

console.log(topper); 
//----------------------------------- 


