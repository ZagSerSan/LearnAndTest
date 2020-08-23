// переменные
	let title = document.getElementById('block-title')

	let output
	let temp = 0
	let tempFirstStatus = true
	let tempQ = false

	let tempMult = false
	let saveMult
	let tempMultPlus = false
	let saveMultPlus
	let tempMultMinus = false
	let saveMultMinus

	let tempSplit = false
	let saveSplit
	let tempSplitPlus = false
	let saveSplitPlus
	let tempSplitMinus = false
	let saveSplitMinus

	let tempMinus = false
	let saveMinus

	let tempPlus = false
	let savePlus
	let saveNum

	let numbers = []

let calculator = {
// input 1-9
	input0: function () {
		if (title.innerText === '-0') {
			title.innerText = 0
			
			temp = 0
			saveNum = parseInt(temp)
		} else {
				if (tempQ === true) {
				output = (title.innerText = '') + '0'
				title.innerText += '0'

				temp = title.innerText
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
		}
	},
	input1: function () {
		if (title.innerText === '-0') {
			output = (title.innerText).substring(0, (title.innerText).length - 1) + '1'
			title.innerText = output
			
			temp = -1
			saveNum = parseInt(temp)
		} else {
			if (tempQ === true) {
				output = (title.innerText = '') + '1'
				title.innerText += '1'

				temp = title.innerText
				saveNum = parseInt(temp)

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
		}
	},
	input2: function () {
		if (title.innerText === '-0') {
			output = (title.innerText).substring(0, (title.innerText).length - 1) + '2'
			title.innerText = output
			
			temp = -2
			saveNum = parseInt(temp)
		} else {
			if (tempQ === true) {
				output = (title.innerText = '') + '2'
				title.innerText += '2'

				temp = title.innerText
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
		}
	},
	input3: function () {
		if (title.innerText === '-0') {
			output = (title.innerText).substring(0, (title.innerText).length - 1) + '3'
			title.innerText = output
			
			temp = -3
			saveNum = parseInt(temp)
		} else {
			if (tempQ === true) {
				output = (title.innerText = '') + '3'
				title.innerText += '3'

				temp = title.innerText
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
		}
	},
	input4: function () {
		if (title.innerText === '-0') {
			output = (title.innerText).substring(0, (title.innerText).length - 1) + '4'
			title.innerText = output
			
			temp = -4
			saveNum = parseInt(temp)
		} else {
			if (tempQ === true) {
				output = (title.innerText = '') + '4'
				title.innerText += '4'

				temp = title.innerText
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
		}
	},
	input5: function () {
		if (title.innerText === '-0') {
			output = (title.innerText).substring(0, (title.innerText).length - 1) + '5'
			title.innerText = output
			
			temp = -5
			saveNum = parseInt(temp)
		} else {
			if (tempQ === true) {
				output = (title.innerText = '') + '5'
				title.innerText += '5'

				temp = title.innerText
				saveNum = parseInt(temp)

				tempQ = false
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
		}
	},
	input6: function () {
		if (title.innerText === '-0') {
			output = (title.innerText).substring(0, (title.innerText).length - 1) + '6'
			title.innerText = output
			
			temp = -6
			saveNum = parseInt(temp)
		} else {
				if (tempQ === true) {
				output = (title.innerText = '') + '6'
				title.innerText += '6'

				temp = title.innerText
				saveNum = parseInt(temp)

				tempQ = false
			} else {
				if (title.innerText === '0') {
					output = (title.innerText).substring(0, (title.innerText).length - 1) + '6'
					title.innerText = output
					
					temp = '6'
					saveNum = parseInt(temp)
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
		}
	},
	input7: function () {
		if (title.innerText === '-0') {
			output = (title.innerText).substring(0, (title.innerText).length - 1) + '7'
			title.innerText = output
			
			temp = -7
			saveNum = parseInt(temp)
		} else {
				if (tempQ === true) {
				output = (title.innerText = '') + '7'
				title.innerText += '7'

				temp = title.innerText
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
		}
	},
	input8: function () {
		if (title.innerText === '-0') {
			output = (title.innerText).substring(0, (title.innerText).length - 1) + '8'
			title.innerText = output
			
			temp = -8
			saveNum = parseInt(temp)
		} else {
				if (tempQ === true) {
				output = (title.innerText = '') + '8'
				title.innerText += '8'

				temp = title.innerText
				saveNum = parseInt(temp)

				tempQ = false
			} else {
				if (title.innerText === '0') {
					output = (title.innerText).substring(0, (title.innerText).length - 1) + '8'
					title.innerText = output
					
					temp = '8'
					saveNum = parseInt(temp)
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
		}
	},
	input9: function () {
		if (title.innerText === '-0') {
			output = (title.innerText).substring(0, (title.innerText).length - 1) + '9'
			title.innerText = output
			
			temp = -9
			saveNum = parseInt(temp)
		} else {
				if (tempQ === true) {
				output = (title.innerText = '') + '9'
				title.innerText += '9'

				temp = title.innerText
				saveNum = parseInt(temp)

				tempQ = false
			} else {
				if (title.innerText === '0') {
					output = (title.innerText).substring(0, (title.innerText).length - 1) + '9'
					title.innerText = output
					
					temp = '9'
					saveNum = parseInt(temp)
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
		} else if (title.innerText.endsWith('/') === true && tempSplit === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '*'
			tempSplit = false
			tempMult = true
		} else if (title.innerText.endsWith('-') === true && tempMinus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '*'
			tempMinus = false
			tempMult = true
		} else if (title.innerText.endsWith('+') === true && tempPlus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '*'
			tempPlus = false
			tempMult = true
		} else {
			if (tempQ === true) {
				numbers[numbers.length] = parseInt(title.innerText)
				temp = ''
				output = title.innerText + '*'
				title.innerText = output
				tempMult = true
				tempQ = false
			} else if (tempMult === true) {
				saveMult = numbers.pop()
				numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
				temp = ''

				output = title.innerText + '*'
				title.innerText = output
				tempFirstStatus = false
			} else {
				if (tempSplit === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
					temp = ''

					output = title.innerText + '*'
					title.innerText = output
		
					tempSplit = false
					tempMult = true
					tempFirstStatus = false
				} else if (tempMinus === true) {
					saveMultMinus = temp
					tempMultMinus = true
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					tempMinus = false
					tempMultMinus = true
					tempFirstStatus = false
				} else if (tempPlus === true) {
					saveMultPlus = temp
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					tempPlus = false
					tempMultPlus = true
					tempFirstStatus = false
				} else if (tempMultPlus === true) {
					// saveMult = numbers.pop()
					// numbers[numbers.length] = (parseInt(saveMult) + (parseInt(saveMultPlus) * parseInt(temp)))
					// temp = ''

					// saveMult = saveMultPlus
					saveMultPlus = parseInt(saveMultPlus) * parseInt(temp)
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					// tempMultPlus = false
					// tempMult = true
					tempFirstStatus = false
				} else if (tempMultMinus === true) {
					// saveMult = numbers.pop()
					// numbers[numbers.length] = (parseInt(saveMult) - (parseInt(saveMultMinus) * parseInt(temp)))
					// temp = ''

					saveMultMinus = parseInt(saveMultMinus) * parseInt(temp)
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					// tempMultMinus = false
					// tempMult = true
					tempFirstStatus = false
				} else if (tempSplitPlus === true) {
					// saveSplit = numbers.pop()
					// numbers[numbers.length] = (parseInt(saveSplit) + (parseInt(saveSplitPlus) / parseInt(temp)))
					// temp = ''

					saveMultPlus = parseInt(saveSplitPlus) / parseInt(temp)
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					tempSplitPlus = false
					tempMultPlus = true
					// tempSplitPlus = false
					// tempMult = true
					tempFirstStatus = false
				} else if (tempSplitMinus === true) {
					// saveSplit = numbers.pop()
					// numbers[numbers.length] = (parseInt(saveSplit) - (parseInt(saveSplitMinus) / parseInt(temp)))
					// temp = ''

					saveMultMinus = parseInt(saveSplitMinus) / parseInt(temp)
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					tempSplitMinus = false
					tempMultMinus = true
					tempFirstStatus = false
				} else {
					numbers[numbers.length] = saveNum
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					tempMult = true
					tempMinus = false
					tempSplit = false
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
		} else if (title.innerText.endsWith('*') === true && tempMult === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '/'
			tempMult = false
			tempSplit = true
		} else if (title.innerText.endsWith('-') === true && tempMinus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '/'
			tempMinus = false
			tempSplit = true
		} else if (title.innerText.endsWith('+') === true && tempPlus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '/'
			tempPlus = false
			tempSplit = true
		} else {
			if (tempQ === true) {
				numbers[numbers.length] = parseInt(title.innerText)
				temp = ''
				output = title.innerText + '/'
				title.innerText = output
				tempSplit = true
				tempQ = false
			} else if (tempSplit === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
				temp = ''

				output = title.innerText + '/'
				title.innerText = output
				tempFirstStatus = false
			} else {
				if (tempMult === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					tempMult = false
					tempSplit = true
					tempFirstStatus = false
				} else if (tempMinus === true) {
					saveSplitMinus = temp
					tempSplitMinus = true
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					tempMinus = false
					tempFirstStatus = false
				} else if (tempPlus === true) {
					saveSplitPlus = temp
					tempSplitPlus = true
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					tempPlus = false
					tempFirstStatus = false
				} else if (tempMultPlus === true) {
					// saveMult = numbers.pop()
					// numbers[numbers.length] = (parseInt(saveMult) + (parseInt(saveMultPlus) * parseInt(temp)))
					// temp = ''

					saveSplitPlus = parseInt(saveMultPlus) * parseInt(temp)
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					tempMultPlus = false
					tempSplitPlus = true
					tempFirstStatus = false
				} else if (tempMultMinus === true) {
					// saveMult = numbers.pop()
					// numbers[numbers.length] = (parseInt(saveMult) - (parseInt(saveMultMinus) * parseInt(temp)))
					// temp = ''

					saveSplitMinus = parseInt(saveMultMinus) * parseInt(temp)
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					tempMultMinus = false
					tempSplitMinus = true
					tempFirstStatus = false
				} else if (tempSplitPlus === true) {
					// saveSplit = numbers.pop()
					// numbers[numbers.length] = (parseInt(saveSplit) + (parseInt(saveSplitPlus) / parseInt(temp)))
					// temp = ''

					saveSplitPlus = parseInt(saveSplitPlus) / parseInt(temp)
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					// tempSplitPlus = false
					// tempSplit = true
					tempFirstStatus = false
				} else if (tempSplitMinus === true) {
					// saveSplit = numbers.pop()
					// numbers[numbers.length] = (parseInt(saveSplit) - (parseInt(saveSplitMinus) / parseInt(temp)))
					// temp = ''

					saveSplitMinus = parseInt(saveSplitMinus) / parseInt(temp)
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					// tempSplitMinus = false
					// tempSplit = true
					tempFirstStatus = false
				} else {
					numbers[numbers.length] = saveNum
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					tempMinus = false
					tempMult = false
					tempSplit = true
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
		} else if (title.innerText.endsWith('*') === true && tempMult === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '-'
			tempMult = false
			tempMinus = true
		} else if (title.innerText.endsWith('/') === true && tempSplit === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '-'
			tempSplit = false
			tempMinus = true
		} else if (title.innerText.endsWith('+') === true && tempPlus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '-'
			tempPlus = false
			tempMinus = true
		} else {
			if (tempQ === true) {
				numbers[numbers.length] = parseInt(title.innerText)
				temp = ''
				output = title.innerText + '-'
				title.innerText = output
				tempMinus = true
				tempQ = false
			} else if (tempMinus === true) {
				saveMinus = numbers.pop()
				numbers[numbers.length] = (parseInt(saveMinus) - parseInt(temp))
				temp = ''

				output = title.innerText + '-'
				title.innerText = output
				tempFirstStatus = false
			} else {
				if (tempMult === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempMult = false
					tempMinus = true
					tempFirstStatus = false
				} else if (tempSplit === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output
		
					tempSplit = false
					tempMinus = true
					tempFirstStatus = false
				} else if (tempPlus === true) {
					savePlus = numbers.pop()
					numbers[numbers.length] = (parseInt(savePlus) + parseInt(temp))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempPlus = false
					tempMinus = true
					tempFirstStatus = false
				} else if (tempMultPlus === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) + (parseInt(saveMultPlus) * parseInt(temp)))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempMultPlus = false
					tempMinus = true
					tempFirstStatus = false
				} else if (tempMultMinus === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) - (parseInt(saveMultMinus) * parseInt(temp)))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempMultMinus = false
					tempMinus = true
					tempFirstStatus = false
				} else if (tempSplitPlus === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) + (parseInt(saveSplitPlus) / parseInt(temp)))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempSplitPlus = false
					tempMinus = true
					tempFirstStatus = false
				} else if (tempSplitMinus === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) - (parseInt(saveSplitMinus) / parseInt(temp)))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempSplitMinus = false
					tempMinus = true
					tempFirstStatus = false
				} else {
					numbers[numbers.length] = saveNum
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempMinus = true
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
		} else if (title.innerText.endsWith('*') === true && tempMult === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '+'
			tempMult = false
			tempPlus = true
		} else if (title.innerText.endsWith('/') === true && tempSplit === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '+'
			tempSplit = false
			tempPlus = true
		} else if (title.innerText.endsWith('-') === true && tempMinus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '+'
			tempMinus = false
			tempPlus = true
		} else {
			if (tempQ === true) {
				numbers[numbers.length] = parseInt(title.innerText)
				temp = ''
				output = title.innerText + '+'
				title.innerText = output
				tempPlus = true
				tempQ = false
			} else if (tempPlus === true) {
				savePlus = numbers.pop()
				numbers[numbers.length] = (parseInt(savePlus) + parseInt(temp))
				temp = ''

				output = title.innerText + '+'
				title.innerText = output
				tempFirstStatus = false
			} else {
				if (tempMult === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempMult = false
					tempPlus = true
					tempFirstStatus = false
				} else if (tempSplit === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempSplit = false
					tempPlus = true
					tempFirstStatus = false
				} else if (tempMinus === true) {
					saveMinus = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMinus) - parseInt(temp))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempMinus = false
					tempPlus = true
					tempFirstStatus = false
				} else if (tempMultPlus === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) + (parseInt(saveMultPlus) * parseInt(temp)))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempMultPlus = false
					tempPlus = true
					tempFirstStatus = false
				} else if (tempMultMinus === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) - (parseInt(saveMultMinus) * parseInt(temp)))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempMultMinus = false
					tempPlus = true
					tempFirstStatus = false
				} else if (tempSplitPlus === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) + (parseInt(saveSplitPlus) / parseInt(temp)))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempSplitPlus = false
					tempPlus = true
					tempFirstStatus = false
				} else if (tempSplitMinus === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) - (parseInt(saveSplitMinus) / parseInt(temp)))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempSplitMinus = false
					tempPlus = true
					tempFirstStatus = false
				} else {
					numbers[numbers.length] = parseInt(temp)
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempPlus = true
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

		tempMult = false
		tempMultPlus = false
		tempMultMinus = false

		tempSplit = false
		tempSplitPlus = false
		tempSplitMinus = false

		tempMinus = false
		tempPlus = false
	},
	back: function () {
		if ((title.innerText).length === 1) {
			temp = ''
			title.textContent = 0
		} else if (tempMult === true) {
			title.innerText = (title.innerText).substring(0, (title.innerText).length - 1)
			temp = parseInt(title.innerText)
			saveNum = temp
			numbers.length = 0
			tempMult = false
		} else if (tempSplit === true) {
			title.innerText = (title.innerText).substring(0, (title.innerText).length - 1)
			temp = parseInt(title.innerText)
			saveNum = temp
			numbers.length = 0
			tempSplit = false
		} else if (tempMinus === true) {
			title.innerText = (title.innerText).substring(0, (title.innerText).length - 1)
			temp = parseInt(title.innerText)
			saveNum = temp
			numbers.length = 0
			tempMinus = false
		} else if (tempPlus === true) {
			title.innerText = (title.innerText).substring(0, (title.innerText).length - 1)
			temp = parseInt(title.innerText)
			saveNum = temp
			numbers.length = 0
			tempPlus = false
		} else {
			title.innerText = (title.innerText).substring(0, (title.innerText).length - 1)
			temp = parseInt(title.innerText)
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
			if (tempMult === true) {
				saveMult = numbers.pop()
				numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
			} else if (tempMultPlus === true){
				saveMult = numbers.pop()
				numbers[numbers.length] =(parseInt(saveMultPlus) * parseInt(temp)) + parseInt(saveMult)
			} else if (tempMultMinus === true) {
				saveMult = numbers.pop()
				numbers[numbers.length] = parseInt(saveMult) - (parseInt(saveMultMinus) * parseInt(temp))
			} else if (tempSplit === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
			} else if (tempSplitPlus === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = parseInt(saveSplit) + (parseInt(saveSplitPlus) / parseInt(temp))
			} else if (tempSplitMinus === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = parseInt(saveSplit) - (parseInt(saveSplitMinus) / parseInt(temp))
			} else if (tempPlus === true) {
				numbers[0] = numbers[0] + parseInt(temp)
			} else if (tempMinus === true) {
				numbers[0] = numbers[0] - parseInt(temp)
			} else {
				title.innerText = 0
			}
			title.innerText = numbers[0]
			console.log('tempFirstStatus else')
			tempQ = true

			temp = '0'
			saveNum = ''
			numbers.length=0

			tempMult = false
			tempMultPlus = false
			tempMultMinus = false

			tempSplit = false
			tempSplitPlus = false
			tempSplitMinus = false

			tempMinus = false
			tempPlus = false
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


