// for (i = 0; i <= 5; i++) {
//     console.log(`${i} * ${i} = ${i * i}`)
// }

// const numbers = [1, 2, 3, 4, 5]
// const neArr = []

// for(let i = 0; i < numbers.length; i++){
//  neArr.push(numbers[i] **2)
// }
// console.log(neArr) 


// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }

// let i = 0
// do{
//     console.log(i)
//      i++
// }
// while()
const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
    console.log(num **2)
}

const fruits = ['Apple', 'mango', 'Orange', 'Grapes']
const newArr = []
for (const fruit of fruits) {
    newArr.push(fruit.toUpperCase())
}
console.log(newArr)


for(let i = 0; i <= 5; i++) {
if(i == 4) {
    break
} console.log(i)
}

for(let j = 0; j<=6; j++) {
    if(j==3) {
        continue
    } console.log(j)
}