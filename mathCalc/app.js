let title = document.getElementById('block-title')
// let titleWithPlus = title.endsWith('+')

let output

let temp
let saveNum


temp = ''
1
temp += 1
saveNum = temp

output = title.innerText + temp





//let output + temp
//let numbers[numbers.length] = temp
// let temp

let numbers = []

let calculator = {
	// input0: function () {
	// 	if (output === '0') {
	// 		output = '0'
	// 	} else {
	// 		output = output + 0
	// 		title.textContent = output
	// 	}
	// },
	input1: function () {
		if (title.innerText === '0') {
			temp = (title.innerText).substring(0, (title.innerText).length - 1) + 1
			saveNum = temp
			title.innerText = temp
			temp = ''
		} else {
			temp = (title.innerText) + 1
			saveNum = temp
			title.innerText = temp
			temp = ''

		}
	},
	// input2: function () {
	// 	if (title.innerText === '0') {
	// 		title.innerText = ''
	// 		let temp = title.innerText + 2
	// 		title.textContent = temp
	// 	} else {
	// 		let temp = title.innerText + 2
	// 		title.textContent = temp
	// 	}
	// },
	// input3: function () {
	// 	if (title.innerText === '0') {
	// 		title.innerText = ''
	// 		let temp = title.innerText + 3
	// 		title.textContent = temp
	// 	} else {
	// 		let temp = title.innerText + 3
	// 		title.textContent = temp
	// 	}
	// },
	// input4: function () {
	// 	if (title.innerText === '0') {
	// 		title.innerText = ''
	// 		let temp = title.innerText + 4
	// 		title.textContent = temp
	// 	} else {
	// 		let temp = title.innerText + 4
	// 		title.textContent = temp
	// 	}
	// },
	// input5: function () {
	// 	if (title.innerText === '0') {
	// 		title.innerText = ''
	// 		let temp = title.innerText + 5
	// 		title.textContent = temp
	// 	} else {
	// 		let temp = title.innerText + 5
	// 		title.textContent = temp
	// 	}
	// },
	// input6: function () {
	// 	if (title.innerText === '0') {
	// 		title.innerText = ''
	// 		let temp = title.innerText + 6
	// 		title.textContent = temp
	// 	} else {
	// 		let temp = title.innerText + 6
	// 		title.textContent = temp
	// 	}
	// },
	// input7: function () {
	// 	if (title.innerText === '0') {
	// 		title.innerText = ''
	// 		let temp = title.innerText + 7
	// 		title.textContent = temp
	// 	} else {
	// 		let temp = title.innerText + 7
	// 		title.textContent = temp
	// 	}
	// },
	// input8: function () {
	// 	if (title.innerText === '0') {
	// 		title.innerText = ''
	// 		let temp = title.innerText + 8
	// 		title.textContent = temp
	// 	} else {
	// 		let temp = title.innerText + 8
	// 		title.textContent = temp
	// 	}
	// },
	// input9: function () {
	// 	if (title.innerText === '0') {
	// 		title.innerText = ''
	// 		let temp = title.innerText + 9
	// 		title.textContent = temp
	// 	} else {
	// 		let temp = title.innerText + 9
	// 		title.textContent = temp
	// 	}
	// },
	plus: function () {
		if (title.innerText === '0') {
			title.innerText = 0
		} else if ((title.innerText.endsWith('+')) === true) {
			
		} else if ((title.innerText.endsWith('-')) === true) {
			temp = (title.innerText).substring(0, (title.innerText).length - 1) + '+'
			title.textContent = temp
		} else if ((title.innerText.endsWith('*')) === true) {
			temp = (title.innerText).substring(0, (title.innerText).length - 1) + '+'
			title.textContent = temp
		} else if ((title.innerText.endsWith('/')) === true) {
			temp = (title.innerText).substring(0, (title.innerText).length - 1) + '+'
			title.textContent = temp
		} else {
			numbers[numbers.length] = parseInt(saveNum)
			saveNum=''
			temp = title.innerText + '+'
			title.textContent = temp
			temp = ''
			// temp = (temp).substring(0, (temp).length - 1)
			// numbers[numbers.length] = temp
		}
	},
	// minus: function () {
	// 	if (title.innerText === '0') {
	// 		title.innerText = 0
	// 	} else if ((title.innerText.endsWith('-')) === true) {
			
	// 	} else if ((title.innerText.endsWith('+')) === true) {
	// 		let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '-'
	// 		title.textContent = temp
	// 	} else if ((title.innerText.endsWith('*')) === true) {
	// 		let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '-'
	// 		title.textContent = temp
	// 	} else if ((title.innerText.endsWith('/')) === true) {
	// 		let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '-'
	// 		title.textContent = temp
	// 	} else {
	// 		let temp = title.innerText + '-'
	// 		title.textContent = temp
	// 	}
	// },
	// del: function () {
	// 	let temp = '0'
	// 	title.textContent = temp
	// },
	// back: function () {
	// 	if ((title.innerText).length > 1) {
	// 		let temp = (title.innerText).substring(0, (title.innerText).length - 1)
	// 		title.textContent = temp
	// 	} else if ((title.innerText).length = 1) {
	// 		let temp = '0'
	// 		title.textContent = temp
	// 	}
	// },
	// multiply: function () {
	// 	if (title.innerText === '0') {
	// 		title.innerText = 0
	// 	} else if ((title.innerText.endsWith('*')) === true) {
			
	// 	} else if ((title.innerText.endsWith('+')) === true) {
	// 		let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '*'
	// 		title.textContent = temp
	// 	} else if ((title.innerText.endsWith('-')) === true) {
	// 		let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '*'
	// 		title.textContent = temp
	// 	} else if ((title.innerText.endsWith('/')) === true) {
	// 		let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '*'
	// 		title.textContent = temp
	// 	} else {
	// 		let temp = title.innerText + '*'
	// 		title.textContent = temp
	// 	}
	// },
	// split: function () {
	// 	if (title.innerText === '0') {
	// 		title.innerText = 0
	// 	} else if ((title.innerText.endsWith('/')) === true) {
			
	// 	} else if ((title.innerText.endsWith('+')) === true) {
	// 		let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '/'
	// 		title.textContent = temp
	// 	} else if ((title.innerText.endsWith('-')) === true) {
	// 		let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '/'
	// 		title.textContent = temp
	// 	} else if ((title.innerText.endsWith('*')) === true) {
	// 		let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '/'
	// 		title.textContent = temp
	// 	} else {
	// 		let temp = title.innerText + '/'
	// 		title.textContent = temp
	// 	}
	// },
	// equally: function () {
	// 	(title.innerText).parseInt()
	// 	console.log(title.innerText)
	// }
	
}

