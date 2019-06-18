'use strict'

const helper = (t, r, i = 0) => {
  if (i === r)
    return

  if (i===0)
    t.push([1])

  else{
    t.push([])
    for(let j = 0; j < i+1; j++){
      const left = t[i-1][j-1] || 0
      const right = t[i-1][j] || 0
      t[i].push(left+right)
    }
  }
  i++
  helper(t, r, i)
}

var generate = function(numRows) {
  let triangle = []
  helper(triangle, numRows)
  return triangle
}

console.log(generate(5))