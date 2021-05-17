/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    // Create empty string variable
    let newStr = ''
    // Loop trough string odd values 
    for(let i = 1; i < s.length; i = i+2){    
    // push to string previous value and shift function return value'
        newStr += s[i-1]
        newStr += shift(s[i-1], s[i])        
    }
    if (s.length % 2) newStr += s[s.length - 1];
    // return new string 
    return newStr
};

// create shift function
// takes two arguments// a character and a number
function shift(char, num){
    // get ascii value for character
    let asciiVal = char.charCodeAt()
    // add number to value 
    asciiVal = asciiVal + Number(num)

    // return ascii character at sum of number and value of char
    return String.fromCharCode(asciiVal)
}

/**
* Runtime: 80 ms, faster than 66.91% of JavaScript online submissions for Replace All Digits with Characters.
* Memory Usage: 38.6 MB, less than 49.51% of JavaScript online submissions for Replace All Digits with Characters.
 */