/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let greatestNum;
    let candiesCopy = candies.map(candy => candy);
    let result = [];
    let sum = 0;
    let i = 0;
    let sortedArray = candiesCopy.sort((a,b) => a > b ? -1 : 1);
    greatestNum = sortedArray[0];
    
    for(i=0; i < candies.length; i++) {
        sum = candies[i] + extraCandies
        if(sum < greatestNum){
            result.push(false)
        } else {
        result.push(true)            
        }
        sum = 0;
    }
return result
};