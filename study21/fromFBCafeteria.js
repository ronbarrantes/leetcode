
/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */

const assert = require('assert').strict

function getMaxAdditionalDinersCount(N, K, M, S) {
    // Write your code here
    // arr of arrays
    // count the groups that can happen in each array of arrays
    // figure out the unions
    // figure out how many groups can be done with each array

    //// N = total number of seats
    //// K = number of seats in between
    //// M = number of diners
    //// S = array of the seats

	let groups = []
	const invalidSeats = new Set()
	let lastTopEnd = 1

    // add invalid seats to the set

	S = S.sort((a, b) => a - b) // n(log*n)

	console.log('Sorted', S)
	for(let i = 0; i < S.length; i++){
		console.log('Nums', S[i])

		// bottomEnd
		// topEnd

		let btmEndVal = S[i] - K > lastTopEnd ? S[i] - K : lastTopEnd
		let topEndVal = S[i] + K < N ? S[i] + K : N

		for(let i = btmEndVal; i <= topEndVal; i++){
			invalidSeats.add(i)

			lastTopEnd = i
		}
	}

	// Fill up the new array with the groups and how many contiguous seats

	return 0
}

  // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
  //       [       ] [       |   ]

const inputs = [
	{
		N : 15,
		K : 2,
		M : 3,
		S : [11, 6, 14],
		ans: 1,
	},
	{
		N : 10,
		K : 1,
		M : 2,
		S : [2, 6],
		ans: 3,
	},
]

for(let i = 0; i < 1
	// inputs.length
	; i++){
	const { N, K, M, S, ans } = inputs[i]

	const output = getMaxAdditionalDinersCount(N, K, M, S)
	// assert.strictEqual(output, ans)
}

   /*

       // for(const num of S){ // On*m
    //   const bottomEnd = num - K > 1 ? num - K : 1
    //   const topEnd = num + K < N ? num + K : N

    //   for(let i = bottomEnd; i <= topEnd; i++){
    //       seatsToRemove.add(i)
    // }

    // add groups of seats
    for(let i = 1; i <= N; i++){
      if(!seatsToRemove.has(i))
        groups.push(i)
    }

    let result = groups.length > 0 ? 1 : 0
    let currMod = K
    for(let i = 1; i < groups.length; i++){
      const prev = groups[i-1]
      const curr = groups[i]

      // if is not contiguous
      if(prev + 1 !== curr){
        result++
      }

      // if is contiguous
      else{
        if(currMod === 0){
          result++
          currMod = K
        }
        else
          currMod--
      }
    }

    console.log('arr', groups)
    console.log('result', result)

    return result;

    */