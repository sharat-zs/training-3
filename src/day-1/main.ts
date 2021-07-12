export let x = 5
const y = 10
x = 10
x = 10.0000000
let name = 'harry'
let bool = true
let missing = undefined
let nullish = null
// console.log(typeof name)
// console.log(typeof bool)
// console.log(typeof missing)
// console.log(typeof nullish)

const obj = {
  name: "hello"
}
let prop = 'name'
// console.log(obj)
// console.log(obj.name)

function func(arg: string) {
  return `Hello ${arg}`
}

const arrowFunc = (arg: string) => `Hello ${arg}`

function wrapperFunc(func: Function, arg: string) {
  return func(arg)
}

const arr: number[] = [1, 2, 3, 3]
arr.push(123)
arr.pop()
arr.slice()
arr.length

// console.log(arr[0])

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// for (let item of arr) {
//   console.log(item)
// }

// arr.forEach((i) => console.log(i))
// let i = 0
// while (i < arr.length) {
//   // console.log(arr[i])
//   i++
// }

// do {

// } while (i < arr.length)

// const mappedArr = arr.map(item => item * 2)
// console.log(mappedArr)
// const filteredArr = arr.filter(item => item % 2 === 0)
// console.log(filteredArr)

// const result = arr.reduce((prev, current) => prev + current, 0)
// console.log(result)

let str1 = '1'
let num1 = 1
if ((str1 as any) === (num1 as any)) {
  console.log('are equal')
} else {
  console.log('not equal')
}

if ('') {
  console.log('is truthy')
} else {
  console.log('is falsy')
}
//truthy ->1,-1, {}, [], 'abc', true
//falsy ->0, false, null, undefined, ''

if (!x) {
  //do spmething
}

x === 5 ? console.log('is 5') : console.log('not 5')

const DEFAULT_VALUE = 5

function initX(x: number | undefined) {
  return x || DEFAULT_VALUE
}

function initX1(x?: number[]) {
 console.log(x?.length)
}

console.log(initX1(undefined))
console.log(initX1([0]))