// let btn0 = document.getElementById('btn0')
// btn0.addEventListener('click', calculator.input0)
let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', calculator.input1)
// let btn2 = document.getElementById('btn2')
// btn2.addEventListener('click', calculator.input2)
// let btn3 = document.getElementById('btn3')
// btn3.addEventListener('click', calculator.input3)
// let btn4 = document.getElementById('btn4')
// btn4.addEventListener('click', calculator.input4)
// let btn5 = document.getElementById('btn5')
// btn5.addEventListener('click', calculator.input5)
// let btn6 = document.getElementById('btn6')
// btn6.addEventListener('click', calculator.input6)
// let btn7 = document.getElementById('btn7')
// btn7.addEventListener('click', calculator.input7)
// let btn8 = document.getElementById('btn8')
// btn8.addEventListener('click', calculator.input8)
// let btn9 = document.getElementById('btn9')
// btn9.addEventListener('click', calculator.input9)


// +
let btnPlus = document.getElementById('btnPlus')
btnPlus.addEventListener('click', calculator.plus)
// // -
// let btnMinus = document.getElementById('btnMinus')
// btnMinus.addEventListener('click', calculator.minus)
// // C
// let btnC = document.getElementById('btnC')
// btnC.addEventListener('click', calculator.del)
// // <--
// let btnBack = document.getElementById('btnBack')
// btnBack.addEventListener('click', calculator.back)
// // *
// let btnMultiply = document.getElementById('btnMultiply')
// btnMultiply.addEventListener('click', calculator.multiply)
// // /
// let btnSplit = document.getElementById('btnSplit')
// btnSplit.addEventListener('click', calculator.split)
// // =
// // let btnEqually = document.getElementById('btnEqually')
// // btnEqually.addEventListener('click', calculator.equally)












