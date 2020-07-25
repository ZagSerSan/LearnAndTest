//1 Number

// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3 // 10 в 3й степени = 10000

// max and min integer in js
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2, 53) - 1)
// console.log(Number.MIN_SAFE_INTEGER)

// max and min value
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// infifity
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log('1/0:', 1/0)

// console.log(isFinite(Infinity))
// console.log(isFinite(42))

// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt
// console.log(9007199254740991999999999n - 900719925474099199999999n )
// console.log(parseInt(10n) - 4)

// 3 Math
//корень
// console.log(Math.sqrt(25))
//в степень
// console.log(Math.pow(5, 3))

// 4 Example

/* НУжно создать функцию которая будет возращать случайное число
в диапазоне каких-то двух целых чисел
*/

function getRandomBeetwen(min, max) {
	return Math.random() * (max - min) + min
}

console.log(getRandomBeetwen(10, 42))
