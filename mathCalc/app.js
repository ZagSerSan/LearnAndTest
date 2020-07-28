let title = document.getElementById('block-title')

let calculator = {
	input1: function () {
		if (title.innerText === '0') {
			title.innerText = ''
			let temp = title.innerText + '1'
			title.textContent = temp
		} else {
			let temp = title.innerText + '1'
			title.textContent = temp
		}
	},
	input2: function () {
			if (title.innerText === '0') {
				title.innerText = ''
				let temp = title.innerText + '2'
				title.textContent = temp
			} else {
				let temp = title.innerText + '2'
				title.textContent = temp
			}
		},

	del: function () {
		temp = '0'
		title.textContent = temp
	}
}

let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', calculator.input1)

let btn2 = document.getElementById('btn2')
btn2.addEventListener('click', calculator.input2)

let btnCE = document.getElementById('btnCE')
btnCE.addEventListener('click', calculator.del)












