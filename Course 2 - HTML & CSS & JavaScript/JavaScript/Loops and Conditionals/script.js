// console.log('false' == false)

/*x = 300
if (x > 300 || x < 400) {
    console.log("I am in the If block");
} else {
    console.log("I am in the else block");
}*/

/*
You have to make a password checker that checks for the following conditions 
1. The password should be at least six characters long string
2. In case, condition 1 is satisfied, the console should display “Correct Password”
3. In case, condition 1 is not satisfied i.e. password is less than 6 characters long, the console should display “ Password too short”

Please note that the password can be of your choice.i.e. you can change the password given in stub to check for both the cases i.e. for a password of length less than 6 characters and for a password for length more than 6 characters
*/

/*var password = "9Acasd";
// Make the check here
if (password.length >= 6)
    console.log('Correct Password');
else console.log('Password too short');*/

/*var x = 0;
var y = '0';
var z = '2 - 2';
if (x === y) {
    console.log("Pizza");
} else if (x === z) {
    console.log(" Pizza's Over");
} else if (x == y) {
    console.log('More Pizza’s Coming');
} else {
    console.log('Party’s Over go home');
}*/

/*
The normal level for haemoglobin in human is 14 to 17 for men. Assume that x denotes the level of haemoglobin in the human body. You have to write an if...else...if chain that tells whether the haemoglobin level in the person is Low, Normal or High. The input x has to be entered by the user i.e you in the code itself to check for the different values of x.
*/

// var x = 12;
// if (x > 17)
//     console.log('High');
// else if (x >= 14 && x <= 17)
//     console.log('Normal');
// else console.log('Low');

x = 10;

// if(x > 50 && x < 70)
//    console.log('Less than 50');
//    console.log('More than 70');
// else if (x > 70 )
//    console.log('More than 70');
// else
//    console.log('Less than 50');

// if(x > 50 && x < 70){
//    console.log('Less than 50');
//    console.log('More than 70');
// }
// else if (x > 70 )
//    console.log('More than 70');
// else
//    console.log('Less than 50');

// if(x > 50 && x < 70){
//    console.log('Less than 50');
//    console.log('More than 70');
// }
// else if (x > 70 ){
//    console.log('More than 70');
// }
// else{
//    console.log('Less than 50');
// }

/*var a = 0;
var b = 1;
var c = 4;


var smallest;

if (a <= b && a <= c)
    smallest = a;

else if (b <= a && b <= c)
    smallest = b;
else
    smallest = c;

console.log('The smallest number entered is',smallest);*/

// You have to make a country code checker which checks from which country does the dialled number belongs to
// The options are
// 91 - India
// 55 - Brazil
// 81 - Japan
// 30 - Greece
// 47 - Norway
// If a number does not belong from any country, then you have to print "Other World"
// The number needs to be input as CC-XXXX-XXXX (CC being country code)

/*var phoneNumber = '35-2353-1234';
const CC = phoneNumber.substring(0, 2);
switch (CC) {
    case '91':
        console.log('India');
        break;
    case '55':
        console.log('Brazil');
        break;
    case '81':
        console.log('Japan');
        break;
    case '30':
        console.log('Greece');
        break;
    case '47':
        console.log('Norway');
        break;
    default:
        console.log('Other World');
}*/

/*var num = +4567;
var sum, r;
sum = r = 0;

while (num > 0) {
    r = parseInt(num % 10);
    sum += r;
    num = parseInt(num / 10);
}
console.log(sum);*/

/*var x;
for (x = 1; x < 5; x=x+2) {
  console.log(x+1);
}*/

/*var product = 1;
for (var x = 1; x <= 10; ++x)
    product *= x;
console.log(product)*/

// Write a program to print all the numbers divisible by 2 or 3 or 6 from 1 to n, where n will be provided by you

/*var n = 14;
for (var n = 1; n <= 14; ++n) {
    if (n % 2 === 0 || n % 3 === 0 || n % 6 === 0) {
        console.log(n);
    }
}*/

/*var a = 1, b = 1, f;
for (let i = 3; i <= 15; i++) {
    f = a+b;
    a = b;
    b = f;
}
console.log(f)*/

