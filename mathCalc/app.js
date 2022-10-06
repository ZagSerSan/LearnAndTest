// переменные
	let title = document.getElementById('block-title')
	let output
	
	let temp = 0
	let saveNum
	
	let tempFirstStatus = true
	let tempQ = false

	// Статусные переменные
	let statusMult = false
	let statusMultPlus = false
	let statusMultMinus = false
	let saveMult
	let saveMultPlus
	let saveMultMinus

	let statusSplit = false
	let statusSplitPlus = false
	let statusSplitMinus = false
	let saveSplit
	let saveSplitPlus
	let saveSplitMinus

	let statusMinus = false
	var statusMinusAfterPlus = false
	var statusMinusAfterMultiPlus = false
	let statusPlus = false
	let saveMinus
	let savePlus

	// Массив чисел для конечного вычесления кнопки "равно"
	let numbers = []

	let tempOutput
	let outLast

let calculator = {
// input 1-9
	input0: function () {
		if (tempQ === true) {
			title.innerText = (title.innerText = '') + '0'
			temp = parseInt(title.innerText)
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = 0
			temp = 0
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = 0
			temp = 0
			saveNum = parseInt(temp)
		} else {
			title.innerText += '0'
			temp += '0'
			saveNum = parseInt(temp)
		}
	},
	input1: function () {
		if (tempQ === true) {
			title.innerText = '1'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '1'
			temp = '1'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-1'
			temp = -1
			saveNum = parseInt(temp)
		} else {
			title.innerText += '1'
			temp += '1'
			saveNum = parseInt(temp)
		}
	},
	input2: function () {
		if (tempQ === true) {
			title.innerText = '2'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false

			console.log("temp:");
			console.log(temp);
			console.log("saveNum:");
			console.log(saveNum);
		} else if (title.innerText === '0') {
			title.innerText = '2'
			temp = '2'
			saveNum = parseInt(temp)

			console.log('else if (title.innerText === 0');
			console.log("temp:");
			console.log(temp);
			console.log("saveNum:");
			console.log(saveNum);
		} else if (title.innerText === '-0') {
			title.innerText = '-2'
			temp = -2
			saveNum = parseInt(temp)

			console.log("temp:");
			console.log(temp);
			console.log("saveNum:");
			console.log(saveNum);
		} else {
			title.innerText += '2'
			temp += '2'
			saveNum = parseInt(temp)

			console.log("temp:");
			console.log(temp);
			console.log("saveNum:");
			console.log(saveNum);
		}
	},
	input3: function () {
		if (tempQ === true) {
			title.innerText = '3'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '3'
			temp = '3'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-3'
			temp = -3
			saveNum = parseInt(temp)
		} else {
			title.innerText += '3'
			temp += '3'
			saveNum = parseInt(temp)
		}
	},
	input4: function () {
		if (tempQ === true) {
			title.innerText = '4'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '4'
			temp = '4'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-4'
			temp = -4
			saveNum = parseInt(temp)
		} else {
			title.innerText += '4'
			temp += '4'
			saveNum = parseInt(temp)
		}
	},
	input5: function () {
		if (tempQ === true) {
			title.innerText = '5'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '5'
			temp = '5'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-5'
			temp = -5
			saveNum = parseInt(temp)
		} else {
			title.innerText += '5'
			temp += '5'
			saveNum = parseInt(temp)
		}
	},
	input6: function () {
		if (tempQ === true) {
			title.innerText = '6'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '6'
			temp = '6'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-6'
			temp = -6
			saveNum = parseInt(temp)
		} else {
			title.innerText += '6'
			temp += '6'
			saveNum = parseInt(temp)
		}
	},
	input7: function () {
		if (tempQ === true) {
			title.innerText = '7'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '7'
			temp = '7'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-7'
			temp = -7
			saveNum = parseInt(temp)
		} else {
			title.innerText += '7'
			temp += '7'
			saveNum = parseInt(temp)
		}
	},
	input8: function () {
		if (tempQ === true) {
			title.innerText = '8'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '8'
			temp = '8'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-8'
			temp = -8
			saveNum = parseInt(temp)
		} else {
			title.innerText += '8'

			temp += '8'
			saveNum = parseInt(temp)
		}
	},
	input9: function () {
		if (tempQ === true) {
			title.innerText = '9'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '9'
			
			temp = '9'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-9'
			temp = -9
			saveNum = parseInt(temp)
		} else {
			title.innerText += '9'
			temp += '9'
			saveNum = parseInt(temp)
		}
	},


// input cucl
	multiply: function () {
		if (title.innerText === '0') {
			title.innerText = '0'
		} else if (title.innerText === '-0') {
			title.innerText = '-0'
		} else if (title.innerText.endsWith('*') === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '*'
		} else if (title.innerText.endsWith('/') === true && statusSplit === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '*'
			statusSplit = false
			statusMult = true
		} else if (title.innerText.endsWith('-') === true && statusMinus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '*'
			statusMinus = false
			statusMult = true
		} else if (title.innerText.endsWith('+') === true && statusPlus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '*'
			statusPlus = false
			statusMult = true
		} else {
			if (tempQ === true) {
				numbers[numbers.length] = parseInt(title.innerText)
				temp = ''
				output = title.innerText + '*'
				title.innerText = output
				statusMult = true
				tempQ = false
			} else if (statusMult === true) {
				saveMult = numbers.pop()
				numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
				temp = ''

				output = title.innerText + '*'
				title.innerText = output
				tempFirstStatus = false
			} else {
				if (statusSplit === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
					temp = ''

					output = title.innerText + '*'
					title.innerText = output
		
					statusSplit = false
					statusMult = true
					tempFirstStatus = false
				} else if (statusMinus === true) {
					saveMultMinus = temp
					statusMultMinus = true
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					statusMinus = false
					statusMultMinus = true
					tempFirstStatus = false
				} else if (statusMinusAfterPlus === true) {
					title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '*'
					saveMultPlus = parseInt(saveNum)
					statusMinusAfterPlus = false
					statusMultPlus = true
				} else if (statusMinusAfterMultiPlus === true) {
					saveMultMinus = saveNum
					temp = ''

					title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1))
					output = title.innerText + '*'
					title.innerText = output

					statusMultPlus = true
					statusMinusAfterMultiPlus = false
				} else if (statusPlus === true) {
					saveMultPlus = temp
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					statusPlus = false
					statusMultPlus = true
					tempFirstStatus = false
				} else if (statusMultPlus === true) {
					saveMultPlus = parseInt(saveMultPlus) * parseInt(temp)
					
					temp = ''

					output = title.innerText + '*'
					title.innerText = output
					tempFirstStatus = false
				} else if (statusMultMinus === true) {
					saveMultMinus = parseInt(saveMultMinus) * parseInt(temp)
					temp = ''

					output = title.innerText + '*'
					title.innerText = output
					tempFirstStatus = false
				} else if (statusSplitPlus === true) {
					saveMultPlus = parseInt(saveSplitPlus) / parseInt(temp)
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					statusSplitPlus = false
					statusMultPlus = true
					tempFirstStatus = false
				} else if (statusSplitMinus === true) {
					saveMultMinus = parseInt(saveSplitMinus) / parseInt(temp)
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					statusSplitMinus = false
					statusMultMinus = true
					tempFirstStatus = false
				} else {
					numbers[numbers.length] = saveNum
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					statusMult = true
					statusMinus = false
					statusSplit = false
					tempFirstStatus = false
				}
			}
		}
	},
	split: function () {
		if (title.innerText === '0') {
			title.innerText = '0'
		} else if (title.innerText === '-0') {
			title.innerText = '-0'
		} else if (title.innerText.endsWith('/') === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '/'
		} else if (title.innerText.endsWith('*') === true && statusMult === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '/'
			statusMult = false
			statusSplit = true
		} else if (title.innerText.endsWith('-') === true && statusMinus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '/'
			statusMinus = false
			statusSplit = true
		} else if (title.innerText.endsWith('+') === true && statusPlus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '/'
			statusPlus = false
			statusSplit = true
		} else {
			if (tempQ === true) {
				numbers[numbers.length] = parseInt(title.innerText)
				temp = ''
				output = title.innerText + '/'
				title.innerText = output
				statusSplit = true
				tempQ = false
			} else if (statusSplit === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
				temp = ''

				output = title.innerText + '/'
				title.innerText = output
				tempFirstStatus = false
			} else {
				if (statusMult === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					statusMult = false
					statusSplit = true
					tempFirstStatus = false
				} else if (statusMinus === true) {
					saveSplitMinus = temp
					statusSplitMinus = true
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					statusMinus = false
					tempFirstStatus = false
				} else if (statusPlus === true) {
					saveSplitPlus = temp
					statusSplitPlus = true
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					statusPlus = false
					tempFirstStatus = false
				} else if (statusMultPlus === true) {
					saveSplitPlus = parseInt(saveMultPlus) * parseInt(temp)
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					statusMultPlus = false
					statusSplitPlus = true
					tempFirstStatus = false
				} else if (statusMultMinus === true) {
					saveSplitMinus = parseInt(saveMultMinus) * parseInt(temp)
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					statusMultMinus = false
					statusSplitMinus = true
					tempFirstStatus = false
				} else if (statusSplitPlus === true) {
					saveSplitPlus = parseInt(saveSplitPlus) / parseInt(temp)
					temp = ''

					output = title.innerText + '/'
					title.innerText = output
					tempFirstStatus = false
				} else if (statusSplitMinus === true) {
					saveSplitMinus = parseInt(saveSplitMinus) / parseInt(temp)
					temp = ''

					output = title.innerText + '/'
					title.innerText = output
					tempFirstStatus = false
				} else {
					numbers[numbers.length] = saveNum
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					statusMinus = false
					statusMult = false
					statusSplit = true
					tempFirstStatus = false
				}
			}
		}
	},
	minus: function () {
		if (title.innerText === '0') {
			title.innerText = '-0'
		} else if (title.innerText === '-0') {
			title.innerText = '0'
		} else if (title.innerText.endsWith('-') === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '-'
		} else if (title.innerText.endsWith('*') === true && statusMult === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '-'
			statusMult = false
			statusMinus = true
		} else if (title.innerText.endsWith('/') === true && statusSplit === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '-'
			statusSplit = false
			statusMinus = true
		} else if (title.innerText.endsWith('+') === true && statusPlus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '-'
			statusPlus = false
			statusMinus = true
		} else {
			if (tempQ === true) {
				numbers[numbers.length] = parseInt(title.innerText)
				temp = ''
				output = title.innerText + '-'
				title.innerText = output
				statusMinus = true
				tempQ = false
			} else if (statusMinus === true) {
				saveMinus = numbers.pop()
				numbers[numbers.length] = (parseInt(saveMinus) - parseInt(temp))
				temp = ''

				output = title.innerText + '-'
				title.innerText = output
				tempFirstStatus = false
			} else {
				if (statusMult === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					statusMult = false
					statusMinus = true
					tempFirstStatus = false
				} else if (statusSplit === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output
		
					statusSplit = false
					statusMinus = true
					tempFirstStatus = false
				} else if (statusPlus === true) {
					// savePlus = numbers.pop()
					// numbers[numbers.length] = (parseInt(savePlus) + parseInt(temp))
					savePlus = parseInt(temp)
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					statusPlus = false
					statusMinusAfterPlus = true
					tempFirstStatus = false
				} else if (statusMultPlus === true) {
					// saveMult = numbers.pop()
					// numbers[numbers.length] = (parseInt(saveMult) +  parseInt(temp))
					temp = ''

					title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1))
					output = title.innerText + '-'
					title.innerText = output

					statusMultPlus = false
					// statusMinus = true
					statusMinusAfterMultiPlus = true
					tempFirstStatus = false
				} else if (statusMultMinus === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) - (parseInt(saveMultMinus) * parseInt(temp)))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					statusMultMinus = false
					statusMinus = true
					tempFirstStatus = false
				} else if (statusSplitPlus === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) + (parseInt(saveSplitPlus) / parseInt(temp)))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					statusSplitPlus = false
					statusMinus = true
					tempFirstStatus = false
				} else if (statusSplitMinus === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) - (parseInt(saveSplitMinus) / parseInt(temp)))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					statusSplitMinus = false
					statusMinus = true
					tempFirstStatus = false
				} else {
					numbers[numbers.length] = saveNum
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					statusMinus = true
					tempFirstStatus = false
				}
			}
		}
	},
	plus: function () {
		if (title.innerText === '0') {
			title.innerText = '0'
		} else if (title.innerText === '-0') {
			title.innerText = '0'
		} else if (title.innerText.endsWith('+') === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '+'
		} else if (title.innerText.endsWith('*') === true && statusMult === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '+'
			statusMult = false
			statusPlus = true
		} else if (title.innerText.endsWith('/') === true && statusSplit === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '+'
			statusSplit = false
			statusPlus = true
		} else if (title.innerText.endsWith('-') === true && statusMinus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '+'
			statusMinus = false
			statusPlus = true
		} else {
			if (tempQ === true) {
				numbers[numbers.length] = parseInt(title.innerText)
				temp = ''
				output = title.innerText + '+'
				title.innerText = output
				statusPlus = true
				tempQ = false
			} else if (statusPlus === true) {
				savePlus = numbers.pop()
				numbers[numbers.length] = (parseInt(savePlus) + parseInt(temp))
				temp = ''

				output = title.innerText + '+'
				title.innerText = output
				tempFirstStatus = false
			} else {
				if (statusMult === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					statusMult = false
					statusPlus = true
					tempFirstStatus = false
				} else if (statusSplit === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					statusSplit = false
					statusPlus = true
					tempFirstStatus = false
				} else if (statusMinus === true) {
					saveMinus = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMinus) - parseInt(temp))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					statusMinus = false
					statusPlus = true
					tempFirstStatus = false
				} else if (statusMultPlus === true && title.innerText.endsWith('*') === true) {
					
					temp = saveMultPlus
					savePlus = numbers.pop()
					numbers[numbers.length] = (parseInt(savePlus) + parseInt(temp))
					temp = ''
					
					title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '+'
					output = title.innerText

					statusMultPlus = false
					statusPlus = true
					tempFirstStatus = false
				} else if (statusMultPlus === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) + (parseInt(saveMultPlus) * parseInt(temp)))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output
				}
				
				else if (statusMultMinus === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) - (parseInt(saveMultMinus) * parseInt(temp)))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					statusMultMinus = false
					statusPlus = true
					tempFirstStatus = false
				} else if (statusSplitPlus === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) + (parseInt(saveSplitPlus) / parseInt(temp)))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					statusSplitPlus = false
					statusPlus = true
					tempFirstStatus = false
				} else if (statusSplitMinus === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) - (parseInt(saveSplitMinus) / parseInt(temp)))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					statusSplitMinus = false
					statusPlus = true
					tempFirstStatus = false
				} else {
					numbers[numbers.length] = parseInt(temp)
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					statusPlus = true
					tempFirstStatus = false
				}
			}
		}
	},
	del: function () {
		title.innerText = 0
		temp = 0
		saveNum = 0
		numbers.length=0

		statusMult = false
		statusMultPlus = false
		statusMultMinus = false

		statusSplit = false
		statusSplitPlus = false
		statusSplitMinus = false

		statusMinus = false
		statusMinusAfterMultiPlus = false
		statusPlus = false
	},
	back: function () {
		tempOutput = title.innerText
		outLast = tempOutput.slice(-1)

		if ((title.innerText).length === 1) {
			title.innerText = 0
			temp = 0
			saveNum = temp
		} else if (outLast === '*' || outLast === '/' || outLast === '-' || outLast === '+') {
			title.innerText = (title.innerText).substring(0, (title.innerText).length - 1)
			tempOutput = title.innerText
			outLast = tempOutput.slice(-1)

			for (outLast; outLast != '*' && outLast != '/' && outLast != '-' && outLast != '+' && outLast != ''; outLast = tempOutput.slice(-1)) {
				temp = outLast + temp
				saveNum = parseInt(temp)
				tempOutput = (tempOutput).substring(0, (tempOutput).length - 1)
				console.log('temp = ', temp)
			}

			if (outLast === '+' && statusMultPlus === false && statusSplitPlus === false) {
				numbers[0] -= parseInt(temp)
				statusMult = false
				statusSplit = false
				statusMinus = false
				statusMultPlus = false
				statusSplitPlus = false
				statusPlus = true
			} else if (outLast === '+' && statusMultPlus === true) {
				statusMult = false
				statusSplit = false
				statusMinus = false
				statusMultPlus = false
				statusSplitPlus = false
				statusPlus = true
			} else if (outLast === '+' && statusSplitPlus === false && statusMultPlus === false) {
				numbers[0] -= parseInt(temp)
				statusMult = false
				statusSplit = false
				statusMinus = false
				statusMultPlus = false
				statusSplitPlus = false
				statusPlus = true
			} else if (outLast === '+' && statusSplitPlus === true) {
				statusMult = false
				statusSplit = false
				statusMultPlus = false
				statusSplitPlus = false
				statusPlus = true
			} else if (outLast === '-' && statusMultMinus === false && statusSplitMinus === false) {
				// console.log('outLast = ', outLast)
				numbers[0] += parseInt(temp)
				statusMult = false
				statusSplit = false
				statusPlus = false
				statusMultMinus = false
				statusSplitMinus = false
				statusMinus = true
			} else if (outLast === '-' && statusMultMinus === true) {
				statusMult = false
				statusSplit = false
				statusPlus = false
				statusMultMinus = false
				statusSplitMinus = false
				statusMinus = true
			} else if (outLast === '-' && statusSplitMinus === false && statusMultMinus === false) {
				numbers[0] += parseInt(temp)
				statusMult = false
				statusSplit = false
				statusPlus = false
				statusMultMinus = false
				statusSplitMinus = false
				statusMinus = true
			} else if (outLast === '-' && statusSplitMinus === true) {
				statusMult = false
				statusSplit = false
				statusPlus = false
				statusMultMinus = false
				statusSplitMinus = false
				statusMinus = true
			} else if (outLast === '*') {
				// 2 + 2 * 4 '+ 2'
				// стираю '+', сканируется 4ка в temp, доходит до '*', outLast = '*'
				// если outLast === '*' (это тот блок кода где написаны эти коментарии)
				// то про просканировать следущее и 

				tempOutput = (tempOutput).substring(0, (tempOutput).length - 1)
				outLast = tempOutput.slice(-1)
				saveMult = ''

				for (outLast; outLast != '*' && outLast != '/' && outLast != '-' && outLast != '+' && outLast != ''; outLast = tempOutput.slice(-1)) {
					saveMult = parseInt(outLast + saveMult)
					tempOutput = (tempOutput).substring(0, (tempOutput).length - 1)
					console.log('saveMult = ', saveMult)
				}
				// если перед ним плюс
				if (outLast === '+') {
					// то это следущее засунуть в saveMult 
					// взять темп, умножить на следущее и отнять от number, 
					saveMultPlus = saveMult
					numbers[0] = numbers[0] - (saveMult * temp)
					console.log('numbers[0] = ',numbers)

					// включить состояние statusMultPlus
					statusSplit = false
					statusMinus = false
					statusPlus = false
					statusMult = false
					statusMultPlus = true
				}
				if (outLast === '-') {
					saveMultMinus = saveMult
					numbers[0] = numbers[0] + (saveMult * temp)
					statusSplit = false
					statusMinus = false
					statusPlus = false
					statusMult = false
					statusMultMinus = true
				}
			} else if (outLast === '/') {
				tempOutput = (tempOutput).substring(0, (tempOutput).length - 1)
				outLast = tempOutput.slice(-1)
				saveSplit = ''

				for (outLast; outLast != '*' && outLast != '/' && outLast != '-' && outLast != '+' && outLast != ''; outLast = tempOutput.slice(-1)) {
					saveSplit = parseInt(outLast + saveSplit)
					tempOutput = (tempOutput).substring(0, (tempOutput).length - 1)
					console.log('saveSplit = ', saveSplit)
				}
				// если перед ним плюс
				if (outLast === '+') {
					saveSplitPlus = saveSplit
					// то это следущее засунуть в saveSplit 
					// взять темп, умножить на следущее и отнять от number, 
					numbers[0] = numbers[0] - (saveSplit / temp)
					console.log('numbers[0] = ',numbers)

					// включить состояние statusMultPlus
					statusSplit = false
					statusMinus = false
					statusPlus = false
					statusMult = false
					statusSplitPlus = true
				}
				if (outLast === '-') {
					saveSplitMinus = saveSplit
					numbers[0] = numbers[0] + (saveSplit / temp)
					statusSplit = false
					statusMinus = false
					statusPlus = false
					statusMult = false
					statusSplitMinus = true
				}
			} else if (outLast === '') {
				numbers.length = 0
				statusMult = false
				statusSplit = false
				statusPlus = false
				statusMultPlus = false
				statusSplitPlus = false
				statusMinus = false
				tempFirstStatus = true
			}
		} else {
			title.innerText = (title.innerText).substring(0, (title.innerText).length - 1)
			tempOutput = title.innerText
			outLast = tempOutput.slice(-1)
			temp = (temp).substring(0, (temp).length - 1)
			saveNum = temp
		}
	},
	equally: function () {
		if (tempFirstStatus === true) {
			title.innerText = temp
		console.log('tempFirstStatus')
		} else if (tempQ === true) {
			title.innerText = temp
		} else {
			if (statusMult === true) {
				saveMult = numbers.pop()
				numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
			} else if (statusMultPlus === true){
				saveMult = numbers.pop()
				numbers[numbers.length] =(parseInt(saveMultPlus) * parseInt(temp)) + parseInt(saveMult)
				console.log('here 3');
			} else if (statusMultMinus === true) {
				saveMult = numbers.pop()
				numbers[numbers.length] = parseInt(saveMult) - (parseInt(saveMultMinus) * parseInt(temp))
			} else if (statusSplit === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
			} else if (statusSplitPlus === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = parseInt(saveSplit) + (parseInt(saveSplitPlus) / parseInt(temp))
			} else if (statusSplitMinus === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = parseInt(saveSplit) - (parseInt(saveSplitMinus) / parseInt(temp))
			} else if (statusPlus === true) {
				numbers[0] = numbers[0] + parseInt(temp)
			} else if (statusMinus === true) {
				numbers[0] = numbers[0] - parseInt(temp)
			} else if (statusMinusAfterMultiPlus === true) {
				numbers[0] = numbers[0] + parseInt(saveMultPlus) - parseInt(temp)
				console.log('here');
			} else {
				title.innerText = 0
			}
			title.innerText = numbers[0]
			console.log('tempFirstStatus else')
			tempQ = true

			temp = '0'
			saveNum = ''
			numbers.length=0

			statusMult = false
			statusMultPlus = false
			statusMultMinus = false

			statusSplit = false
			statusSplitPlus = false
			statusSplitMinus = false

			statusMinus = false
			statusPlus = false
		}
	}
}

// доступ и привязка к HTML 
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
	// <--
	let btnBack = document.getElementById('btnBack')
	btnBack.addEventListener('click', calculator.back)
	// *
	let btnMultiply = document.getElementById('btnMultiply')
	btnMultiply.addEventListener('click', calculator.multiply)
	// /
	let btnSplit = document.getElementById('btnSplit')
	btnSplit.addEventListener('click', calculator.split)
	// =
	let btnEqually = document.getElementById('btnEqually')
	btnEqually.addEventListener('click', calculator.equally)


