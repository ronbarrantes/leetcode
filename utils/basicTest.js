let testNum = 1

const basicTest = (input, output, expected) => {
	const pass = `\x1b[1m\x1b[32mTEST #${testNum} | √ PASS\x1b[0m`
	const fail = `\x1b[1m\x1b[31mTEST #${testNum} | X FAIL\x1b[0m`

	const isPassing = output === expected
	const result = isPassing ? pass : fail

	console.log('|', result, '|', input, '|', output, '|', expected)
	console.log('+------------------+')
	testNum++
}

module.exports = { basicTest }