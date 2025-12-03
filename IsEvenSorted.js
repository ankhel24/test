function IsEvenSorted(arr)
{
    let lastEven = arr[0];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 == 0)
        {
            if (arr[i] < lastEven)
            {
                return false;
            }
            else
            {
            lastEven = arr[i];
            }
        }
    }
    return true;
}
let arr = [2,4,6,22,10,12];
console.log(IsEvenSorted(arr));