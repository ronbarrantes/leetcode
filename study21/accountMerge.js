const assert = require('assert').strict
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

const mergeInformation = (name, emails, info) => {
	if(!info.has(name)){
		const newMap = new Map([[0, new Set(emails)]])

		info.set(name, newMap)
	} else {
		let hasCommonEmail = false
		let lastIndex = null

		for(const [key, val] of info.get(name)){
			if(!hasCommonEmail){
				for(const email of emails){
					if(val.has(email)){
						info.get(name).set(key, new Set([...val, ...emails]))
						hasCommonEmail = true
						break
					}
				}
				lastIndex = key
			} else{
				break
			}
		}

		if(!hasCommonEmail){
			info.get(name).set(lastIndex + 1, new Set(emails))
		}
	}
	return info
}

const reduceInfo = (name, emails) => {
	const arrEmails = [...emails].sort()
	return [name, ...arrEmails]
}

var accountsMerge = function(accounts) {
	const result = []
	let mergedInfo = new Map()

    // ADD TO MAP
	for(const account of accounts){
        // split it
		const name = account.splice(0, 1)[0]
		mergedInfo = mergeInformation(name, account, mergedInfo)
        // add to map
	}

    // REDUCE TO ARRAY
	for(const [name, accounts] of mergedInfo){
		for(const [idx, emails] of accounts){
			result.push(reduceInfo(name, emails))
		}
	}

	return result
}

// const input = [['John', 'johnsmith@mail.com', 'john_newyork@mail.com'], ['John', 'johnsmith@mail.com', 'john00@mail.com'], ['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com']]
// const output = [['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
// ['John', 'johnnybravo@mail.com'],
// ['Mary', 'mary@mail.com'],
// ]

const input = [['David', 'David0@m.co', 'David1@m.co'], ['David', 'David3@m.co', 'David4@m.co'], ['David', 'David4@m.co', 'David5@m.co'], ['David', 'David2@m.co', 'David3@m.co'], ['David', 'David1@m.co', 'David2@m.co']]
const expected = [['David', 'David0@m.co', 'David1@m.co', 'David2@m.co', 'David3@m.co', 'David4@m.co', 'David5@m.co']]

const ans = accountsMerge(input)

console.log(assert.deepStrictEqual(ans, expected))