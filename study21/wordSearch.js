/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
	let isValid = false


	let counter = 0
	// THINGS THAT NEED TO HAPPEN
	// CHANGE THE GRID TO PUT A * FOR IF VISITED (PUT BACK THE LETTER IF HAVE TO RETRACT)
	// KEEP TRACK OF THE INDEX OF THE WORD AND IF IT REACHES THE END THEN IT IS VALID

	// REMEMBER TO PUT EVERYTHING BACK
	// IF I REACH THE END THEN I'M DONE AND ALL IS FALSE

	console.log(board[0])
	console.log(board[1])
	console.log(board[2])

	const explore = (row, col, idx = 0) => {
		// BASE
		counter++
		if(idx === word.length - 1){
			if(board[row][col] === word[word.length -1])
				isValid = true
			return
		}

		/// MEAT AND POTATOES

		// i can go Up
		// and it's valid and
		// the next letter is the same letter as the word's next letter
		// and it hasn't been visited


		const currLetter = board[row][col]
		board[row][col] = '*'
		
		// top


		if(
			row >= 0 &&
			!isValid &&
			board[row - 1] &&
			word[idx + 1] === board[row - 1][col] &&
			board[row - 1][col] !== '*'
		){

			console.log('GOING TOP ^')
			explore(row - 1, col, idx + 1)
		}

		// bottom
		if(
			row <= board.length - 1 &&
			!isValid &&
			board[row + 1] &&
			word[idx + 1] === board[row + 1][col] &&
			board[row + 1][col] !== '*'
		){

			board[row][col] = '*'
			console.log('GOING BOTTOM v')
			explore(row+1, col, idx + 1)


		}

		// left
		if(
			col >= 0 &&
			!isValid &&
			word[idx + 1] === board[row][col - 1] &&
			board[row][col - 1] !== '*'
		){


			console.log('GOING LEFT <')
			explore(row, col - 1, idx + 1)


		}

		// right
		if(
			col <= board[0].length - 1 &&
			!isValid &&
			word[idx + 1] === board[row][col + 1] &&
			board[row][col + 1] !== '*'
		){

			console.log('GOING RIGHT >')
			explore(row, col + 1, idx + 1)

		}

		board[row][col] = currLetter



		console.log('TIMES RAN:', counter)
	}

	// check if the word is even possible

	const wordCheckerMap = new Map()


	word.split('').map(letter => {
		wordCheckerMap.has(letter) ?
			wordCheckerMap.set(letter, wordCheckerMap.get(letter) + 1):
			wordCheckerMap.set(letter, 1)
	})


	for(let row = 0; row < board.length; row++){
		for(let col = 0; col < board[0].length; col++){
			const letter = board[row][col]
			if(wordCheckerMap.get(letter) > 0){
				wordCheckerMap.set(letter, wordCheckerMap.get(letter) - 1)
			}

			if(wordCheckerMap.get(letter) === 0){
				wordCheckerMap.delete(letter)
			}

			if(wordCheckerMap.size === 0)
				break
		}
	}


	if(wordCheckerMap.size !== 0)
		return false




	// TRAVERSY LOOP
	for(let row = 0; row < board.length; row++){
		for(let col = 0; col < board[0].length; col++){
			const letter = board[row][col]
			// check if the first letter matches the letter of the word
			// if it does begin exploring

			console.log('ROW:', row, '| COL:', col)

			if(letter === word[0])
				explore(row, col)

			if(isValid)
				return isValid
		}

	}

	console.log(board)

	return isValid
}


// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// "ABCCED"

const board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word = 'ABCCED'

const board2 = [['A', 'A', 'A', 'A', 'A', 'A'], ['A', 'A', 'A', 'A', 'A', 'A'], ['A', 'A', 'A', 'A', 'A', 'A'], ['A', 'A', 'A', 'A', 'A', 'A'], ['A', 'A', 'A', 'A', 'A', 'A'], ['A', 'A', 'A', 'A', 'A', 'A']]
const word2 = 'AAAAAAAAAAAAAAB'

console.log('SHOULD BE TRUE', exist(board, word))
// console.log('SHOULD BE FALSE', exist(board2, word2))
