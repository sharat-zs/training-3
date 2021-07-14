// import fizzBuzz from "./fizzbuzz"

// fizzBuzz(17)

function outer() {
    const greeting = 'hello'
    return function (name: string) {
        return `${greeting}${name}`
    }
}

const greeter = outer()
greeter('harry')
