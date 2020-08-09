let title = document.getElementById('block-title')

/*

10+5*2
10+(5*2)

let mult = 2
saveNum = (saveNum*mult)
numbers[numbers.length] = saveSum
*/

let output
let temp
let tempQ = false
let tempMult = false
let saveMult
let tempSplit = false
let saveSplit
let tempMinus = false
let saveNum

let numbers = []

let calculator = {
// input 1-9
	input0: function () {
		if (tempQ === true) {
			output = (title.innerText = '') + '0'
			title.innerText = output

			temp = '0'
			saveNum = parseInt(temp)
			tempQ = false

		} else {
			if (title.innerText === '0') {
				output = title.innerText = 0
				title.innerText = output
				
				temp = '0'
				saveNum = parseInt(temp)

			} else if (title.innerText === '-0') {
				output = title.innerText = '-0'
				title.innerText = output

				temp = '0'
				saveNum = parseInt(temp)
			} else {
				output = title.innerText + '0'
				title.innerText = output

				temp += '0'
				saveNum = parseInt(temp)
			}
		}
	},
	input1: function () {
		if (tempQ === true) {
			output = (title.innerText = '') + '1'
			title.innerText = output

			temp = '1'
			saveNum = parseInt(temp)
			// tempMult = saveNum
			tempQ = false

		} else {
			if (title.innerText === '0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '1'
				title.innerText = output
				
				temp = '1'
				saveNum = parseInt(temp)
				// tempMult = saveNum

			} else if (title.innerText === '-0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '1'
				title.innerText = output

				temp = '1'
				saveNum = parseInt(temp)
				// tempMult = saveNum
			} else {
				output = title.innerText + '1'
				title.innerText = output

				temp += '1'
				saveNum = parseInt(temp)
				// tempMult = saveNum
			}
		}
	},
	input2: function () {
		if (tempQ === true) {
			output = (title.innerText = '') + '2'
			title.innerText = output

			temp = '2'
			saveNum = parseInt(temp)
			tempQ = false
		} else {
			if (title.innerText === '0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '2'
				title.innerText = output
				
				temp = '2'
				saveNum = parseInt(temp)

			} else if (title.innerText === '-0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '2'
				title.innerText = output

				temp = '2'
				saveNum = parseInt(temp)
			} else {
				output = title.innerText + '2'
				title.innerText = output

				temp += '2'
				saveNum = parseInt(temp)
			}
		}
	},
	input3: function () {
		if (tempQ === true) {
			output = (title.innerText = '') + '3'
			title.innerText = output

			temp = '3'
			saveNum = parseInt(temp)
			tempQ = false

		} else {
			if (title.innerText === '0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '3'
				title.innerText = output
				
				temp = '3'
				saveNum = parseInt(temp)
			} else if (title.innerText === '-0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '3'
				title.innerText = output

				temp = '3'
				saveNum = parseInt(temp)
			} else {
				output = title.innerText + '3'
				title.innerText = output

				temp += '3'
				saveNum = parseInt(temp)
			}
		}
	},
	input4: function () {
		if (tempQ === true) {
			output = (title.innerText = '') + '4'
			title.innerText = output

			temp = '4'
			saveNum = parseInt(temp)
			tempQ = false

		} else {
			if (title.innerText === '0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '4'
				title.innerText = output
				
				temp = '4'
				saveNum = parseInt(temp)

			} else if (title.innerText === '-0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '4'
				title.innerText = output

				temp = '4'
				saveNum = parseInt(temp)
			} else {
				output = title.innerText + '4'
				title.innerText = output

				temp += '4'
				saveNum = parseInt(temp)

			}
		}
	},
	input5: function () {
		if (tempQ === true) {
			output = (title.innerText = '') + '5'
			title.innerText = output

			temp = '5'
			saveNum = parseInt(temp)
			tempQ = false
				console.log('тут где tempQ')
				console.log(`tempQ = ${tempQ}`)

		} else {
			if (title.innerText === '0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '5'
				title.innerText = output
				
				temp = '5'
				saveNum = parseInt(temp)
				console.log('тут где if===0')

			} else if (title.innerText === '-0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '5'
				title.innerText = output

				temp = '5'
				saveNum = parseInt(temp)
			} else {
				output = title.innerText + '5'
				title.innerText = output

				temp += '5'
				saveNum = parseInt(temp)

			}
		}
	},
	input6: function () {
		if (tempQ === true) {
			output = (title.innerText = '') + '6'
			title.innerText = output

			temp = '6'
			saveNum = parseInt(temp)
			tempQ = false
				console.log('тут где tempQ')
				console.log(`tempQ = ${tempQ}`)

		} else {
			if (title.innerText === '0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '6'
				title.innerText = output
				
				temp = '6'
				saveNum = parseInt(temp)
				console.log('тут где if===0')

			} else if (title.innerText === '-0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '6'
				title.innerText = output

				temp = '6'
				saveNum = parseInt(temp)
			} else {
				output = title.innerText + '6'
				title.innerText = output

				temp += '6'
				saveNum = parseInt(temp)

			}
		}
	},
	input7: function () {
		if (tempQ === true) {
			output = (title.innerText = '') + '7'
			title.innerText = output

			temp = '7'
			saveNum = parseInt(temp)
			tempQ = false

		} else {
			if (title.innerText === '0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '7'
				title.innerText = output
				
				temp = '7'
				saveNum = parseInt(temp)

			} else if (title.innerText === '-0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '7'
				title.innerText = output

				temp = '7'
				saveNum = parseInt(temp)
			} else {
				output = title.innerText + '7'
				title.innerText = output

				temp += '7'
				saveNum = parseInt(temp)

			}
		}
	},
	input8: function () {
		if (tempQ === true) {
			output = (title.innerText = '') + '8'
			title.innerText = output

			temp = '8'
			saveNum = parseInt(temp)
			tempQ = false
				console.log('тут где tempQ')
				console.log(`tempQ = ${tempQ}`)

		} else {
			if (title.innerText === '0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '8'
				title.innerText = output
				
				temp = '8'
				saveNum = parseInt(temp)
				console.log('тут где if===0')

			} else if (title.innerText === '-0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '8'
				title.innerText = output

				temp = '8'
				saveNum = parseInt(temp)
			} else {
				output = title.innerText + '8'
				title.innerText = output

				temp += '8'
				saveNum = parseInt(temp)

			}
		}
	},
	input9: function () {
		if (tempQ === true) {
			output = (title.innerText = '') + '9'
			title.innerText = output

			temp = '9'
			saveNum = parseInt(temp)
			tempQ = false
				console.log('тут где tempQ')
				console.log(`tempQ = ${tempQ}`)

		} else {
			if (title.innerText === '0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '9'
				title.innerText = output
				
				temp = '9'
				saveNum = parseInt(temp)
				console.log('тут где if===0')

			} else if (title.innerText === '-0') {
				output = (title.innerText).substring(0, (title.innerText).length - 1) + '9'
				title.innerText = output

				temp = '9'
				saveNum = parseInt(temp)
			} else {
				output = title.innerText + '9'
				title.innerText = output

				temp += '9'
				saveNum = parseInt(temp)

			}
		}
	},
// input cucl
	multiply: function () {
		if (tempMult === true) {
			saveMult = numbers.pop()
			numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
			temp = ''

			output = title.innerText + '*'
			title.innerText = output
		} else {
			if (tempSplit === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
				temp = ''

				output = title.innerText + '*'
				title.innerText = output
	
				tempSplit = false
				tempMult = true
			} else if (tempMinus === true) {
				numbers[numbers.length] = (saveNum * (-1))
				temp = ''

				output = title.innerText + '*'
				title.innerText = output

				tempMinus = false
				tempMult - true
			} else {
				numbers[numbers.length] = saveNum
				temp = ''

				output = title.innerText + '*'
				title.innerText = output

				tempMinus = false
				tempSplit = false
				tempMult = true
			}
		}
	},
	split: function () {
		if (tempSplit === true) {
			saveSplit = numbers.pop()
			numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
			temp = ''

			output = title.innerText + '/'
			title.innerText = output
		} else {
			if (tempMult === true) {
				saveMult = numbers.pop()
				numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
				temp = ''

				output = title.innerText + '/'
				title.innerText = output

				tempMult = false
				tempSplit = true
			} else if (tempMinus === true) {
				numbers[numbers.length] = (saveNum * (-1))
				temp = ''

				output = title.innerText + '/'
				title.innerText = output

				tempMinus = false
				tempSplit - true
			} else {
				numbers[numbers.length] = saveNum
				temp = ''

				output = title.innerText + '/'
				title.innerText = output

				tempMinus = false
				tempMult = false
				tempSplit = true
			}
		}
	},
	minus: function () {
		if (tempMinus === true) {
			numbers[numbers.length] = (saveNum * (-1))
		}
	},
	plus: function () {
		// если изначально стоит '-0'
		if (title.innerText === '-0') {
			title.innerText = 0
			tempM = false
		}

		// нажатие после равно
		if (tempQ === true) {
			title.innerText = '0'
		}

		// для умножения
		if (tempMult != 'firstNum') {
			tempMult = numbers.pop()
			numbers[numbers.length] = (parseInt(tempMult) * parseInt(temp))
			temp = ''
			tempMult = 'firstNum'

			output = title.innerText + '+'
			title.innerText = output
			console.log('теперь работает это')
		} else {

		// для минуса
		if ((tempM === true) && (tempMult = 'firstNum')) {
			if (title.innerText === '0') {
				title.innerText = 0
			} else if ((title.innerText.endsWith('+')) === true) {
				
			} else if ((title.innerText.endsWith('-')) === true) {
				let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '+'
				tempM = false
				title.textContent = temp
			} else if ((title.innerText.endsWith('*')) === true) {
				let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '+'
				title.textContent = temp
			} else if ((title.innerText.endsWith('/')) === true) {
				let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '+'
				title.textContent = temp
			} else {
				saveNum *= -1
				numbers[numbers.length] = saveNum
				console.log(numbers)
				saveNum=''
				temp = ''

				output = title.innerText + '+'
				title.innerText = output

				tempM = false
			}
		} else if ((tempM === false) && (tempMult = 'firstNum')) {
			if (title.innerText === '0') {
				title.innerText = 0
			} else if ((title.innerText.endsWith('+')) === true) {
				
			} else if ((title.innerText.endsWith('-')) === true) {
				let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '+'
				title.textContent = temp
				tempM = false
			} else if ((title.innerText.endsWith('*')) === true) {
				let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '+'
				title.textContent = temp
			} else if ((title.innerText.endsWith('/')) === true) {
				let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '+'
				title.textContent = temp
			} else {
				numbers[numbers.length] = saveNum
				console.log(numbers)
				console.log('рабоатет это')
				saveNum=''
				temp = ''

				output = title.innerText + '+'
				title.innerText = output

				tempM = false
			}
		}
		}
	},
	del: function () {
		title.innerText = 0
		temp = ''
		saveNum = ''
		tempQ = false
		tempM = false
		numbers.length=0
		console.log('numbers', numbers)
	},
	back: function () {
		if ((title.innerText).length > 1) {
			let temp = (title.innerText).substring(0, (title.innerText).length - 1)
			title.textContent = temp
		} else if ((title.innerText).length = 1) {
			let temp = '0'
			title.textContent = temp
		}
	},
	equally: function () {
		var sum=0;

		if (tempMult != 'firstNum') {
				tempMult = numbers.pop()
				numbers[numbers.length] = (parseInt(tempMult) * parseInt(temp))
				temp = ''
				for(var i=0;i<numbers.length;i++){
			    	sum = sum + parseInt(numbers[i]);
				}
				title.innerText = sum
				console.log('и это')
			} else if (tempMult = 'firstNum') {
				console.log('это')
				numbers[numbers.length] = saveNum
				for(var i=0;i<numbers.length;i++){
			    	sum = sum + parseInt(numbers[i]);
				}
				title.innerText = sum

			}

		if (tempM === true) {
			saveNum *= -1
			numbers[numbers.length] = saveNum
			saveNum=''
			temp = ''
			for(var i=0;i<numbers.length;i++){
			    sum = sum + parseInt(numbers[i]);
			}
			title.innerText = sum
			console.log('тутаа', numbers)
			numbers.length = 0
			tempQ = true
			tempM = false
		} else if (tempM === false) {
			numbers[numbers.length] = saveNum
			saveNum=''
			temp = ''
			for(var i=0;i<numbers.length;i++){
			    sum = sum + parseInt(numbers[i]);
			}
			title.innerText = sum
			console.log('equally')
			console.log(numbers)
			numbers.length = 0
			tempQ = true
			tempM = false
		}
		numbers.length=0
		tempQ = true
		tempM = false
		tempMult = 'firstNum'
	}
}

