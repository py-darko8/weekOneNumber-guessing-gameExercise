
//WEEK ONE CLASS EXERCISE
let developerName = "Papa Yaw Darko"
const cohortYear = 2026
let currentScore = 80
    currentScore+=15
console.log(typeof currentScore)
console.log(typeof developerName)
let greetingMessage = "Hello, my name is " + developerName + " and I am part of GEN " + cohortYear + "!"

//alert(greetingMessage)

//WEEK ONE ASSIGNMENT
let itemPrice = 250
let taxRate  = 0.15
let shippingFee = 35
let totalBill = itemPrice * taxRate + shippingFee
let isPremiumMember = false
let qualifiesForFreeShipping = (totalBill >= 300 || isPremiumMember === true)
console.log(totalBill)

console.log(qualifiesForFreeShipping)