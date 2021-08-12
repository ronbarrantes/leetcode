const even = (n) => n/2
const odd = (n) => (3*n) + 1

const conjecture = (n) => {
	const arr = []
	while(n !== 1){
		arr.push(n)
		n = n % 2 === 0 ? even(n) : odd(n)
	}

	if(n === 1) arr.push(n)
	return arr
}

console.log(conjecture(2900))