let btn0 = document.getElementById('btn0')
btn0.addEventListener('click', calculator.input0)
let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', calculator.input1)
let btn2 = document.getElementById('btn2')
btn2.addEventListener('click', calculator.input2)
let btn3 = document.getElementById('btn3')
btn3.addEventListener('click', calculator.input3)
let btn4 = document.getElementById('btn4')
btn4.addEventListener('click', calculator.input4)
let btn5 = document.getElementById('btn5')
btn5.addEventListener('click', calculator.input5)
let btn6 = document.getElementById('btn6')
btn6.addEventListener('click', calculator.input6)
let btn7 = document.getElementById('btn7')
btn7.addEventListener('click', calculator.input7)
let btn8 = document.getElementById('btn8')
btn8.addEventListener('click', calculator.input8)
let btn9 = document.getElementById('btn9')
btn9.addEventListener('click', calculator.input9)


// +
let btnPlus = document.getElementById('btnPlus')
btnPlus.addEventListener('click', calculator.plus)
// -
let btnMinus = document.getElementById('btnMinus')
btnMinus.addEventListener('click', calculator.minus)
// C
let btnC = document.getElementById('btnC')
btnC.addEventListener('click', calculator.del)
// // <--
// let btnBack = document.getElementById('btnBack')
// btnBack.addEventListener('click', calculator.back)
// *
let btnMultiply = document.getElementById('btnMultiply')
btnMultiply.addEventListener('click', calculator.multiply)
// /
let btnSplit = document.getElementById('btnSplit')
btnSplit.addEventListener('click', calculator.split)
// =
let btnEqually = document.getElementById('btnEqually')
btnEqually.addEventListener('click', calculator.equally)












