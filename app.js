const num = 42 // integer
const float = 42.42 // float
const pow = 10e3 // 10 в 3й степени = 10000

// max and min integer in js
console.log(Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2, 53) - 1)
console.log(Number.MIN_SAFE_INTEGER)

// max and min value
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// infifity
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log('1/0:', 1/0)

console.log(isFinite(Infinity))
console.log(isFinite(42))

console.log(0.4 + 0.2) // 0.600000000001 // err
console.log(2/5 + 1/5) // 0.600000000001 // err
const numFixed = (2/5 + 1/5).toFixed(1)
console.log(numFixed)







