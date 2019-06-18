var isAnagram = function(s, t) {
  let hashA = {}
  let hashB = {}

  let addToHash = (str, hash) => {
    for(let i = 0; i < str.length; i++){
      hash[str[i]] ? hash[str[i]] ++ : hash[str[i]] = 1
    }
  }

  addToHash(s, hashA)
  addToHash(t, hashB)

  for (let val in hashA) {
    if (hashA[val] !== hashB[val]) {
      return false
    }

    delete hashA[val]
    delete hashB[val]
  }

  if (JSON.stringify(hashA) !== JSON.stringify(hashB)){
    return false
  }

  return true
}

let str1 = 'hell'
let str2 = 'lelho'

console.log(isAnagram(str1, str2))