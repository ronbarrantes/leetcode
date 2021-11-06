Welcome to Facebook!

This is just a simple shared plaintext pad, with no execution capabilities.

When you know what language you would like to use for your interview,
simply choose it from the dropdown in the top bar.

Enjoy your interview!

You are given an array of integers. Write an algorithm that brings all nonzero elements to the left of the array, and returns the number of nonzero elements. The algorithm should operate in place, i.e. shouldn't create a new array. The order of the nonzero elements does not matter. The numbers that remain in the right portion of the array can be anything.

Example: given the array [ 1, 0, 2, 0, 0, 3, 4 ], a possible answer is [ 4, 1, 3, 2, ?, ?, ? ], 4 non-zero elements, where "?" can be any number.

                 // r
                 // l
// [ 1, 4, 2, 3, 0, 0, 0 ] 0(n)

     // l.             r    
// [ 1, 0, 2, 0, 0, 3, 4 ]
                
// [ 0 ]
// [1, 2, 3]

//                  r
//         l
// [ 1, 4, 2, 0, 0, 3, 0 ]
                 
                 

                 
const moveZeros = (numsArr) => {
  let leftP = 0 // 1
  let rightP = numsArr.length - 1 // 6
  
  while(leftP < rightP){ // true
    const leftN = numsArr[leftP]   // 0
    const rightN = numsArr[rightP] // 4
    
    if(leftN === 0 && rightN > 0){
      // swap
      
      numsArr[leftP] = rightN // 4
      numsArr[rightP] = leftN // 0
      
      // move pointers
      leftP ++
      rightP --
      continue
    }
    
    // if left sees a nonZero
    if(leftN > 0){
      leftP++
    }

    
    // if right sees a nonZero
    if(rightN === 0){ 
      rightP--
    }
  }    
}


// Given a 2D board and one word, return whether the word could be found in the board from sequentially adjacent cells. The word can start with any position in the board and can go horizontally or vertically.


// A word: "good"
// Board: [
// "bkdu",
// "goob",
// "face"
// ]



// Board: [
// [b, k, d,u],
// [o, o, o, b",
// "face"
// ]


const wordInBoard = (board, word) => {
  let isFound = false
  let letterCounter = 0
  
  // splitting the "word" into an array of letters
  
  
  board = board.map(word => word.split(''))
  
  
  const explore = (row, col, idx) => {
    // recursive backtracking
    
    
    // modify the board state
    
    const temp = board[row][col]
    board[row][col] = '*'
    
    // EXPLORING IN ALL DIRECTIONS
    
    // if we go to the top
    
    
    // if we go to the bottom
    
    // if we go to the left
    
    
    // if we go to the right

    
    // PUTTING THINGS BACK
    
    
      board[row][col] = temp
  }
  
  
  for(let col = 0; col < board.length; col++){
    for(let row = 0; row < board[0].length; row++){
      const currLetter = board[col][row]
      
      if(currLetter === word[0]){
        explore(row, col, 0)
      }
  }

}