/*for (i = 1; i < 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}*/

/*for (i = 1; i < 10; i++) {
    console.log(i);
    if (i % 3 === 0) {
        break;
    }
}*/

/*const yearArr = [];
for (var a = 2000; a <= 2004; ++a)
    yearArr.push(a);

console.log(yearArr)*/

/* var arr = [2000, 2001,2002,2003,2004];
console.log(arr) */

/* const shoppingList = ["Milk", 2, "Bread", 3, "Potato", 12];
for (var a = 0; a < shoppingList.length; a += 2) {
	console.log(shoppingList[a] + "-" + shoppingList[a + 1]);
} */

/* var carNames = ["Honda", "Ferrari", "Porsche", "Fiat"];
// You have to print the array carNames after you perform each operation.
// Remove Fiat from the end of the array.
carNames.pop();
console.log(carNames);
// Add Mazda to the end of the array.
carNames.push("Mazda");
console.log(carNames);
// Remove Honda from the front of the array.
carNames.shift();
console.log(carNames);
// Add Ford to the front of the array.
carNames.unshift("Ford");
console.log(carNames); */

/* var book = {
	title: "The Lord of the Rings",
	pages: 9250,
	"is-available": true,
};
console.log(book.title);
console.log(book[title]);
 */

/* var music = {
	rock: "guitar",
	classical: "violin",
};
var classical = "rock";
var sound = music[classical];
console.log(sound); */

/* var music = {
	rock: "guitar",
	classical: "violin",
};
var classical = "rock";
var sound = music.classical;
console.log(sound); */

// You have been provided with an object containing different items and their properties
// You need to store the elements that have to be bought in an array named itemList
// The items that have to be bought have the value of key isAvailable as false

/* var itemsToBuy = {
	bread: {
		isAvailable: false,
		quantityToBuy: 2,
	},
	eggs: {
		isAvailable: true,
		quantityToBuy: 0,
	},
	tomatoes: {
		isAvailable: false,
		quantityToBuy: 23,
	},
};

// Create a new array here.
const itemList = [];
// Write the logic for pushing the elements to be bought in the array here
for (const key of Object.keys(itemsToBuy)) {
	if (itemsToBuy[key].isAvailable === false) itemList.push(key);
}

// Print the array here
console.log(itemList); */

/* var person = {
	id: 101,
	email: "alice11@gmail.com",
	personalInfo: {
		name: "Alice",
		address: {
			line1: "Smith Avenue",
		},
	},
};
console.log(person.id); */

/* var person = {
	id: 101,
	email: "alice11@gmail.com",
	personalInfo: {
		name: "Alice",
		address: {
			line1: "Smith Avenue",
		},
	},
};
console.log(person.personalInfo.name);
console.log(person["personalInfo"].name);
console.log(person["personalInfo"]["name"]);
console.log(person.personalInfo["name"]); */

/* var testObject = {
	testKey1: "testValue1",
	"test-Key2": "testValue2",
};
for (const key of Object.keys(testObject)) {
	testObject[key] = testObject[key].concat("New");
}
console.log(testObject); */

/*
const hiFunction = () => console.log("Hi I am a function, you invoked me");
hiFunction(); */

/* var x = 3;
function f() {
	x = x * x;
}
console.log(typeof f());
 */

/* const returnStringFunction = () => "Hi I am being returned by a function";
const returnedString = returnStringFunction();
console.log(returnedString); */

/* var x = function () {
	return 4 * 4;
};
console.log(typeof x);
 */

/* function add(x = 10, y = 20, z = 30){
    return x + y + z;
}
console.log(add(13, 45)); */

/* function add() {
	return arguments[0] + arguments[2];
}
add(1, 345); */

/* var author = {
	name: "Allan Moore",
	books: function () {
		console.log("Allan Moore is famous for his illustrated novels");
	},
};
author.books(); */

/* var match = {
	team1: "Man City",
	team2: "Liverpool",
	winner: function () {
		alert("Man City beat Liverpool 5-0");
	},
};
match.winner(); */

/* var n = 2;
for (var i = n; i < 12; i = i + n) {
	console.log(i);
} */
