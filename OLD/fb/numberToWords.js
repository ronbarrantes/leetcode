/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {

    const guide = new Map ([
        [ 1, 'One'],
        [2, 'Two'], [ 3, 'Three'],
        [4, 'Four'], [ 5, 'Five'],
        [6, 'Six'], [ 7, 'Seven'],
        [8, 'Eight'], [ 9, 'Nine'],
        [10, 'Ten'], [ 11, 'Eleven'],
        [12, 'Twelve'], [ 13, 'Thirteen'],
        [14, 'Fourteen'], [ 15, 'Fifteen'],
        [16, 'Sixteen'], [ 17, 'Seventeen'],
        [18, 'Eighteen'], [19, 'Nineteen'],
        [20, 'Twenty'], [ 30, 'Thirty'],
        [40, 'Forty'], [ 50, 'Fifty'],
        [60, 'Sixty'], [ 70, 'Seventy'],
        [80, 'Eighty'], [ 90, 'Ninety'],
        [100, 'Hundred'],
    ])

    const scale = new Map([
        [3, 'Billion'],
        [2, 'Million'],
        [1, 'Thousand'],
    ])

    const breakDownNum = num => {
        const strOfNums = num.toString()
        const arrOfNums = []
        let currThird = ''

        for (let i = 0; i < strOfNums.length; i++){
            currThird = strOfNums[strOfNums.length - 1 - i] + currThird
            if(currThird.length === 3){
                arrOfNums.unshift(parseInt(currThird))
                currThird = ''
            }
        }

        currThird.length && arrOfNums.unshift(parseInt(currThird))

        return arrOfNums
    }

    const transformNum = num => {
        let word = ''
        let pos = ''

        const arr = breakDownNum(num)

        for (let i = 0; i < arr.length; i++){
            if(arr[i] === 0) continue

            if (word.length>0) word += ' '

            let nthSpot = arr.length -1 -i
            let currNum = arr[i]
            let nMinus = 0

            if(currNum >= 100){
                word += guide.get(parseInt(currNum/100)) + ' Hundred'
                nMinus = parseInt(currNum/100) * 100
                currNum -= nMinus
            }

            if(currNum > 20){
                if(nMinus>0) word += ' '
                word += guide.get(parseInt(currNum/10)*10)
                nMinus = parseInt(currNum/10) * 10
                currNum -= nMinus
            }

            if(currNum <= 20 && currNum > 0){
                if(nMinus>0) word += ' '
                word += guide.get(parseInt(currNum))
            }

      // add the nthSpot
            if (!nthSpot) continue
            pos = scale.get(nthSpot)
            word += ' ' + pos
        }

        return word
    }

    if (num === 0)
        return 'Zero'

    return transformNum(num)
}

const numbers = [0, 123, 1, 12345, 10, 12, 1000010, 10180, 10100, 1234567891, 1000000000]

// console.log(numberToWords(numbers[1]))

for(let i = 0; i< numbers.length; i++){
    console.log(numberToWords(numbers[i]))
}
