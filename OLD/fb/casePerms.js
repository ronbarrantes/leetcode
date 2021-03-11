/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let result = []

    const helper = (str, pt = 0) => {
        if(pt >= S.length){
            result.push(str)
            return
        }

        if(parseInt(S[pt]) || parseInt(S[pt]) === 0)
            helper(str+=S[pt], pt + 1)
        else{
            helper(str + S[pt].toLowerCase(), pt + 1)
            helper(str + S[pt].toUpperCase(), pt + 1)
        }
    }

    helper('', 0)
    return result
}