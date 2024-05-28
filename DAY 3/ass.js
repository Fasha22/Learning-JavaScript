// Level 1

let first_name = 'Faith'
let lastName = 'Tarbei'
let country = 'Kenya'
let city = 'Nairobi'
let age = 22
let isMarried = false
let Year = 2024
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof Year)

let num1 = '10'
let num2 = 10
console.log(typeof num1)
console.log(typeof num2)

let num3 = parseInt('9.8')
console.log(typeof num3)

let truthyValue1 = 5
let truthyValue2 = 'Fasha'
let truthyValue3 = true
let falsyValue1 = 0
let falsyValue2 =''
let falsyValue3 = null
console.log(truthyValue1, truthyValue2, truthyValue3, falsyValue1, falsyValue2, falsyValue3)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 <= 3)
    console.log(4 == 4)
        console.log(4 === 4)
        console.log(4 != 4)
        console.log(4 !== 4)
        console.log(4 != '4')
        console.log(4 == '4')
        console.log(4 === '4')

let word1 = "python"
let word2 = "jargon"
console.log(word1 == word2)


console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

let word3 = 'python,jargon'
console.log(word3.includes('on'))

let Now = new Date()
console.log(Now.getFullYear())
console.log(Now.getMonth())
console.log(Now.getDay())
console.log(Now.getDate())
console.log(Now.getMinutes())
console.log(Now.getHours())
console.log(Now.getTime())


//level 2

// let b = parseFloat(prompt("Enter base:"))
// let h = parseFloat(prompt("Enter height:"))
// const area = 0.5 * b * h
// console.log(`The area of the triangle is ${area}`)


// const a = parseFloat(prompt("Enter side a:"))
// const b = parseFloat(prompt("Enter side b:"))
// const c = parseFloat(prompt("Enter side c:"))
// const perimeter = a + b + c
// console.log(`The perimeter of the triangle is ${perimeter}`);

// let l = parseFloat(prompt("Enter length:"))
// let w  = parseFloat(prompt("Enter width:"))
// const perimeter = (l + w ) * 2
// console.log(`The perimeter of the rectangle is ${perimeter}`)


// let r = parseFloat(prompt("Enter radius:"))
// const PI = 3.14
// const area = PI * r * r
// const circumference = 2 * PI * r
// console.log(`The area of the circle is ${area}`)
// console.log( `The circumference of the circle is ${circumference}`)

const slope = 2
const y = -2
const x = (9 + 2)/2
// console.log('Slope', slope)
console.log('y (0,', y +')')
console.log('x(', x + ', 0)')

const x1 = 2
const y1 = 2
const x2 = 6
const y2 = 10
const X = x2-x1
const Y = y2-y1
console.log(Y/X)

// const H = parseFloat(prompt('Enter Hours'))
// const R =parseFloat(prompt('Enter rate per hour'))
// const pay = H * R
// console.log('Your weekly earnings is:', pay)


// const userName = prompt("Enter your name:")
// const message = (userName.length > 7) ? "Your name is long." : "Your name is short."
// console.log(message)

let firstName4 = 'Clinton';
let lastName4 = 'Yetayeh';

const output = (firstName4.length > lastName4.length    ) ? `Your first name ${firstName4} is longer than your family name, ${lastName4}` :`Your first name ${lastName4} is longer than your family name, ${firstName4}`

console.log(output)



