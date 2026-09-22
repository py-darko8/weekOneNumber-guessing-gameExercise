document.write("<h2>Hello World</h2>")

console.log("JS CLASS")

//prompt("WORLD AND YOU")


//DATA TYPES


//number data types
let age = 30
console.log(age)
document.write(age)

//string data type
let name = "John"
console.log(name)
document.write(name)

//boolean data type
let isTrue=true
console.log(isTrue)
document.write(isTrue)

//undefined data type
let youHouse;
console.log(youHouse)
document.write(youHouse)

//null data type
let score = null
console.log(score)
document.write(score)

//object data type
let person = {
    name: "John",
    age: 30,
    city: "Accra"
}
console.log(person)
document.write(person)

let person2 = {
    name: "Jane",
    age: 25,
    city: "london"

}

console.log(person2)
document.write(person2)


//arrays
let shoppingList=["milk","bread","eggs"]
console.log(shoppingList)
console.log(shoppingList[2])
console.log(shoppingList[0])

//functions
function addTwoNums(a,b,c){
    let total = a * b + c
   
    console.log(total)
}

addTwoNums(10,50,5)//call the function after defining it
addTwoNums(30,40,4)
addTwoNums(160,350,6)
addTwoNums(70,483,1)

let gen31 = 30
let gen33 = 54
let gen30 = 32
let gen34 = 33

console.log(gen33==54 && gen34 == 54)

// Comparison operators
let myAge = 25
let yourAge = "25"
let anotherAge = 30 

let isEqual = myAge == yourAge // loose comparison(value only)
document.write(isEqual) //true

let isStrictEqual = myAge === yourAge //strict comparison(value+type)
document.write(isStrictEqual) //false


//Concatenation
let firstName = "Sam"
let lastName = "Mensah"
let fullName = firstName + " " + lastName
console.log(fullName)


//WEEK TWO
//Arrays
let fruits = ["Mango", "Banana", "Orange", "Apple"]
console.log(fruits)
fruits[1] = "Pineapple"
console.log(fruits); // ["Mango", "Pineapple", "Orange", "Apple"]

//Adding items to Arrays
fruits.push("Watermelon");
console.log(fruits); // ["Mango", "Pineapple", "Orange", "Apple", "Watermelon"]

//Removing items from Arrays
fruits.pop(); // removes the last item (Watermelon)
console.log(fruits); // ["Mango", "Pineapple", "Orange", "Apple"]

// Conditional Statement
let weather = "sunny"
if (weather === "rainy") {
console.log("Take an umbrella.")
} else if (weather === "cloudy") {
console.log("Maybe carry a jacket.")
} else {
console.log("Enjoy the sunshine!")
}

let day = "Tuesday";
switch (day) {
case "Monday":
console.log("Start of the week!");
break;
case "Tuesday":
console.log("Keep going strong!");
break;
 case "Friday":
console.log("Weekend is near!");
 break;
default:
console.log("Just another day.");
}
 

let grade = "B";
switch (grade) {
case "A":
console.log("Excellent!");
break;
case "B":
console.log("Good Job!");
break;
case "C":
 console.log("Fair.");
break;
default:
console.log("Keep trying!");
}

//loops
let students = ["Sam", "John", "Sarah", "Mimi"]
for (let i = 0; i < students.length; i++) {
console.log(students[i]);
}

//WEEK 3
//FUNCTIONS
function greetUser(name) { 
console.log("Hello, " + name + "! Welcome to our program.")
}

function introduceUser(firstName, age) {
console.log(`My name is ${firstName} and I am ${age} years old.`)
}
// Passing arguments
introduceUser("John", 25)
introduceUser("Mary", 30)

function calculateBill(amount, tax) {
console.log(`The total bill is ${amount + tax} GHC.`)
}
// Passing arguments
calculateBill(50, 5)
calculateBill(120, 15)

// Normal function
function greet(name) {
return "Hello, " + name;
}
// Arrow function
const greetArrow = (name) => {
return "Hello, " + name;
};
console.log(greetArrow("James"))
const greetArrowShort = name => "Hello, " + name
console.log(greetArrowShort("Sarah"))

//week 4
//Objects
const persona = {
name: "John",
age: 25,
isStudent: true
}
console.log(persona)
persona.age = 26           
persona["isStudent"] = false 
console.log(persona)

//Objects with Methods (Functions inside Objects)
const student = {
name: "Ama",
age: 20,
greet: function() {
console.log("Hello, my name is " + this.name)
  }
}

//Nested Objects
const user = {
id: 101,
profile: {
username: "coder123",
email: "coder@example.com"
  }
}
console.log(user.profile.username) // Output: coder123

//Arrays of Objects
const cars = [
  { brand: "Toyota", year: 2020 },
  { brand: "Honda", year: 2018 },
  { brand: "Ford", year: 2022 }
];
console.log(cars[1].brand); // Output: Honda

//Looping Through Objects
for (let key in person) {
console.log(key + ": " + person[key]);
}



