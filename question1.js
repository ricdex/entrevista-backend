const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100]

let amount = 1;
coins.forEach(coin => amount += coin)

const coinsOrdered = coins.sort((a,b) => a - b);
if(coinsOrdered[coinsOrdered.length-2] < coinsOrdered[coinsOrdered.length-1])
{
    amount = amount - coinsOrdered[coinsOrdered.length-1]
}

console.log(amount);