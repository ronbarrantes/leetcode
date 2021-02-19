let arr = ['A', ' ', 'm', 'a', 'n', ',', ' ', 'a', ' ', 'p', 'l', 'a', 'n', ',', ' ', 'a', ' ', 'c', 'a', 'n', 'a', 'l', ':', ' ', 'P', 'a', 'n', 'a', 'm', 'a']
let o1 = ['a', 'm', 'a', 'n', 'a', 'P', ' ', ':', 'l', 'a', 'n', 'a', 'c', ' ', ' ', 'a', ',', 'n', 'a', 'l', 'p', ' ', 'a', ' ', ',', 'n', 'a', 'm', ' ', 'A']
let a1 = ['a', 'm', 'a', 'n', 'a', 'P', ' ', ':', 'l', 'a', 'n', 'a', 'c', ' ', 'a', ' ', ',', 'n', 'a', 'l', 'p', ' ', 'a', ' ', ',', 'n', 'a', 'm', ' ', 'A']

const helper = (s, i) => {
	if(i >= (s.length/2))
		return
	console.log(i)
	let swap = s[i]
	s[i] = s[s.length-1-i]
	s[s.length-1-i] = swap
	i++
	return helper(s, i)
}

const printArr = (s) => {
	let i = 0
	helper(s, i)
	return s
}

let ans = printArr(arr)

for(let i =0; i< ans.length; i++){
	console.log('ans=', ans[i], '|out', a1[i], '|', ans[i] === a1[i], i)
}

// console.log(ans === a1)
