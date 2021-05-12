const basicTest = (input, output, expected) => {
	const pass = `\x1b[1m\x1b[32m√ passing\x1b[0m`
	const fail = `\x1b[1m\x1b[31mX failing\x1b[0m`

	const isPassing = output === expected
	const result = isPassing ? pass : fail

	console.log('|', result, '|', input, '|', output, '|', expected)
	console.log('+-----------+')
}

module.exports = { basicTest }