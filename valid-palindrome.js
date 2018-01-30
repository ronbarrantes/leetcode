/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    s = s.replace(/[\W]/gi, '')
    
    for (let i = 0; i < s.length/2; i++){
        if(s[i].toLowerCase() !== s[s.length - i - 1].toLowerCase()){
            return false
        }
    }
    
    return true
    
};
