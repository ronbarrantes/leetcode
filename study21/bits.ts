function isOneBitCharacter(bits: number[]): boolean {
  let i = 0
  while (i < bits.length - 1){
    console.count("times:::")
    i += bits[i] + 1
  }
  return i === bits.length - 1;
}; 




const arrToTest = [1,0,1,1,1,1,0]



console.assert(isOneBitCharacter(arrToTest) === true, 'This should be False')