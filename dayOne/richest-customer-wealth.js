/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum = 0;
    let maxWealth = 0;
    let i;
    let j;
    for(i = 0; i < accounts.length; i++) {
        for(j = 0; j < accounts[i].length; j++){
            sum += accounts[i][j];
            
        }
         console.log(sum)
        if(maxWealth < sum){
            maxWealth = sum
        }
        sum=0
    }
    return maxWealth
};