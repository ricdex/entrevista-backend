const  inputArray = [1, 2, 3, 5, 6, 8, 9];
const outputArray = []
for (let i = 0; i < inputArray.length ; i++)
{
    outputArray.push(inputArray[i] * inputArray[i])
}

console.log(outputArray.sort( (a,b) => a -b ));
