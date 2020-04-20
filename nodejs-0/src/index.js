'use strict'

const fibonacci = () => {
    let first = 0
    let second = 1
    let array = []
    while(first < 350){
        array.push(first)
        second = first + second
        first = second - first
    }
    return array
}

const isFibonnaci = (num) => {
    let numbers = fibonacci()
    return numbers.includes(num)
}

module.exports = {
    fibonacci,
    isFibonnaci
}
