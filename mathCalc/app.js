let title = document.getElementById('block-title')
// let titleWithPlus = title.endsWith('+')

let calculator = {
	input1: function () {
		if (title.innerText === '0') {
			title.innerText = ''
			let temp = title.innerText + 1
			title.textContent = temp
		} else {
			let temp = title.innerText + 1
			title.textContent = temp
		}
	},

	input2: function () {
		if (title.innerText === '0') {
			title.innerText = ''
			let temp = title.innerText + 2
			title.textContent = temp
		} else {
			let temp = title.innerText + 2
			title.textContent = temp
		}
	},

	input3: function () {
		if (title.innerText === '0') {
			title.innerText = ''
			let temp = title.innerText + 3
			title.textContent = temp
		} else {
			let temp = title.innerText + 3
			title.textContent = temp
		}
	},

	input4: function () {
		if (title.innerText === '0') {
			title.innerText = ''
			let temp = title.innerText + 4
			title.textContent = temp
		} else {
			let temp = title.innerText + 4
			title.textContent = temp
		}
	},

	input5: function () {
		if (title.innerText === '0') {
			title.innerText = ''
			let temp = title.innerText + 5
			title.textContent = temp
		} else {
			let temp = title.innerText + 5
			title.textContent = temp
		}
	},

	input6: function () {
		if (title.innerText === '0') {
			title.innerText = ''
			let temp = title.innerText + 6
			title.textContent = temp
		} else {
			let temp = title.innerText + 6
			title.textContent = temp
		}
	},

	input7: function () {
		if (title.innerText === '0') {
			title.innerText = ''
			let temp = title.innerText + 7
			title.textContent = temp
		} else {
			let temp = title.innerText + 7
			title.textContent = temp
		}
	},

	input8: function () {
		if (title.innerText === '0') {
			title.innerText = ''
			let temp = title.innerText + 8
			title.textContent = temp
		} else {
			let temp = title.innerText + 8
			title.textContent = temp
		}
	},

	input9: function () {
		if (title.innerText === '0') {
			title.innerText = ''
			let temp = title.innerText + 9
			title.textContent = temp
		} else {
			let temp = title.innerText + 9
			title.textContent = temp
		}
	},

	del: function () {
		temp = '0'
		title.textContent = temp
	},
	plus: function () {
		if (title.innerText === '0') {
			title.innerText = 0
		} else if ((title.innerText.endsWith('+')) === true) {
			
		} else if ((title.innerText.endsWith('-')) === true) {
			let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '+'
			title.textContent = temp
		} else {
			let temp = title.innerText + '+'
			title.textContent = temp
		}
	},
	minus: function () {
		if (title.innerText === '0') {
			title.innerText = 0
		} else if ((title.innerText.endsWith('-')) === true) {
			
		} else if ((title.innerText.endsWith('+')) === true) {
			let temp = (title.innerText).substring(0, (title.innerText).length - 1) + '-'
			title.textContent = temp
		} else {
			let temp = title.innerText + '-'
			title.textContent = temp
		}
	}
}

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



let btnPlus = document.getElementById('btnPlus')
btnPlus.addEventListener('click', calculator.plus)

let btnMinus = document.getElementById('btnMinus')
btnMinus.addEventListener('click', calculator.minus)

let btnCE = document.getElementById('btnCE')
btnCE.addEventListener('click', calculator.del)












