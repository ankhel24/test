function PartPali(arr,m,k)
{
    let left = m;
    let right = k;
    while (left < right)
    {
        if (arr[left] != arr[right])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
let arr = [1,2,3,4,3,2,1];
console.log(PartPali(arr,2,4));