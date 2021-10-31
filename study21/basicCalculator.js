/**
 * @param {string} s
 * @return {number}
 */

const calculation = (currCalc, sVal, sign) => {
	switch(sign){
	case '+':
		currCalc += +sVal
		break
	case '-':
		currCalc -= +sVal
		break
	default:
		break
	}

	return currCalc
}

var calculate = function(s) {
	let moveSteps = 0

	const helper = (s, steps = 0) => {
		let val = ''
		let currCalculation = 0
		let sign = '+'

		for(let i = 0 + steps; i < s.length; i++){
			// moveSteps++
			// if(s[i] === ' ') continue
			if(/ /.test(s[i])) continue

			if(/\d/.test(s[i]))
				val += s[i]

			if(/[-+]/.test(s[i])){
				currCalculation = calculation(currCalculation, val, sign)
				sign = s[i]
				val = ''
			}

			if(/\(/.test(s[i])){
				const newVal = helper(s, i+1)
				console.log('something here')
				currCalculation = calculation(currCalculation, `${newVal}`, sign)
				i = moveSteps + 1
				console.log('wtf')
			}

			if(/\)/.test(s[i])){
				moveSteps = i + 1
				return calculation(currCalculation, val, sign)
			}
		}

		currCalculation = calculation(currCalculation, val, sign)
		return currCalculation
	}

	return helper(s)
}
/// 0123456789
const ans1 = calculate('- (3 + (4 + 5))')

console.log('CALCULATION OF', ans1, 'SHOULD BE', (1+(4+5+2)-3)+(6+8))
