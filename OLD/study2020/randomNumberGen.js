'use strict'
const fs = require('fs')

let arr = []

const iterations = process.argv[2] || 10

for (let i = 1; i <= iterations; i++){
	arr.push(i)
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
}

let numbers = `module.exports = [${shuffle(arr)}]`

fs.writeFile(`randomNumbers.js`, numbers, 'utf8', (err) => {
	if (err) console.error('ERR:', err)
	console.log('Numbers saved')
})
