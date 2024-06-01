let num4 = 10
if (num4 > 12) {
    console.log(`${num4} is a positive number`)
} else {
    console.log(`${num4} is a negative number`)
}

let num5 = 0
if ( num5 > 0) {
    console.log(`${num5} is a positive number`)
} else if (num5 < 0) {
    console.log(`${num5} is a negative number`)
} else if (num5 == 0) {
    console.log(`${num5} is zero`)
} else{
    console.log(`${num5} is not a number`)
}

let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

let dayUserInput = 'What day is today ?'
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
// One
// let drivingAge = prompt('Enter your age');
// const legalAge = 18
// let yearsLeft = legalAge - drivingAge
// if (drivingAge >= 18) {
//     console.log( 'You are old enough to drive.')
// } else { 
//     console.log(`You are left with ${yearsLeft} years to drive`)
// }

// Two

// let yourAge = prompt('Enter your Age');
// const myAge = 24
// let diff = yourAge - myAge
// if (myAge > yourAge) {
//      console.log('I am older than you')
// }
// else {
//     console.log(`You are ${diff} years older than me`)
// }

// Three

let a = 4
let b = 3
a > b
    ?console.log(`${a} is greater than ${b}`)
    :console.log(`${a} is less than ${b}`)

// Four

// let num6 = prompt('Enter number')
// if (num6 % 2 === 0) {
// console.log('The number is even')
// } else {
//   console.log('The number is odd')
// }

// Level 2

// //let grades = prompt('Input Marks')
// switch (true) {
// case grades >=80:
//   console.log('A')
//   break
// case grades >=70:
//   console.log('B')
//   break
// case grades >=60:
//   console.log('C')
//   break
// case grades >=50:
//   console.log('D')
//   break
// default:
//   console.log('F')
// }
// Two
// let season = prompt('Enter month')
// let month = season.toLowerCase()
// if ( season === "September" || season ==="October" ||season === "November") {
//   console.log('The season is Autumn')
// } else if ( season === 'December' || season === 'January' || season ==='February') {
//   console.log('The season is Winter')
// } else if (season === 'March' || season === 'April' || season === 'May') {
//   console.log('The season is Spring')
// } else if ( season === 'June' || season === 'July' || season === 'August'){
//   console.log('The season is Summer')
// } else {
//   console.log('Month invalid')
// }

// let month = prompt('Enter Month');
// let season;

// switch (month) {
//   case 'September':
//   case 'October':
//   case 'November':
//     season = 'Autumn';
//     break;
//   case 'December':
//   case 'January':
//   case 'February':
//     season = 'Winter';
//     break;
//   case 'March':
//   case 'April':
//   case 'May':
//     season = 'Spring';
//     break;
//   case 'June':
//   case 'July':
//   case 'August':
//     season = 'Summer';
//     break;
//   default:
//     season = 'Invalid month';
// }

// console.log(`The season is: ${season}`);

// let day2 = prompt('What is the day today?')
// let newDay = day2.toLowerCase()
// if(newDay === 'monday' || newDay === 'tuesday' || newDay === 'wednesday'  || newDay === 'thursday' || newDay === 'friday') {
//   console.log(`${newDay} is a working day`)
// } else if (newDay === 'saturday' || newDay === 'sunday') {
// console.log(`${newDay} is a weekend`)
// } else {
//   console.log('Day invalid')
// }

const arr = Array(12).fill('x')
console.log(arr)

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
numbers[1] = 20
console.log(numbers)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] 
let lastIndex = countries.length -1
console.log(countries)
console.log(countries[lastIndex])

const mix = ['Fasha', 22, false, {cities: ['Nairobi, Nakuru, Kisumu, Eldoret']}]
let access = mix[1]
mix[0] = 'Faith'
console.log(access)
console.log(mix)

let split = 'Javascript'
console.log(split.split(''))
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(','))

let txt = 'I love JavaScript. It is interesting'
console.log(txt.split(' '))

const firstArray = [1, 2, 3]
const secondArray = [4, 5, 6]
const firstSecond = firstArray.concat(secondArray)
console.log(firstSecond)