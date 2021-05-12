const basicTest = (input, output, expected) => {
	const pass = `\x1b[1m\x1b[32m√ passing\x1b[0m`
	const fail = `\x1b[1m\x1b[31m⨉ failing\x1b[0m`

	const result = output === expected ? pass : fail

	console.log(input, '|', output, '|', expected, '|||', result)
}

module.exports = { basicTest }