// Level 1
let challenge = ' 30 Days of Javascript '
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,2))
console.log(challenge.substring(3))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(''))

let String = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(String.split(' '))
console.log(challenge.replace('Javascript','Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let pos = 'You cannot end a sentence with because because because is a conjunction'
console.log(pos.indexOf('because'))
console.log(pos.lastIndexOf('because'))
console.log(pos.search('because'))
console.log(challenge.trim())
console.log(challenge.startsWith(' 30 Days'))
console.log(challenge.endsWith('Javascript '))
console.log(challenge.match('a'))

let con = '30 Days of'
console.log(con.concat(' Javascript'))
console.log(challenge.repeat(2))

// Level 2
let quote= "The quote '\ There is no exercise better for the heart than reaching down and lifting people up.\' \
by John Holmes teaches us to help one another.'"
console.log(quote)
let quiz2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- \
with charity you give love, so don't just give money but reach out your hand instead."
console.log(quiz2)

let num1 = '10'
let num2 = 10
console.log(typeof num1)
console.log(typeof num2)

let numInt = parseInt(num1)
console.log(numInt)

let num3 = '9.8'
let numFloat = parseFloat(num3)
console.log(numFloat)

let language = 'Python, jargon'
console.log(language.includes('on'))

let sentence = 'I hope this course is not full of jargon.'
console.log(language.includes('jargon'))

const rNum = Math.floor(Math.random() * 101)
console.log(rNum)


const rnum = Math.floor(Math.random() * 256)
console.log(rnum)

let Word = 'Javascript'
console.log(word.charAt(4))

console.log("1\t1\t1\t1\t1")
console.log("2\t1\t2\t4\t8")
console.log("3\t1\t3\t9\t27")
console.log("4\t1\t4\t16\t64")
console.log("5\t1\t5\t25\t125")

let sent = 'You cannot end a sentence with because because because is a conjunction'
console.log(sent.indexOf('because'))
console.log(sent.lastIndexOf('because'))

let Pattern = /because/gi
console.log(sent.match(Pattern)) 
 let Sentence = '\'Love is the best thing in this world. Some found their love and some are still looking for their love.\''
 let pattern = /love/gi
console.log(Sentence.match(pattern)) 

let txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(txt.match(/\d+/g))


const r_num = Math.floor(Math.random() *(100-50 + 1)) + 50
console.log(r_num)



const str1 = "This text has 10 numbers and 5 more. let's add them!"

const regex = /\d+/g;

const numbers2 = str1.match(regex).map(Number);

const sum = numbers2.reduce((acc, current) => acc + current, 0);

console.log("Sum of numbers: ", sum)

console.log(sent.slice(31,55));
let result = sent.substring();

const newStr = "Javascript";

const randomIndex = Math.floor(Math.random() * newStr.length);
const randomChar = newStr[randomIndex];

console.log("Random Character:", randomChar);
