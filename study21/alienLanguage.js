Array.prototype.add = Array.prototype.push
Array.prototype.remove = Array.prototype.shift
// Array.prototype.isEmpty = (function() {return this.length === 0})()


var alienOrder = function(words) {
	const adjList = new Map()
	const counts = new Map()

    // Step 0: Create DS
	for(const word of words){
		for(const letter of word){
			counts.set(letter, 0)
			adjList.set(letter, [])
		}
	}

	// Step 1: find all edges
	for(let i = 0; i < words.length -1; i++){
		const word1 = words[i]
		const word2 = words[i+1]

		// word2 is not prefix of word1
		const startsWith = new RegExp(`^${word2}`)
		if(word1.length > word2.length && startsWith.test(word1)){
			return ''
		}

		for(let j = 0; j < Math.min(word1.length, word2.length); j++){
			if(word1[j] !== word2[j]){
				adjList.get(word1[j]).push(word2[j])
				counts.set(word2[j], counts.get(word2[j]) + 1)
				break
			}
		}
	}



	// Step 2: BFS
	let sb = ''
	const queue = []

	for()



	console.log('done')
}

const dict1 = ['wxqkj', 'whqg', 'cckgh', 'cdxg', 'cdxdt', 'cdht', 'ktgxt', 'ktgch', 'ktdw', 'ktdc', 'jqw', 'jmc', 'jmg']
const dict2 = ['wrt', 'wrf', 'er', 'ett', 'rftt']
console.log(alienOrder(dict1))