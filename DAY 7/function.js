function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
addTwoNumbers()

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10))

function square(num) {
    return num*num
}
console.log(square(10))

function sum(num1,num2) {
    return num1 + num2
}
console.log(sum(10,5))

function sumOfArray(arr) {
    let sum = 0
    for(i = 0; i < arr.length; i++ ) {
        sum = sum + arr[i]
    }
return sum
}
const numbers = [1,2,3,4,5,6,7,8]
console.log(sumOfArray(numbers))

const sumAll = (...args) => {
let sum = 0
for(const element of args){
    sum = sum + element
}
return sum
}
console.log(sumAll(1,2,3,4))

// const txt = function() {
//     console.log('This is function day')
// }
// txt()


let sq = (function(n){
    console.log(n*n)
}) (2)

const countries = ['Kenya', 'Uganda', 'Tanzania', 'Rwanda']
const newArr = []
function reverseCountries(countries) {
for (i=0; i < countries.length; i++) {
    newArr.push(countries[i])
} 
newArr.reverse()
console.log(newArr)
}
reverseCountries(countries)