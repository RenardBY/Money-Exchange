// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let answer = {};
    let message = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency >= 10000) return message;
    else makeExchangeInternal(currency);

    function makeExchangeInternal(currency) {
        if (currency <= 0) {
           return answer;
        }
        else {
            (currency >= 50) ? answer.H = Math.floor(currency/50) : 
            (currency >= 25) ? answer.Q = Math.floor(currency/25) : 
            (currency >= 10) ? answer.D = Math.floor(currency/10) :  
            (currency >= 5) ? answer.N = Math.floor(currency/5) : answer.P = Math.floor(currency/1);
            
            (currency >= 50) ? makeExchangeInternal(currency % 50) : 
            (currency >= 25) ? makeExchangeInternal(currency % 25) : 
            (currency >= 10) ? makeExchangeInternal(currency % 10) :  
            (currency >= 5) ? makeExchangeInternal(currency % 5) : makeExchangeInternal(currency % 1);
        }
    }
    return answer;
}
